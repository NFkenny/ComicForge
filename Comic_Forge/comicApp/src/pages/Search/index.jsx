import SearchBox from "@/components/SearchBox";
import useSearchStore from "@/store/useSearchStore";
import { useState,useEffect,memo } from "react";

const HotListItems = memo(({hotList})=>{
  return (
    <div className='flex flex-wrap'>
      <h1 className="text-sm">热门搜索</h1>
      {
        hotList.map(item => (
          <div className='text-xs p-2' key={item.id}>
            {item.name}
          </div>
        ))
      }
    </div>
  )
})

const Search = () => {
  const [query,setQuery] = useState('');
  const { suggestList, setSuggestList, hotList, setHotList } = useSearchStore();

  useEffect(()=>{
    setHotList();
  },[])

  const handleQuery = (query) => {
    console.log("debounce之后的搜索:", query);
    setQuery(query);
    if (!query) {
      return;
    }
    setSuggestList(query);
    console.log('suggestList:',suggestList);
  };

  const suggestListStyle ={
    display: query === '' ? 'none' : 'block',
  }
  return (
    <div className='min-h-screen bg-gray-800 text-white p-4'>
      <div className='flex flex-col'>
        <SearchBox handleQuery={handleQuery} />
        <div className={`mt-4 px-2 rounded-xl bg-gray-800 shadow-lg ${query === '' ? 'hidden' : 'block'}`}>

          <h1 className="text-[12px] font-medium p-2 border-b border-gray-700 text-gray-300">搜索建议</h1>
          {suggestList.map(item => (
            <div 
              key={item} 
              className='m-1 px-1.5 py-2 text-[8px] text-gray-300 bg-gray-700 hover:bg-gray-900 rounded-[8px] transition-colors'
            >
              {item}
            </div>
          ))}
        </div>
        <div className='mt-4 px-2'>
          <h1 className="text-[12px] font-medium mb-3 text-gray-200">热门搜索</h1>
          <div className='flex flex-wrap gap-2'>
            {hotList.map(item => (
              <div 
                key={item.id} 
                className='px-3 py-1.5 bg-gray-700 hover:bg-gray-900 rounded-full text-[8px] text-gray-300 transition-all duration-300'
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Search);
