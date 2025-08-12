import {
  useState
} from 'react'  
import {
  HomeO,
  UserO
} from '@react-vant/icons'
import {
  Outlet,
  useNavigate,
  useLocation
} from 'react-router-dom'
import { Tabbar } from 'react-vant'
import { useEffect } from 'react'
import { FaBook } from 'react-icons/fa';
import { MdForum } from 'react-icons/md';
import { TbRobot } from 'react-icons/tb';

const tabs = [
  {
    title: '首页',
    icon: <HomeO />,
    path: '/home'
  },
  {
    title: '书架',
    icon: <FaBook />,
    path: '/bookcase'
  },
  {
    title: '广场',
    icon: <MdForum />,
    path: '/square'
  },
  {
    title: 'AI创作',
    icon: <TbRobot />,
    path: '/aigallery'
  },
  {
    title: '我的',
    icon: <UserO />,
    path: '/account'
  }
]

const MainLayout = () => {
  const [active, setActive] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const index = tabs.findIndex(tab => tab.path === location.pathname)
    setActive(index)
  }, [location.pathname])

  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white">
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      <Tabbar 
        className="fixed left-0 right-0 z-50 bg-gray-800 border-t border-gray-800"
        value={active}
        onChange={
          (key) => {
            setActive(key)
            navigate(tabs[key].path)
        }}
        activeColor="#9f7aea"
        inactiveColor="#9ca3af"
        iconSize={20}
      >
        {tabs.map((tab,index)=> (
          <Tabbar.Item key={index} icon={tab.icon} className='py-2'>
            {tab.title}
          </Tabbar.Item>
        ))}
      </Tabbar>
    </div>
  )
}
export default MainLayout