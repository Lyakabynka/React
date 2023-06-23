import React from 'react'

const SortingBy = {
    'NameAsc': (a,b) => a.Title - b.Title,
    'NameDesc': (a,b) => b.Title - a.Title,
    'AgeAsc': (a,b) => a.Year - b.Year,
    'AgeDesc': (a,b) => b.Year - a.Year
}

export default function FilmFilter({setSortBy}) {


  return (
    <div className='filterBar'>
        <label>Sort by: </label>
        <select onInput={(e)=>{setSortBy(SortingBy[e.target.value]); console.log(e.target.value);}}>
            <option value='NameAsc'>Name (A-Z)</option>
            <option value='NameDesc'>Name (Z-A)</option>
            <option value='AgeAsc'>Age ascending</option>
            <option value='AgeDesc'>Age descending</option>
        </select>
    </div>
  )
}
