import { useNavigate } from 'react-router-dom';

const SearchButton = ()=>{
  const navigate = useNavigate();
  return (
    <>
      <button 
        className="text-gray-300 hover:text-white"
        onClick={(e)=>{navigate('/search')}}
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </>
  )
}
export default SearchButton;
