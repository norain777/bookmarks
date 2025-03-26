import Link from 'next/link';
import React from 'react';

import { AppConfig } from '../../utils/AppConfig';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-blue-600">
          {AppConfig.site_name}
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                首页
              </Link>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
