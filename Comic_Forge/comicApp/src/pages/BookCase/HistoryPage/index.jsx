import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 模拟阅读历史数据
const historyRecords = [
  {
    id: 1,
    comicId: 1,
    title: '火影忍者',
    cover: 'https://picsum.photos/id/1/300/400',
    chapter: '第699话',
    readTime: '今天 14:30',
  },
  {
    id: 2,
    comicId: 2,
    title: '海贼王',
    cover: 'https://picsum.photos/id/2/300/400',
    chapter: '第1049话',
    readTime: '昨天 20:15',
  },
  {
    id: 3,
    comicId: 4,
    title: '进击的巨人',
    cover: 'https://picsum.photos/id/4/300/400',
    chapter: '第138话',
    readTime: '3天前 16:45',
  },
  {
    id: 4,
    comicId: 3,
    title: '鬼灭之刃',
    cover: 'https://picsum.photos/id/3/300/400',
    chapter: '第204话',
    readTime: '1周前 09:20',
  },
];

const HistoryPage = () => {
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const navigate = useNavigate();

  const handleClearHistory = () => {
    // 这里应该调用API清除历史记录
    alert('清除所有历史记录');
    setShowClearConfirm(false);
  };

  return (
    <div className="w-full text-white mb-8">
      <div className="flex justify-between items-center mb-6 p-2 bg-gray-700 rounded-lg">
        <h2 className="text-sm font-bold">阅读历史</h2>
        <button 
          className="text-purple-400 hover:text-purple-300 text-xs"
          onClick={() => setShowClearConfirm(true)}
        >
          清除历史
        </button>
      </div>

      {historyRecords.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-400">
          <p>暂无阅读历史</p>
          <button 
            className="mt-4 text-purple-400 hover:text-purple-300"
            onClick={() => navigate('/discover')}
          >
            去阅读漫画
          </button>
        </div>
      ) : (
        <div className="space-y-3 pb-8">
          {historyRecords.map((record) => (
            <div 
              key={record.id}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-purple-500/20 transition-shadow flex items-center"
              // onClick={() => navigate(`/comic/${record.comicId}/chapter/${record.chapter}`)}
            >
              <img 
                src={record.cover} 
                alt={record.title} 
                className="w-16 h-20 object-cover"
              />
              <div className="p-3 flex-1">
                <h3 className="font-bold text-sm truncate">{record.title}</h3>
                <p className="text-gray-400 text-xs mt-1">阅读至: {record.chapter}</p>
                <p className="text-gray-500 text-xs mt-1">{record.readTime}</p>
              </div>
              <div className="p-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94zm-3.564 0c0 .533.425.927 1.01.927.608 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94zm9.85 0c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 清除历史确认弹窗 */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-4 w-full max-w-md text-center">
            <h1 className="text-sm font-bold mb-3">确认清除</h1>
            <p className="text-xs text-gray-300 mb-4">确定要清除所有阅读历史记录吗？</p>
            <div className="flex justify-center gap-2">
              <button 
                className="px-3 py-1 bg-gray-600 text-white rounded"
                onClick={() => setShowClearConfirm(false)}
              >
                取消
              </button>
              <button 
                className="px-3 py-1 bg-red-600 text-white rounded"
                onClick={handleClearHistory}
              >
                确认清除
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;