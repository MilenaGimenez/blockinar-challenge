import React, { useMemo } from 'react'
import {useState, useEffect} from 'react'
import { useTable, useFilters, useGlobalFilter, useSortBy } from 'react-table'
import { COLUMNS } from './columns'
import { GlobalFilter } from './GlobalFilter'
import axios from "axios"
import './BookingsTable.sass'

const FilteringTable = () => {
  const [loadingData, setLoadingData] = useState(true);
  const columns = useMemo(() => COLUMNS, [])
  const [data, setData] = useState([]);
  const [azButton, setAzButton] = useState('')


  useEffect(() => {
    async function getData() {
      await axios
        .get("https://api-challenge.blockinar.io/bookings")
        .then((response) => {
          console.log(response.data);
          setData(response.data);
          setLoadingData(false);
        });
    }
    if (loadingData) {
      getData();
    }
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  )

  const { globalFilter } = state   
 
  return (
    <>
    {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
      <div className="table-and-filter">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} azButton={azButton} setAzButton={setAzButton}/>
        <span className="text">Para ordenar alfabéticamente, presione en el título de cada columna.</span>
        
        <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
              </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>        
      </table>
      </div>

     )
    
    
    }
     
    </>
  )
}
export default FilteringTable