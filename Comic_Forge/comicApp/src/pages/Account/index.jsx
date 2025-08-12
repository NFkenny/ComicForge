import { useState } from "react";
import {
  Image,
  Cell,
  CellGroup,
  ActionSheet,
  Popup,
  Loading,
} from "react-vant";
import {
  ServiceO,
  FriendsO,
  StarO,
  SettingO,
  AddO,
  CartO,
  ChatO,
  FireO,
  LikeO,
  Search,
  HomeO,
  UserO,
} from "@react-vant/icons";
import { generateAvatar } from "@/llm";
import MyPic from '../../assets/NFkenny.jpeg'

const Account = () => {
  const gridData = [
    { icon: <AddO />, text: '添加' },
    { icon: <CartO />, text: '购物车' },
    { icon: <ChatO />, text: '聊天' },
    { icon: <FireO />, text: '热门' },
    { icon: <LikeO />, text: '喜欢' },
    { icon: <StarO />, text: '收藏' },
  ];
  const [userInfo, setUserInfo] = useState({
    nickname: "南方Kenny",
    level: "4级",
    slogan: "生活因你而火热",
    avatar: MyPic,
  });
  const [showActionSheet, setShowActionSheet] = useState(false);

  const handleAction = async (e) => {
    console.log(e);
    if (e.type === 1) {
      // AI生成头像
      const text = `
        昵称: ${userInfo.nickname}
        签名: ${userInfo.slogan}
      `;
      const newAvatar = await generateAvatar(text);
    } else if (e.type === 2) {
      // 图片上传
    }
  };
  // 定义操作列表
  const actions = [
    {
      name: "AI生成头像",
      color: "#123123",
      type: 1,
    },
    {
      name: "上传头像",
      color: "#312312",
      type: 2,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-900 text-white p-2">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">账号中心
        </div>
        <div className="text-gray-400">
          <svg
            className="w-4 h-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

      </div>
      {/* 用户信息区域 */}
      <div className="flex items-center justify-between bg-gray-800 rounded-xl p-4 mb-4 shadow-lg">
        {/* 头像 */}
        <Image
          round
          width="3rem"
          height="3rem"
          className="cursor-pointer"
          src={userInfo.avatar}
          onClick={() => setShowActionSheet(true)}
        />
        {/* 昵称、等级、签名 */}
        <div className="ml-3 flex-1">
          <div className="text-sm font-bold text-white">{userInfo.nickname}</div>
          <div className="text-xs text-purple-400 mt-1">等级: {userInfo.level}</div>
        </div>
      </div>

      {/* 功能列表区域 */}
      <div className="mb-4">

      </div>

      {/* 网格按钮区域 */}
      <div className="grid grid-cols-3 gap-2 px-2 py-2 mb-4">
        {gridData.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center bg-gray-800 rounded-xl px-1 py-2 shadow-md hover:bg-gray-700 transition duration-300"
          >
            <div className="text-purple-400 text-sm mb-2">{item.icon}</div>
            <div className="text-xs text-gray-300">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 

export default Account