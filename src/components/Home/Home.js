import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { ImBrightnessContrast } from 'react-icons/im';
import './Icons.css';


const Home = () => {

  const [expand , setExpand] = useState(false);

  const toggle = () => {
      setExpand(!expand);
    }

  const [inputValue , setInputValue] = useState('enter your video URL');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  }

  const [isDark , setIsDark] = useState(false);

  const toggleDarkLight = () => {
    setIsDark(!isDark);
  }

  return (

<div className={`h-screen ${isDark ? 'bg-gray-800' : 'bg-white'}`}>

 <header className={`${isDark ? 'bg-gray-600' : 'bg-gray-100'} grid grid-cols-2 md:grid-cols-1 w-full md:h-16 ${expand ? 'h-32' : 'h-16'}`}>

  <div className='grid md:grid-cols-3 grid-cols-1 py-4 content-center justify-items-center px-2'>
   <div className = {`${isDark ? 'text-white' : 'text-gray-800'} text-xl font-medium font-sans md:relative md:left-16 fixed `}>Voice Front</div>
   <div className = {`md:flex ${expand ? 'flex' : 'hidden'}`}>
    
   <div className={`${isDark ? 'home-icon-dark' : 'home-icon-light'}`}>
      <FaHome />
    </div>

    </div>
   <Link to='/'><div className = {`md:flex ${expand ? 'flex' : 'hidden'}`}>
   <div className={`${isDark ? 'logout-icon-dark' : 'logout-icon-light'}`}>
      <FaSignOutAlt />
    </div></div></Link>
  </div>
  <div className='md:hidden flex justify-end items-center pr-8 '>
   <button onClick={toggle}>
   <div className="hamburger-icon">
      <FaBars />
    </div>
   </button>
  </div>

 </header>
    
 <article>

  <div className = {`${isDark ? 'bg-gray-600' : 'bg-gray-100'} mt-12 md:mx-28 h-72 rounded-xl shadow-[0px_0px_5px_0px_rgb(0,0,0)] pt-16`}>
   <div className = 'flex flex-row justify-center'>
    <button className='border-[1px] border-gray-600 px-2 py-[2px] font-bold rounded-lg font-sans text-gray-800 bg-green-200 hover:bg-green-400 transition ease-in-out delay-150 duration-300 hover:drop-shadow-sm hover:text-white hover:scale-110'>
      Choose file
    </button>
    <div className = {`${isDark ? 'text-white':'text-gray-800'} font-bold mx-4 py-[2px] font-sans `}>No file chosen</div>
   </div>
   <div className = 'w-full mt-8 md:px-72 px-12'>
    <input type = 'text' className='w-full h-10 py-2 px-2 rounded-md border-[1px] font-bold text-gray-500 font-sans' 
    value = {inputValue} onChange={handleInput}/>
   </div>
   <div className='flex flex-row justify-center mt-12'>

   <button className='py-2 px-4 font-bold rounded-lg mx-2 font-sans transition ease-in-out delay-150 bg-[rgba(255,193,7,1)] hover:scale-110 hover:bg-[rgba(255,210,7,1)] duration-300'>back</button>
   <button className='py-2 px-4 font-bold rounded-lg mx-2 font-sans text-white transition ease-in-out delay-150 bg-[rgba(13,110,253,1)] hover:scale-110 hover:bg-[rgba(13,110,253,0.8)] duration-300'>transcribe</button>
  
   </div>
  </div>

 </article>
   <button className='bg-blue-100 p-2 font-semibold rounded-2xl mt-4' onClick={toggleDarkLight}>
    <div className='brightness-contrast'>
    <ImBrightnessContrast/>
    </div>
   </button>
   
 <footer className={`${isDark ? 'bg-gray-600 text-gray-100' : 'bg-gray-100 text-gray-600'} fixed bottom-0 w-full py-2`}>
  Designed by TrofiTeam &copy; 
 </footer>

</div>
);
};

export default Home;