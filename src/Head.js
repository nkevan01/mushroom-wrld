//import React, {useState} from 'react'
import './App.css';

function Head() {
  //const searchBar = () => {
    //const [searchInput, setSearchInput] = useState("");
    //const mushrooms = [

      //{ name: "Portobello", Variety:"Choice" },
      //{ name: "Reishi", Variety: "Choice" },
      //{ name: "Bolivia", Variety: "Medicinal" },
      //{ name: "Shiitake", Variety: "Choice" },
      //{ name: "Lions Mane", Variety: "Medicinal" },
      //{ name: "White button", Variety: "Choice" },
     
     
    
    //];
    //const handleChange = (e) => {
      //e.preventDefault();
      //setSearchInput(e.target.value);
    //};
    
    //if (searchInput.length > 0) {
        //mushrooms.filter((mushrooms) => {
        //return mushrooms.name.match(searchInput);
    //});
    //}
  //}


  return (
    <>
    

    <div className="container h-22 w-full  bg-neutral-300 text-3xl overflow-none m-0 "> 
    <img src="/mushroom-wrld1.png" alt="hello" className="p-16 w-1/2"></img>
      <div className='Search Bar'>
       <input placeholder='Search...'  className='m-12 w-1/4'></input >
       <button>Go</button>
       </div>
    </div>

    
    
    </>
    
  );
}

export default Head;
