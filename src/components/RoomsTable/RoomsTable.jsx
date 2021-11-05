import './RoomsTable.sass';
import React, { useMemo } from 'react'
import {useState, useEffect} from 'react'
import { useTable, useFilters, useGlobalFilter, useSortBy } from 'react-table'
import { COLUMNS } from './columns'
//import './table.css'
import { GlobalFilter } from './GlobalFilter'
import axios from "axios"
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Form from '../Form';

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
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />        
        <span className="text">Para ordenar alfabéticamente, presione en el título de cada columna.</span>
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

      <div className="download-box">
          <ReactHTMLTableToExcel
            id="botonExportarExcel"
            className="download-xls-button"
            table="tablaRooms"
            filename="Tabla1"
            sheet="Página 1"
            buttonText="Exportar a Excel"
          />
        <Form />
      </div>

      </div>
     )    
    
    }
     
    </>
  )
}
export default RoomsTable