import classNames from 'classnames';
import React from 'react';

const FilterButton = ({name, setFilter, isActive}) => {

    return (
        <button className={classNames({activeBtn: isActive})} onClick={() => setFilter(name)}>Show {name} tasks</button>
    );
}

export default FilterButton;