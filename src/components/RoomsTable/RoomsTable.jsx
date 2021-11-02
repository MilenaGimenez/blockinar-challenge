import './RoomsTable.sass';
import React, { useMemo } from 'react'
import {useState, useEffect} from 'react'
import { useTable, useFilters, useGlobalFilter, useSortBy } from 'react-table'
import { COLUMNS } from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'
import axios from "axios"
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const RoomsTable = () => {
  const [loadingData, setLoadingData] = useState(true);
  const columns = useMemo(() => COLUMNS, [])  
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get("https://api-challenge.blockinar.io/rooms")
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

        <table {...getTableProps()} id="tablaRooms">
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

      <div>
          <ReactHTMLTableToExcel
            id="botonExportarExcel"
            className="download-table-xls-button"
            table="tablaRooms"
            filename="Tabla1"
            sheet="Página 1"
            buttonText="Download as XLS"
          />
        </div>
      </div>
     )
    
    
    }
     
    </>
  )
}
export default RoomsTable