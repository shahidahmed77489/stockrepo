import React from 'react'

const ChildTab = ({listName,listBtn,className}) => {
  return (
    <div>
      <ul style={{listStyle:"none"}}>
        <li  onClick={listBtn} className={className}>{listName}</li>
      </ul>
    </div>
  )
}

export default ChildTab
