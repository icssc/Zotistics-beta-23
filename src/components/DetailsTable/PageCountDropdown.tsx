import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronUp } from "react-feather";

const PAGE_SIZES = [25, 50, 100, 200, 500]

interface DropdownProps {
    pageSize: number
    setPageSize: (pageSize: number) => void
}

export default function PageCountDropdown({pageSize, setPageSize}: DropdownProps) {
    return (
        <Menu as="div" className="relative inline-block text-left pl-2">
            <div>
                <Menu.Button className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-0.5 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500
                                        dark:bg-[#303030] dark:text-neutral-300 dark:border-neutral-500">
                    Show {pageSize}
                    <ChevronUp className="-mr-1.5 ml-1" size={18} />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right bottom-full absolute right-0 mb-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#303030]">
                    <div className="py-1">
                        {PAGE_SIZES.map(count => (
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active ? 'bg-gray-100 text-gray-900 dark:bg-gray-700' : 'text-gray-700'
                                        } group flex w-full items-center rounded-md px-5 py-2 text-sm dark:text-neutral-300`}
                                        onClick={() => setPageSize(count)}
                                    >
                                        Show {count}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}