import React from 'react';

export interface BookmarkItemProps {
  title: string;
  url: string;
  icon?: string;
}

const BookmarkItem = ({ title, url, icon }: BookmarkItemProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center rounded-lg border border-gray-200 p-3 transition-colors duration-200 hover:bg-gray-50"
    >
      <div className="mr-3 flex size-8 shrink-0 items-center justify-center">
        {icon ? (
          <img
            src={icon}
            alt={`${title} icon`}
            className="max-h-full max-w-full"
          />
        ) : (
          <div className="flex size-6 items-center justify-center rounded bg-blue-500 font-bold text-white">
            {title.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <span className="truncate text-gray-800">{title}</span>
    </a>
  );
};

export default BookmarkItem;
