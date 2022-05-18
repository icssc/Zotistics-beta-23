import React, {Dispatch, Fragment, useContext, useEffect, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FilteredData } from "../../types";
import { QueriesContext } from "../../contexts/queries/queries";
import { X, Loader } from "react-feather";
import DetailsTable from "./DetailsTable";

interface TableProps {
    isOpen: boolean
    setIsOpen: Dispatch<React.SetStateAction<boolean>>
    queryID: any
}

export function exactTerm(quarter:string, year:string){
    const yearSplit = year.split('-');
    const quarterUpper = quarter.toUpperCase()
    let exactYear;
    if(quarterUpper === 'SUMMER' || quarterUpper === 'FALL'){
        exactYear = yearSplit[0]
    } else if(quarterUpper === 'WINTER' || quarterUpper === 'SPRING'){
        exactYear = yearSplit[0][0] + yearSplit[0][1] + yearSplit[1]
    }

    return `${quarter} ${exactYear}`
}

function Modal({isOpen, setIsOpen, queryID}: TableProps) {
    const { queries } = useContext(QueriesContext);
    const [dataInfo, setDataInfo] = useState<FilteredData[]>([]);
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        console.log('useEffect')
        const fetchData = async () => {
            const query = queries.get(queryID)
            if(!query) { return }
            const params = {
                year: query.years.map(({ value }) => value).join(";"),
                quarter: query.quarters.map(({ value }) => value).join(";"),
                instructor: query.instructors.map(({ value }) => value).join(";"),
                department: query.departments.map(({ value }) => value).join(";"),
                number: query.courseCode.map(({ value }) => value).join(";"),
                code: query.classCode.map(({ value }) => value).join(";")
            }

            const queryParams = new URLSearchParams(params)
            const queryURL = "https://api.peterportal.org/rest/v0/grades/raw?" + queryParams.toString()

            return await fetch(queryURL)
                .then(res => res.json())
        }

        fetchData().then(
            data => {
                const filteredData = data.map((d:any) => ({
                    term: exactTerm(d.quarter, d.year),
                    department: d.department,
                    number: d.number,
                    title: d.title,
                    instructor: d.instructor,
                    code: d.code,
                    average_gpa: d.averageGPA
                }))
                setisLoading(false)
                setDataInfo(filteredData.reverse())
            });
        return () => {
            console.log('unmounted')
        }
    }, [])

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 sm:z-10" onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="relative flex flex-col w-full max-w-6xl min-w-[50vw] max-h-[85vh] max-h[-webkit-fill-available] transform rounded-2xl bg-white pb-10 text-left align-middle shadow-xl transition-all px-0 dark:bg-[#161616]">
                                <div className="flex justify-end align-middle p-1 pr-2">
                                    <button className="hover:dark:bg-red-500 hover:rounded-md hover:bg-red-400" onClick={() => setIsOpen(false)}>
                                        <X className="text-gray-600 dark:text-neutral-300" size={28} strokeWidth={2} />
                                    </button>
                                </div>
                                <div className={`flex-shrink ${!isLoading && "overflow-auto"}`}>
                                    {isLoading ?
                                        <div className="flex items-center justify-center align-center"><Loader className="animate-spin dark:text-neutral-300" size={40} /></div> :
                                        <DetailsTable dataInfo={dataInfo} />
                                    }
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal