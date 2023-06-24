import React from 'react'

function DropdownItem({item, active, itemOnClick}) {
  // console.log(active);
  return (
    <li className={active === item ? 'active' : ''}>
      <a onClick={() => {itemOnClick(item)}} href="#">{item}</a>
    </li>
  )
}

export default DropdownItem
