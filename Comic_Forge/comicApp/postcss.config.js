 export default {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    "postcss-pxtorem": {
      rootValue: 75, // 以 750px 为参考，1rem = 75px
      propList: ['*'], // 所有属性都转换
      exclude: /node_modules/i, // 排除 node_modules 中的文件
    },
  },
}