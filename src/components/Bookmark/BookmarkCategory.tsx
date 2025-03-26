import React from 'react';

import type { BookmarkItemProps } from './BookmarkItem';
import BookmarkItem from './BookmarkItem';

export interface BookmarkCategoryProps {
  title: string;
  bookmarks: BookmarkItemProps[];
}

const BookmarkCategory = ({ title, bookmarks }: BookmarkCategoryProps) => {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-bold text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bookmarks.map((bookmark, index) => (
          <BookmarkItem
            key={index}
            title={bookmark.title}
            url={bookmark.url}
            icon={bookmark.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default BookmarkCategory;
