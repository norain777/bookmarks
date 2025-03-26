import React, { useEffect, useState } from 'react';

import type { BookmarkCategoryProps } from '../components/Bookmark/BookmarkCategory';
import BookmarkPage from '../components/Bookmark/BookmarkPage';
import Header from '../components/Bookmark/Header';
import ImportBookmarks from '../components/Bookmark/ImportBookmarks';
import { getBookmarks, parseBookmarks } from '../data/bookmarks';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';

const BookmarkTemplate = () => {
  const [categories, setCategories] = useState<BookmarkCategoryProps[]>([]);

  useEffect(() => {
    // 在客户端加载书签数据
    setCategories(getBookmarks());
  }, []);

  const handleImport = (bookmarkHtml: string) => {
    try {
      const parsedCategories = parseBookmarks(bookmarkHtml);
      setCategories(parsedCategories);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error importing bookmarks:', error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />

      <Header />

      <main className="grow py-8">
        <BookmarkPage categories={categories} />
      </main>

      <ImportBookmarks onImport={handleImport} />

      <Footer />
    </div>
  );
};

export { BookmarkTemplate };
