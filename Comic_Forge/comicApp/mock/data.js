import Mock from 'mockjs'

const getImages = (page,pageSize=10) => {
  return Array.from({length:pageSize}, (_, i) => ({
    id: `${page}-${i}`,
    height: Mock.Random.integer(400,600),
    url: Mock.Random.image('300x400', Mock.Random.color(), '#fff', 'img'),
  }))
};

export default [
  {
    url: "/api/search",
    method: "get",
    timeout: 1000,
    response: (req, res) => {
      const keyword = req.query.keyword;
      let num = Math.floor(Math.random() * 10);
      let list = [];
      for (let i = 0; i < num; i++) {
        const randomData = Mock.mock({
          title: "@ctitle(3,6)",
        });
        console.log(randomData);
        list.push(`${randomData.title}${keyword}`);
      }
      return {
        code: 0,
        msg: "success",
        data: {
          keyword,
          list,
        },
      };
    },
  },
  {
    url: "/api/hotlist",
    method: "get",
    timeout: 1000,
    response: (req, res) => {
      return {
        code: 0,
        msg: "success",
        data: [
          {
            id: "101",
            city: "一人之下",
          },
          {
            id: "102",
            city: "海贼王",
          },
          {
            id: "103",
            city: "灵笼",
          },
        ],
      };
    },
  },
  {
    // ?page=1 queryString
    url:'/api/images',
    method:'get',
    timeout:1000,
    response:({query})=>{
      const page = Number(query.page) || 1;
      return {
        code: 0,
        data: getImages(page)
      }
    }
  }
]