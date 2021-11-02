import React, { useMemo } from 'react'
import {useState, useEffect} from 'react'
import { useTable, useFilters, useGlobalFilter, useSortBy } from 'react-table'
//import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'
import axios from "axios"

const FilteringTable = () => {
  const [loadingData, setLoadingData] = useState(true);
  const columns = useMemo(() => COLUMNS, [])
  //const data = useMemo(() => MOCK_DATA, [])
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get("https://api-challenge.blockinar.io/bookings")
        .then((response) => {
          // check if the data is populated
          console.log(response.data);
          setData(response.data);
          // you tell it that you had the result
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);

  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      defaultColumn
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
      <div>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        
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
                        ? ' 🔽 Ordenado Z/A'
                        : ' 🔼 Ordenado A/Z'
                      : ' Sin orden'}
                  </span>
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
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