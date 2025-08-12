import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const swiperModules = [Pagination, Autoplay];

const banners = [
  {
    id: 1,
    image:
      "https://ai-public.mastergo.com/ai/img_res/65b792008a26ac27b2eef3124bec70b6.jpg",
    title: "欢迎来到ComicForge",
  },
  {
    id: 3,
    image:
      "https://ai-public.mastergo.com/ai/img_res/8c03ec4436ba5fc3f338932c3ea3c73e.jpg",
    title: "AI漫画创作大赛",
  },
  {
    id: 2,
    image:
      "https://ai-public.mastergo.com/ai/img_res/5d86cb9b62f03a5ce7c476c0e57c45f2.jpg",
    title: "新作速递",
  },
];

const SwiperBox = () => {
  return (
    <div className="mb-8 rounded-lg overflow-hidden">
      <Swiper
        modules={swiperModules}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-28">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-28 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 rounded-b-xl">
                <h3 className="text-white text-xs font-medium">{banner.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default SwiperBox;
