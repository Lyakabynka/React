import React from 'react'

const SortingBy = {
    'NameAsc': (a,b) => a.Title.localeCompare(b.Title),
    'NameDesc': (a,b) => b.Title.localeCompare(a.Title),
    'YearAsc': (a,b) => a.Year - b.Year,
    'YearDesc': (a,b) => b.Year - a.Year
}

export default function FilmFilter({setSortBy}) {


  return (
    <div className='filterBar'>
        <label>Sort by: </label>
        <select onInput={(e)=>{setSortBy(() => SortingBy[e.target.value]); console.log(e.target.value);}}>
            <option value='NameAsc'>Name (A-Z)</option>
            <option value='NameDesc'>Name (Z-A)</option>
            <option value='YearAsc'>Year ascending</option>
            <option value='YearDesc'>Year descending</option>
        </select>
    </div>
  )
}
