
import React, { useState } from 'react'
import App from './App';
import "./Home.css"
export const Home = () => {
    
    const key="https://www.google.com/search?q=";
    const[query,setQuery]=useState('');
    const search=evt=>{
        if(evt.key==="Enter"){
            window.open(`${key}${query}`);
        }
    }
    return (
    <>
    <div className="main">
      <main>
      <div className='search-box'>
        <input className="search-bar" type="text" placeholder='Search...' onChange={e=>setQuery(e.target.value)} value={query}
        onKeyPress={search} />
       
       </div>
       </main>
       
    </div>
     </>
  )
}
