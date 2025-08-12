import { Tabs } from 'react-vant';
import { Outlet } from 'react-router-dom';

const tabs = [
  { name: '收藏', key: 'bookmark' },
  { name: '书单', key: 'booklist' },
  { name: '历史', key: 'history' },
];

const BookTabs = ({ activeTab, onTabChange }) => {
  // 自定义 onChange 处理函数，传递 key 而不是索引
  const handleTabClick = (index) => {
    onTabChange(tabs[index].key);
  };
  return (
    <div className="w-full h-8 mb-4 bg-gray-700 p-1">

      <Tabs 
        className="text-white"
        active={tabs.findIndex(tab => tab.key === activeTab)} 
        onChange={handleTabClick} 
        color="#9f7aea"
        background="transparent"
      >
        {tabs.map(item => (
          <Tabs.TabPane key={item.key} title={item.name}/>
        ))}
      </Tabs>
    </div>
  );
};

export default BookTabs;

// 修改前
// 修改前
//

// 修改前

// 修改前

// 修改前
