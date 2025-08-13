import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 模拟书单数据
const booklists = [
  {
    id: 1,
    name: '热血必看',
    cover: 'https://picsum.photos/id/10/300/400',
    description: '包含各种热血战斗漫画',
    comicCount: 5,
  },
  {
    id: 2,
    name: '悬疑推理',
    cover: 'https://picsum.photos/id/11/300/400',
    description: '烧脑悬疑，推理佳作',
    comicCount: 3,
  },
  {
    id: 3,
    name: '轻松日常',
    cover: 'https://picsum.photos/id/12/300/400',
    description: '放松心情的日常喜剧',
    comicCount: 4,
  },
];

const BooklistPage = () => {
  const [newListName, setNewListName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleCreateList = () => {
    // if (newListName.trim()) {
    //   // 这里应该调用API创建新书单
    //   alert(`创建书单: ${newListName}`);
    //   setNewListName('');
    //   setShowModal(false);
    // }
  };

  return (
    <div className="w-full text-white mb-8">
      <div className="flex justify-between items-center p-2 bg-gray-700 rounded-lg mb-4">
        <h2 className="text-[8px] font-bold">我的书单</h2>
        <button 
          className="bg-purple-600 hover:bg-purple-700 text-white text-[6px] px-3 py-1 rounded"
          onClick={() => setShowModal(true)}
        >
          创建书单
        </button>
      </div>

      {booklists.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-400">
          <p>您还没有创建任何书单</p>
          <button 
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
            onClick={() => setShowModal(true)}
          >
            创建第一个书单
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {booklists.map((list) => (
            <div 
              key={list.id}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-purple-500/20 transition-shadow flex flex-col"
              // onClick={() => navigate(`/booklist/${list.id}`)}
            >
              <img 
                src={list.cover} 
                alt={list.name} 
                className="w-full 16 h-18 object-cover"
              />
              <div className="p-1 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[8px] mb-1">{list.name}</h3>
                  <p className="text-gray-400 text-[6px] line-clamp-2 mb-2">{list.description}</p>
                </div>
                <p className="text-gray-300 text-[6px]">{list.comicCount} 本漫画</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 创建书单弹窗 */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-4 w-full max-w-md">
            <h3 className="text-lg font-bold mb-3">创建新书单</h3>
            <div className="mb-3">
              <label className="block text-sm text-gray-300 mb-1">书单名称</label>
              <input 
                type="text"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600"
                placeholder="输入书单名称"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button 
                className="px-3 py-1 bg-gray-600 text-white rounded"
                onClick={() => setShowModal(false)}
              >
                取消
              </button>
              <button 
                className="px-3 py-1 bg-purple-600 text-white rounded"
                onClick={handleCreateList}
              >
                创建
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooklistPage;