import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 模拟收藏的漫画数据
const bookmarkedComics = [
  {
    id: 1,
    title: '火影忍者',
    cover: 'https://picsum.photos/id/1/300/400',
    author: '岸本齐史',
    latestChapter: '第700话',
    progress: '80%',
  },
  {
    id: 2,
    title: '海贼王',
    cover: 'https://picsum.photos/id/2/300/400',
    author: '尾田荣一郎',
    latestChapter: '第1050话',
    progress: '65%',
  },
  {
    id: 3,
    title: '鬼灭之刃',
    cover: 'https://picsum.photos/id/3/300/400',
    author: '吾峠呼世晴',
    latestChapter: '第205话',
    progress: '100%',
  },
  {
    id: 4,
    title: '进击的巨人',
    cover: 'https://picsum.photos/id/4/300/400',
    author: '谏山创',
    latestChapter: '第139话',
    progress: '100%',
  },
];

const BookmarkPage = () => {
  const [sortBy, setSortBy] = useState('latest');
  const navigate = useNavigate();

  // 根据选择的排序方式排序漫画
  const sortedComics = [...bookmarkedComics].sort((a, b) => {
    if (sortBy === 'latest') {
      return b.id - a.id;
    } else if (sortBy === 'progress') {
      return parseInt(b.progress) - parseInt(a.progress);
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return (
    <div className="w-full text-white mb-8">
      <div className="flex justify-between items-center mb-4 p-2 bg-gray-700 rounded-lg">
        <h1 className="text-sm font-bold px-2">我的收藏</h1>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-300">排序方式:</span>
          <select 
            className="bg-gray-800 text-white text-xs px-2 py-1 rounded border border-gray-600"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="latest">最新添加</option>
            <option value="title">标题</option>
            <option value="progress">阅读进度</option>
          </select>
        </div>
      </div>

      {sortedComics.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-400">
          <p>您还没有收藏任何漫画</p>
          <button 
            className="mt-4 text-purple-400 hover:text-purple-300"
            onClick={() => navigate('/discover')}
          >
            去发现漫画
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center ">
          {sortedComics.map((comic) => (
            <div 
              key={comic.id}
              className="p-1"
            >
              <div className="relative h-28 w-28"> 
                <img 
                  src={comic.cover} 
                  alt={comic.title} 
                  className="absolute inset-0 w-full h-28 object-cover"
                />
                <div className="absolute top-1 right-1 bg-purple-600 text-white text-xs px-1 rounded">
                  {comic.progress}
                </div>
              </div>
              <div className="p-1 flex-1 flex flex-col justify-between bg-gray-700">
                <h3 className="font-bold text-sm truncate mb-1">{comic.title}</h3>
                <p className="text-gray-300 text-xs line-clamp-1">最新: {comic.latestChapter}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookmarkPage;