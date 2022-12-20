import React from 'react';
import search from '../search.png';

function Search() {
  return (
    <div className='search'>
        <div className='history'>Medical Darpan > Search > Paracetamol</div>
        <div className='search-bar'>
          <img src={search} alt="" width="40px" height="40px"/>
          <input
              type='name'
              name='medicine-name'
              id='medicine-name'
          /> 
           <button type="submit"className='search-box'>Search</button>     
        </div>   
      hello
    </div>
  )
}

export default Search