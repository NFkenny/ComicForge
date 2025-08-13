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
      <div className="flex justify-between items-center mb-4 p-2 bg-gray-700 rounded-lg">
        <h2 className="text-[8px] font-bold">阅读历史</h2>
        <button 
          className="bg-purple-600 hover:bg-purple-700 text-white text-[6px] px-3 py-1 rounded"
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
                <h3 className="font-bold text-[10px] truncate">{record.title}</h3>
                <p className="text-gray-400 text-[8px] mt-1">阅读至: {record.chapter}</p>
                <p className="text-gray-500 text-[7px] mt-1">{record.readTime}</p>
              </div>
              
            </div>
          ))}
        </div>
      )}

      {/* 清除历史确认弹窗 */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-4 w-full max-w-md text-center">
            <h1 className="text-xs font-bold mb-3">确认清除</h1>
            <p className="text-[10px] text-gray-300 mb-4">确定要清除所有阅读历史记录吗？</p>
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