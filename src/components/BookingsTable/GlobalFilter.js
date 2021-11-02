import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)
  const [valueButton, setValueButton] = useState(filter)
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 1000)
  return (
    <span>
      <input type="date" name="fecha" 
      value={value || ''}
      onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}/>
    </span>
  )
};
