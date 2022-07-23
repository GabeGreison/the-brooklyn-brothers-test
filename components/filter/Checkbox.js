import React from 'react'

const Checkbox = ({label, id,getSelectedCategories}) => {
  return (
    <label>
     <input type="checkbox" value={id} onChange={e => getSelectedCategories(e.target.value)}/> <span>{label}</span>
    </label>
  )
}

export default Checkbox