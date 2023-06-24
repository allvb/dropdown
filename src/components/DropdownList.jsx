import React, { useState } from 'react';
import DropdownItem from './DropdownItem';

function DropdownList({show, data}) {

  const [itemActive, setItemactive] = useState('');

  function handleSetItemactive(e) {
    setItemactive (prev => prev = e);
  }

  return (
    <ul className={show === true ? 'dropdown open' : 'dropdown'}>
      {data.map((item) => {
        return  (
          <DropdownItem item={item} active={itemActive} itemOnClick={handleSetItemactive} />
        )
      })}
    </ul>
  )
}

export default DropdownList
