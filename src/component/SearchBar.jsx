import React from 'react'
import './SearchBar.css'
export default function SearchBar() {
  return (
    <div className='search-bar'>
        <form 
        className='serach-form d-flex align-items-center '
        meathod="POST"
        action="#">
            <input type="text" name='query' placeholder='Search' title='Enter Search Keyword' />
            <button type='submit' title='search'>
                <i className="bi bi-search"></i>
            </button>
        </form>
    </div>
  )
}

