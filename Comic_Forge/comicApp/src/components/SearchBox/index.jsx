import { 
  memo,
  useRef,
  useState,
  useMemo,
  useEffect,
} from 'react'
import {
  ArrowLeft,
  Close
} from '@react-vant/icons'
import { debounce } from '@/utils'
const SearchBox = (props)=>{
  // 单项数据流
  // 子父通信
  const [query,setQuery] = useState('')
  const { handleQuery } = props
  const handleChange = (e)=>{
    let val = e.currentTarget.value;
    setQuery(val)
  }
  const clearQuery = ()=>{
    setQuery('')
    queryRef.current.value = ''
    queryRef.current.focus()
  }
  // 1.防抖
  // const handleQueryDebounce = debounce(handleQuery,500);
  // 2.使用useMemo 缓存debounce结果 否则会反复执行
  const handleQueryDebounce = useMemo(()=>{
    return debounce(handleQuery, 1000)
  },[])
  
  const displayStyle = query ? { display: 'block' } : { display: 'none' }

  useEffect(()=>{
    handleQueryDebounce(query);
  },[query])
  // 非受控组件
  const queryRef = useRef(null)
  return (
    <div className='flex items-center justify-between w-full px-1 pb-3 bg-gray-800 border-b border-gray-600'>
      <ArrowLeft className='w-2 h-2 text-gray-300 hover:text-white transition-colors' onClick={() => window.history.go(-1)} />
      <input 
        type="text"
        className='text-[8px] px-2 bg-gray-700 rounded-full text-white placeholder-gray-400'
        placeholder="搜索漫画"
        ref={queryRef}
        onChange={handleChange}
      />
      <Close 
        className='w-2 h-2 text-gray-400 hover:text-white transition-colors'
        onClick={clearQuery} 
        style={displayStyle}
      />
    </div>
  )
}
export default memo(SearchBox)