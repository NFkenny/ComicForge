import SwiperBox from "@/components/SwiperBox"

const Home = () => {
  return (
    <div>
      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-gray-800 shadow-md p-2.5">
        <div className="flex items-center justify-between">
          <h1 className="text-base md:text-lg font-bold">ComicForge</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <i className="fas fa-bell ">登录</i>
            </button>
            <button className="text-gray-300 hover:text-white">
              <i className="fas fa-user-circle text-lg"></i>
            </button>
          </div>
        </div>
      </header>
      {/* 主要内容 */}
      <main className="flex-1 overflow-y-auto pt-14 pb-20 px-2.5">
        <SwiperBox />
        
      </main>
    </div>
  )
}

export default Home