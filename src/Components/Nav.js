import React from 'react';
import {Link} from "react-router-dom";

const Nav = ({SetSearch,setFilterLanguage}) => {
  return (
    <nav className='Nav'>
      <form onSubmit={(e)=>e.preventDefault()}>
      <input type="text"
          placeholder='Search for Name or Genre'
          onChange={(e)=>{SetSearch(e.target.value)}}
        />
      <label htmlFor="FilterLanguage" style={{color:'white'}}>Filter By Language </label>
      <select name="FilterLanguage" id="" onChange={(e)=>setFilterLanguage(e.target.value)}>
        <option value="" selected></option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Tamil">Tamil</option>
      </select>
      </form>
      <ul>
      <li><Link to = "/movie">AddMovie</Link></li>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/favorite">Watch List</Link></li>
      </ul>
        
    
    </nav>
  )
}

export default Nav