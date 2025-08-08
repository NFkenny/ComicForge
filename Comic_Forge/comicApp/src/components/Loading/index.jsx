import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      <div className="relative flex flex-col items-center">
        {/* 旋转的漫画图标 */}
        <div className="w-20 h-20 relative">
          <div className="absolute inset-0 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" style={{ animationDuration: '1s' }}></div>
          <div className="absolute inset-2 border-4 border-pink-400 border-b-transparent rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
          <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold text-lg">C</div>
        </div>
        {/* 加载文本 */}
        <p className="mt-4 text-white text-lg font-medium tracking-wider animate-pulse">加载中...</p>
      </div>
    </div>
  );
};

export default Loading;