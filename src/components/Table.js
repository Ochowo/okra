/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import {
  useTable, usePagination, useSortBy, useFilters,
} from 'react-table';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSort, faSearch, faArrowDown, faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

function TextFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder="Search..."
      className="border border-grey3 p-1 rounded"
    />
  );
}
const Table = ({ columns, data }) => {
  const defaultColumn = useMemo(
    () => ({
      Filter: TextFilter,
    }),
    [],
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    state: { pageIndex },
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = useTable({
    columns, data, defaultColumn, initialState: { pageSize: 10 },
  }, useFilters,
  useSortBy, usePagination);

  return (
    <div className="flex flex-col">
      <table {...getTableProps()} className="text-grey2 w-full">
        <thead className="border-b border-borderGrey p-10 font-medium text-sm">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup
                .headers
                .map((column) => (
                  <th className="p-4 text-left" {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? <FontAwesomeIcon icon={faArrowDown} size="lg" /> : <FontAwesomeIcon icon={faArrowUp} size="lg" />) : ''}
                    </span>
                  </th>
                ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b border-borderGrey text-sm p-4">
                {row
                  .cells
                  .map((cell) => (
                    <td {...cell.getCellProps()} className="p-4">
                      <span className={`text-grey2 text-left ${cell.value === 'hard' ? 'text-errorText bg-error px-4 py-1 rounded-full' : cell.value === 'mid' ? 'text-warningText bg-warning px-4 py-1 rounded-full' : cell.value === 'easy' ? 'text-grey2 bg-grey3 px-4 py-1 rounded-full' : ''}`}>
                        {cell.render('Cell')}
                      </span>

                    </td>
                  ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex flex-row space-x-2  text-grey2 p-4">
        <button className="border border-grey2 rounded px-2" type="button" onClick={() => previousPage()} disabled={!canPreviousPage}>
          Prev
        </button>
        <div>
          Page
          {' '}
          <em>
            {pageIndex + 1}
            {' '}
            of
            {pageOptions.length}
          </em>
        </div>
        <button className="border border-grey1 rounded text-grey2 px-2" type="button" onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>

      </div>
    </div>
  );
};
Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
    }).isRequired,
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Priority: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
export default Table;
