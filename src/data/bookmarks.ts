import type { BookmarkCategoryProps } from '../components/Bookmark/BookmarkCategory';
import type { BookmarkItemProps } from '../components/Bookmark/BookmarkItem';

// 默认的书签数据，用于开发环境
export const defaultBookmarks: BookmarkCategoryProps[] = [
  {
    title: '数据',
    bookmarks: [
      {
        title: '今日可视化项 | Tableau Public',
        url: 'https://public.tableau.com/app/discover/viz-of-the-day',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8ElEQVQ4ja1SKw7CQBB9wx0IDnqAlSDQcAg+ukGCaoJptwhIMFBJqiEcAo9B9gAEBanhBouBZna21MBzM5M3780HqMBsdzBVdQCo8SBPVCTJvMlglUaoQp4oS1E6GK7Sp+QQU9Ysr+vTLObKxOoG0Me5H0NCOngEyrJc5qAmYu4Cxo03jirwfdv3QJXmx35S5ImTt5MRPQIVSWUAIEA31lnMyft0Sj87sHD22tbSZINmP3T+QCyRLOskRpHxO/dR5mSju9dLcWevF84NYVlUAX07Ldw/OHsdy7KctdUPndnFCKZw8SHzJmXXqcTXbf8TL8n/auvmbR2VAAAAAElFTkSuQmCC',
      },
      {
        title: 'SELECT basics - SQLZOO',
        url: 'https://sqlzoo.net/wiki/SELECT_basics',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACSUlEQVQ4jV2SS0iUURTH/+feb5z5pjGdSgsjsvARRT56CRlZCw2UAiGIXLnJReSihLIHohQRBNmDtm3aREQREUP00IWbIMNUggi0zLAZxxmbGT+dz+/e0+JzGvWu7jn/84Dz/xEzY9XTGgCIoBSIIOVykVY0MENrSOmm6H8/EWgpMrLVSgEEKe2hobmemzyfppoDnhNN/r1VQmuA3AGZDVpDCJ1Op+7dT77tN6JRA8TDw9prUtuZ/Fs9Hp8XzCACM7NSzDw/MBBuaIzQmokbtyfuPFDMVn9fvL5xRvinznY4zKwVMwswsxB/L3XGOq55jtUL00c+L42NLU5OmXVHPJ0XdGEBPXmaGBwGCVZagMj583vh7kNv+7lAxU5tzUFKgOfevU89e75o2bK1RcaiamgEALEWAJyRUe0w7d5FdhpCwk5j23b/vmqAzKoqY0eZhkOmDwC7V3ISSdJpxOLweKDnZTCoQqFkIDfv6CGrv8959FgXFfvragGQEAKAUVhgQDqvXlvjPxcrawKHD3JZ+fq21pzSkkBTg/72XV6+GNi8CUpBCDCzY6Wie/bPBIsm64+nIjEnGh6/0s3M2l6YaT4ZvnpdZy7JzLK7q0vkeKmk2H7x0vjxiy3L0coe+WqkkrPt5/nNByopFdUV0FqaJpizPix8HoydapneuDWyYUukvCLcfDr5cTDR2ztNORNllfFPX9zKFU4zoGbjmE1wXr4RzCNmEKVCIV67Lre2xnV6GXwupEJkQ5cFN+P+V9PqCq6WwXMJ8sygfwg9QiwmlXUHAAAAAElFTkSuQmCC',
      },
    ],
  },
  {
    title: '活动相关',
    bookmarks: [
      {
        title: '素材下载',
        url: 'http://baidule.yuansupic.com/',
      },
      {
        title: '万年日历查询 - 在线日历',
        url: 'https://wannianrili.51240.com/',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACh0lEQVQ4jYWTTYhWZRTHf+d5znPvfd80XmMkw9ERC4JwSFDcty1wFS4tonVgiwiiDxFp3UoMg1rnvsiFFKO1CFKoNhWTSTNmX5PNe9/78dxzWoy9Objov/wf/ufjf86Ry5dXK98xPQt+AlgcciZqBIR74e6YDcSoALeAT7o+nFLfMT3rNrxcihFCIESj63q0LP9TC4g7uWuIOsbN9jQeThbJJxrgxOzWOo+dfo0kge+OLFNc/4albNs6+HWyk7WFBZ58fpXejW9fP8Nocd9xDfiimNF+tY451F//zEQSbdNvSzCkgBY/0E57sgBmBEAlgQWjFqFAWOqABLOyQFIBOAwDVZ/ZWw/MJNCLY8GQBKouyOD8sjOS7hqXHt5NeWAfoSiwWYO1Ld3NNfLGXwBkHBkM9YBGVYixgg7u36F+24ds4PndopQCcFADrSjs1lEa1ZIaVYBOtOykI63a+qE7ZjDoCAEFADrSjs1LkRM7NAt3+bWRebfYudFx9XguwFqbwePs9z/mT/6NLdAHMBpex28W0/C1Y1Zy05VFM75nUwiAZVGT/v5sgdcA3UurOPUrxvXOFhJD7fOmdn4LeNc5NbpkfWimv5mWZ8KXFKdfXqInOYBnc6gsPEjZ8mKssbQOtvEkMczYl0oK8z3un4lgppbYkhZS3Fp7bnD0Jxeba+lODmTFviFcxq29NeRHDUEQ1DnnqtNSjohIo3Mutx+keNz9gmf9zfQkB0ChYMkK9q2KcaLwMJFQGFV9Y4w5YIwZzyBBI2lRLcD9PVXN/SdFqlokInUi0iEiE9P+UUTuqurmufl/AKTzsFGmvUNUAAAAAElFTkSuQmCC',
      },
    ],
  },
  {
    title: '游戏案例',
    bookmarks: [
      {
        title: '谈谈阴阳师的经济数值吧 - 知乎',
        url: 'https://zhuanlan.zhihu.com/p/38419391',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcklEQVQ4jT3TTahVdRQF8N8+59yr5numZlmgQVQUUaOkkUKDoonRQIIgCMLyQYOa5CxMigZBDjIsIiyKjIqmFk0alDxq0CTpSUEiWYZUfqX3Xt85578bnFeDDXuyF2utvVbYn2PFS8aeFtbXI/oKFWqhQb0ylTQSav8Ib/vZC42pV8x5XidV9DNcI2MkhMxOBJCIaGVJ8+btdbsS9uZljTUqqVbvukd+cZLJFGNpLMT/jGikBqtQudzora1CKRPVw9vkwYfY+TFlAxrxyyW2rmf1eJDQhzhzlb+uSo35RqcgdPLRu0RTc/Qxevx6niMn2L+ds1OudOLODeL14/LFYzTrqKITZcrNm8WOW9j1AUtnefUbHjzEyXP8ORXbj7DjXb48JTeOhVZET5UdCssz7jvAsUVKEWcuMPmDi5PBwOmM9gpXe5kpdWQnGzkATGbs3sEN93PbJrmwTdy7SV7AtGWULKesioiCjuhFE5XMZbFlHXdfT92wcQ2/XVDmGtEWSiF6tEKuPLRFJ6tMjFg6ze435MKHXJzx/nfiucPy6BJrR3TLw0FfBsY6sheVHFBHYzTsfYDzE3loF089IrqW1Q2lZUSsbVYYdERHI2SEaK9w041i306eeE+c+pvPFsSTH8lrV/H9s6Ivcut6XlscjM2WJggtW67j02f4/DiffEu28uBXnPidO17m8OPywNf8cIZZhTFdq4rYkxezmNu8gVs3icWfpEpEkP2wq1doVysRbhRjhFmVvbesVp09JxZ/lOoh+2nwRAymRUU16E9FpVbrvNm4ZJ9KrbGnasyV8l/vkEMjFZFl0KwWKudNvOO0ff8CDNsVBiQlEB0AAAAASUVORK5CYII=',
      },
      {
        title: '一个夏天承包最热综艺，《和平精英》进击的泛娱乐营销',
        url: 'https://www.36kr.com/p/905188096799494',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTElEQVQ4jaWTP2yNYRTGf+d93++mt72qrYiwSKqJf6lFRzMxGGtgqqQbgw4sVZ82TWPQxJ8YDAxiuhYjk8FiEATtIhIGIlWUq7e93/ueY/h6G9FJPNNJTt7nOe/znAP/CQEYnI4nKt1+V/Nb8WhuovKUYfPUJR2Yst1SZZjV4tfLF9k16pL+JnBbc6sJ3AqdTAbxR9uNfblVDL3X0cMUuEPUUfLcbSDYDE6MH7FBgacBQF2Sz9KJ0OkONj/rYtEqzoIY+UXbQPB9GTNwQCZKABjIF7vF5LwEwLgzd6n6gdwciIEJuQVyCwChpxMREDMQwQN0+Z5R3+X2xEZaKMTPlo9YUxcjJ7YnCOtuChis7MutgktjAGZ2Y35cPoE5EAXYP2t9oaknFcKr9+5Gm8DKPOxbVilGQle2I/5MX1ZjuPnnfwdy6/bL6WHW64fSCvT3crvtqtcWAEdM3TldJa75UiIv61rgWOjyQ8WSfYxNnXxXpelKeVxqGSb+OCL9Ggm+w/d1+HgaYGCx9EbRnb6Kgl1/Ne4vArGtYiICmlSwZBZfaKEg7szeadv+9joFgBpiIGp8Zdg84NoxYqq4ihczeekb4bAmnQ+bXF9mOtY20KGIISJ46pJ4g7m1GFVECkBU3OXnM7IgTq5YBISRwRnrL7fGgVAY6PoiLYEi1Cp9kmkrPXldcJ9h87Hl78ZlfVbd5ra4FK+WsWot1MgwOgHYj7iFXBpmjMYmE4X5U+TluHO5tAR3cuU7FxD3uLy88CAuMZFSeryWzobj+mf8BgjzC9kRYUtYAAAAAElFTkSuQmCC',
      },
    ],
  },
];

// 从HTML书签数据中提取书签信息的函数
export function parseBookmarks(htmlContent: string): BookmarkCategoryProps[] {
  // 检查是否在浏览器环境中
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    // eslint-disable-next-line no-console
    console.warn('parseBookmarks called in a non-browser environment');
    return defaultBookmarks;
  }

  // 使用DOMParser解析HTML字符串
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');

  // 获取所有的分类（H3标签）和相应的DL标签
  const categories: BookmarkCategoryProps[] = [];
  const h3Elements = doc.querySelectorAll('h3');

  h3Elements.forEach((h3) => {
    const categoryTitle = h3.textContent || '';
    const bookmarks: BookmarkItemProps[] = [];

    // 查找与当前h3相邻的DL元素
    const dlElement = h3.nextElementSibling;
    if (dlElement && dlElement.tagName === 'DL') {
      // 获取DL中所有的A标签（书签）
      const anchors = dlElement.querySelectorAll('a');
      anchors.forEach((anchor) => {
        const title = anchor.textContent || '';
        const url = anchor.getAttribute('href') || '';
        const icon = anchor.getAttribute('ICON') || '';

        bookmarks.push({ title, url, icon });
      });
    }

    if (bookmarks.length > 0) {
      categories.push({ title: categoryTitle, bookmarks });
    }
  });

  return categories;
}

// 获取书签数据的函数
export function getBookmarks(): BookmarkCategoryProps[] {
  // 在浏览器环境中可以解析HTML
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // 如果有保存的书签数据，尝试解析它
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) {
      try {
        return parseBookmarks(savedBookmarks);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to parse saved bookmarks:', error);
      }
    }
  }

  // 如果没有保存的数据或解析失败，返回默认数据
  return defaultBookmarks;
}
