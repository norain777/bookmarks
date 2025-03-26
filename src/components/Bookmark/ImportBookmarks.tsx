import React, { useState } from 'react';

import { parseBookmarks } from '../../data/bookmarks';

interface ImportBookmarksProps {
  onImport: (bookmarkHtml: string) => void;
}

const ImportBookmarks = ({ onImport }: ImportBookmarksProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookmarkHtml, setBookmarkHtml] = useState('');
  const [error, setError] = useState('');

  const handleImport = () => {
    try {
      // 尝试解析书签
      const parsedBookmarks = parseBookmarks(bookmarkHtml);

      if (parsedBookmarks.length === 0) {
        setError('没有找到有效的书签数据，请检查格式是否正确');
        return;
      }

      // 保存原始HTML到localStorage
      localStorage.setItem('bookmarks', bookmarkHtml);

      // 调用父组件的导入回调
      onImport(bookmarkHtml);

      // 重置状态并关闭弹窗
      setBookmarkHtml('');
      setError('');
      setIsOpen(false);
    } catch (err) {
      setError('解析书签数据时出错，请检查格式是否正确');
      // eslint-disable-next-line no-console
      console.error('Error parsing bookmarks:', err);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full bg-blue-500 p-3 text-white shadow-lg transition-colors duration-200 hover:bg-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-lg bg-white shadow-xl">
        <div className="p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-800">导入书签</h2>
          <p className="mb-4 text-gray-600">
            请将您的书签HTML数据粘贴到下面的文本框中。数据格式应该类似于从浏览器导出的书签HTML文件。
          </p>

          <textarea
            value={bookmarkHtml}
            onChange={(e) => setBookmarkHtml(e.target.value)}
            className="mb-4 h-64 w-full rounded-lg border border-gray-300 p-3 font-mono text-sm"
            placeholder="在此粘贴书签HTML数据..."
          />

          {error && <div className="mb-4 text-red-500">{error}</div>}

          <div className="flex justify-end space-x-3">
            <button
              onClick={() => {
                setIsOpen(false);
                setBookmarkHtml('');
                setError('');
              }}
              className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100"
            >
              取消
            </button>
            <button
              onClick={handleImport}
              className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
              disabled={!bookmarkHtml.trim()}
            >
              导入
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportBookmarks;
