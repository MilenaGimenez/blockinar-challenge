import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Room id',
    accessor: 'room-id',
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'First Name',
    accessor: 'first_name',
    sticky: 'left'
  },
  {
    Header: 'Last Name',
    accessor: 'last_name',
    sticky: 'left'
  },
  {
    Header: 'Fecha de check in',
    accessor: 'check_in_date',
    sticky: 'left',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd-MM-yyyy')
    }
  },
  {
    Header: 'Fecha de Check out',
    accessor: 'check_out_date',
    sticky: 'left',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd-MM-yyyy')
    }
  },
  {
    Header: 'Número de invitados',
    accessor: 'number_of_guests',
    sticky: 'left'
  },
  {
    Header: 'Precio por noche',
    accessor: 'price_per_night',
    sticky: 'left'
  },
  {
    Header: 'Estado',
    accessor: 'status',
    sticky: 'left'
  },
]

