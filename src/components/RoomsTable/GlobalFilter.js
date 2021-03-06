import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = ({ filter, setFilter }) => {

  const [value, setValue] = useState(filter)
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 1000)

  return (
    <span className="data-filter-box">
      <label htmlFor="categoryFilter" className="globalfilter-label">Filtrar por categoria: </label>
      <select id="categoryFilter" className="globalfilter-input" onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}>
        <option value=''>Todos</option>
        <option value='Confort'>Confort</option>
        <option value='Superior'>Superior</option>
        <option value='Junior Suite' >Junior Suite</option>
        <option value='Senior Suite' >Senior Suite</option>
      </select>
    </span>
  )
};
