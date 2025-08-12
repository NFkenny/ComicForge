import SwiperBox from "@/components/SwiperBox"
import Recommend from "@/components/Recommend"

const Home = () => {
  return (
    <div>
      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-gray-800 shadow-md p-2.5">
        <div className="flex items-center justify-between">
          <svg
            className="w-4 h-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="currentColor"
            />
          </svg>
          <h1 className="text-base font-bold">ComicForge</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* 主要内容 */}
      <main className="flex-1 overflow-y-auto pt-14 pb-20 px-2.5">
        <SwiperBox />
        <Recommend />

      </main>
    </div>
  )
}

export default Home