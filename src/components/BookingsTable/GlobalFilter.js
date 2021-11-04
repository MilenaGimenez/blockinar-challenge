import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import './BookingsTable.sass';
import { Input, Button } from 'antd';

export const GlobalFilter = ({ filter, setFilter, azButton, setAzButton }) => {
  const [value, setValue] = useState(filter)
  const [valueButton, setValueButton] = useState(filter)
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 1000)
  return (
    <span className="data-filter-box">
      <label htmlFor="fecha" className="globalfilter-label">Filtrar por fecha: </label>
      <Input type="date" name="fecha" id="fecha" className="globalfilter-input"
      value={value || ''}
      onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}/>

    {/* <label htmlFor="alfabeticamente" className="globalfilter-label">Ordenar alfabéticamente: </label>
    <Button value={value || ''} onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}>A/Z</Button> */}
    </span>
  )
};
