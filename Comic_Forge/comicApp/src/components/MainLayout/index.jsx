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
import { TbAi } from 'react-icons/tb';

const tabs = [
  {
    title: '首页',
    icon: <HomeO />,
    path: '/home'
  },
  {
    title: '书架',
    icon: <FaBook />,
    path: '/bookCase'
  },
  {
    title: '广场',
    icon: <MdForum />,
    path: '/square'
  },
  {
    title: 'AI创作',
    icon: <TbAi />,
    path: '/aiGallery'
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
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <Outlet />
      <Tabbar value={active} onChange={
        (key) => {
          setActive(key)
          navigate(tabs[key].path)
        }}
        className=" border-t border-gray-800"
        activeColor="#9f7aea"
        inactiveColor="#9ca3af"
      >
        {tabs.map((tab,index)=> (
          <Tabbar.Item key={index} icon={tab.icon}>
            {tab.title}
          </Tabbar.Item>
        ))}
      </Tabbar>
    </div>
  )
}
export default MainLayout