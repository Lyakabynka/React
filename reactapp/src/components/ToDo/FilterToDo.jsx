import React from 'react';
import FilterButton from './FilterButton';

const FilterToDo = ({ filter_map, filter, setFilter }) => {
    const filter_names = Object.keys(filter_map);

    return (
        <div>
            {filter_names.map((name)=>{ 
                return <FilterButton name={name} setFilter={setFilter} key={name} isActive={filter === name} />})}
        </div>
    );
}

export default FilterToDo;