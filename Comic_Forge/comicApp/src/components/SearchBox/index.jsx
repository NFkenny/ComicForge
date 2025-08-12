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
    console.log('////////',query);
    handleQueryDebounce(query);
    
  },[query])
  // 非受控组件
  const queryRef = useRef(null)
  return (
    <div className={styles.wrapper}>
      <ArrowLeft onClick={() => history.go(-1) } />
      <input 
        type="text"
        className={styles.ipt}  
        placeholder="搜索漫画"
        ref={queryRef}
        onChange={handleChange}
      />
      {/* 移动端用户体验 */}
      <Close onClick={clearQuery} style={displayStyle}/>
    </div>
  )
}
export default memo(SearchBox)