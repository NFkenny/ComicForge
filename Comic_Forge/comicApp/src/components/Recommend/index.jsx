import ministryWorld from '../../assets/ministryWorld.png'

const aiRecommendations = [
    { id: 10, title: 'AI生成：梦境探险', prompt: '描述一个少年在梦境中冒险的故事', cover: 'https://ai-public.mastergo.com/ai/img_res/7ac6e346d80464e1fe4b41cfb6d59024.jpg' },
    { id: 11, title: 'AI生成：未来都市', prompt: '描绘一个高科技未来城市的日常生活', cover: 'https://ai-public.mastergo.com/ai/img_res/ed695732b2e37edac36d6773a5cf474a.jpg' },
    { id: 12, title: 'AI生成：神秘的世界', prompt: '描述一个未知的世界，充满未知的力量', cover: ministryWorld },
];

const Recommend = () => {
  return (
    <>
      <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-bold">AI 推荐作品</h2>

            <button className="text-[10px] text-purple-400">查看全部</button>
          </div>
          <div className="flex overflow-x-auto pb-3 gap-3 scrollbar-hide -mx-2 px-2">
            {aiRecommendations.map((item) => (
              <div key={item.id} className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] bg-gray-800 rounded-lg overflow-hidden flex-shrink-0 max-w-[180px]">

                <div className="relative h-16 sm:h-18 md:h-20">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-2 left-1 right-2">
                    <h3 className="text-white text-[10px] font-medium truncate">{item.title}</h3>
                    <p className="text-gray-300 text-[8px] truncate">{item.prompt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
    </>
  )
}
export default Recommend