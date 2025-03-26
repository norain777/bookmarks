import React, { useMemo, useState } from 'react';

import type { BookmarkCategoryProps } from './BookmarkCategory';
import BookmarkCategory from './BookmarkCategory';
import SearchBar from './SearchBar';

export interface BookmarkPageProps {
  categories: BookmarkCategoryProps[];
}

const BookmarkPage = ({ categories }: BookmarkPageProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  // 根据搜索词过滤书签
  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) {
      return categories;
    }

    const term = searchTerm.toLowerCase();

    return categories
      .map((category) => {
        const filteredBookmarks = category.bookmarks.filter(
          (bookmark) =>
            bookmark.title.toLowerCase().includes(term) ||
            bookmark.url.toLowerCase().includes(term),
        );

        if (filteredBookmarks.length > 0) {
          return {
            ...category,
            bookmarks: filteredBookmarks,
          };
        }

        return null;
      })
      .filter(
        (category): category is BookmarkCategoryProps => category !== null,
      );
  }, [categories, searchTerm]);

  const totalBookmarks = useMemo(() => {
    return categories.reduce(
      (total, category) => total + category.bookmarks.length,
      0,
    );
  }, [categories]);

  const filteredBookmarksCount = useMemo(() => {
    return filteredCategories.reduce(
      (total, category) => total + category.bookmarks.length,
      0,
    );
  }, [filteredCategories]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        我的书签收藏
      </h1>

      <SearchBar onSearch={setSearchTerm} />

      {searchTerm && (
        <div className="mb-6 text-center text-gray-600">
          找到 {filteredBookmarksCount} 个结果，共 {totalBookmarks} 个书签
        </div>
      )}

      {filteredCategories.length > 0 ? (
        filteredCategories.map((category, index) => (
          <BookmarkCategory
            key={index}
            title={category.title}
            bookmarks={category.bookmarks}
          />
        ))
      ) : (
        <div className="py-10 text-center">
          <p className="text-lg text-gray-500">没有找到相关书签</p>
        </div>
      )}
    </div>
  );
};

export default BookmarkPage;
