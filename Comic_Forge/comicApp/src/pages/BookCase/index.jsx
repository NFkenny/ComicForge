import {
  useState
} from 'react';
import BookTabs from '@/components/BookTabs'
import BookmarkPage from './BookmarkPage';
import BooklistPage from './BooklistPage';
import HistoryPage from './HistoryPage';
import Logo from '@/assets/ComicForge_logo.png'

const BookCase = () => {
  const isEmpty = false;
  const [activeTab, setActiveTab] = useState('bookmark'); // 使用状态管理当前标签

  // 处理标签页切换
  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  // 根据当前标签渲染对应的内容组件
  const renderContent = () => {
    switch (activeTab) {
      case 'bookmark':
        return <BookmarkPage />;
      case 'booklist':
        return <BooklistPage />;
      case 'history':
        return <HistoryPage />;
      default:
        return <BookmarkPage />;
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full">
        <h1 className="text-base font-bold text-center text-white mb-4">我的书架</h1>
        <BookTabs 
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
        />
      </div>
      {/* 主要内容区域 */}
      <div className="flex-grow w-full flex items-center justify-center">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-30 h-30 mb-6 rounded-xl flex items-center justify-center">
              <img 
                src={Logo} 
                alt="ComicForge Logo" 
                className="w-32 h-32 object-contain bg-gray-800 mix-blend-multiply border-gray-800" 
              />
            </div>
            <p className="text-gray-500 text-lg mb-4">您的书架还是空的</p>
            <p className="text-gray-400 text-sm mb-8">浏览漫画并添加到书架吧！</p>

            <button 
              className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium px-6 py-2 rounded-full transition duration-300"
              onClick={() => navigate('/home')}
            >
              开始探索
            </button>
          </div>
        ) : (
          // 直接渲染对应的内容组件
          <div className="w-[90%]">
            {renderContent()}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCase;
