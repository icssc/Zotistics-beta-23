import React from "react";
import { useTable, usePagination, Column } from 'react-table'
import { FilteredData } from "../../types";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "react-feather";
import PageCountDropBox from "./PageCountDropdown";

const COLUMN_NAMES =
    [
        {
            Header: 'Term',
            accessor: 'term',
        },
        {
            Header: 'Department',
            accessor: 'department',
        },
        {
            Header: 'Title',
            accessor: 'title',
        },
        {
            Header: 'Instructor',
            accessor: 'instructor',
        },
        {
            Header: 'Code',
            accessor: 'code',
        },
        {
            Header: 'GPA',
            accessor: 'average_gpa',
        },
    ]


interface TableProps {
    dataInfo: FilteredData[]
}

export default function DetailsTable({dataInfo}: TableProps) {
    const columns = React.useMemo(() => COLUMN_NAMES as Column<object>[], [])
    const data = React.useMemo(() => dataInfo, [dataInfo])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: {pageIndex, pageSize},
    } = useTable(
        {
            columns,
            data,
            initialState: {
                pageIndex: 0,
                pageSize: 100
            },
        },
        usePagination
    )

    return (
        <>
            <table {...getTableProps()} className="w-full text-sm text-left text-gray-500 dark:text-neutral-300">
                <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-zinc-200 dark:bg-neutral-700 dark:text-neutral-300">
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th className="px-3 py-3" {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {page.map((row: any) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()} className="bg-white border-b dark:bg-neutral-800 dark:border-neutral-600">
                            {row.cells.map((cell: any) => {
                                return <td className="px-3 py-3.5" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div className="flex absolute justify-end sm:justify-between w-full sm:px-5 bottom-2 right-0 pagination text-gray-600 dark:text-neutral-300">
                <div className="hidden sm:flex">
                    {data.length} Classes
                </div>
                <div className="flex items-center">
                    <button className={canPreviousPage ? "hover:text-black dark:hover:text-white" : ""} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        <ChevronsLeft />
                    </button>
                    <button className={canPreviousPage ? "hover:text-black dark:hover:text-white" : ""} onClick={() => previousPage()} disabled={!canPreviousPage}>
                        <ChevronLeft />
                    </button>
                    <span className="px-1">
                    <strong>{pageIndex + 1}</strong> / {pageOptions.length}
                </span>
                    <button className={canNextPage ? "hover:text-black dark:hover:text-white" : ""} onClick={() => nextPage()} disabled={!canNextPage}>
                        <ChevronRight />
                    </button>
                    <button className={canNextPage ? "hover:text-black dark:hover:text-white" : ""} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        <ChevronsRight />
                    </button>
                    <PageCountDropBox pageSize={pageSize} setPageSize={setPageSize} />
                </div>
            </div>
        </>
    )
}