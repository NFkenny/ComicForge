import Mock from 'mockjs'

export default [
  {
    url: '/api/comics',
    method: 'get',
    timeout: 1000,
    response: () => {
      return Mock.mock({
        'list|10': [{
          'id|+1': 1,
          'title': '@cword(5, 10)',
          'author': '@cname',
          'createTime': '@date'
        }]
      })
    }

  }
]