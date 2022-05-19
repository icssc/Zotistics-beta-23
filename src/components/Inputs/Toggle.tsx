import React, { Dispatch } from "react";
import { Switch } from '@headlessui/react'

interface ToggleProps {
    isEnabled: boolean
    setEnabled: Dispatch<React.SetStateAction<boolean>>
}

export default function Toggle({isEnabled, setEnabled}: ToggleProps) {
    return (
        <div className="">
            <Switch
                checked={isEnabled}
                onChange={setEnabled}
                className={`${isEnabled ? 'bg-blue-600 dark:bg-blue-800' : 'bg-gray-300 dark:bg-gray-600'} relative inline-flex h-[24px] w-[43px] 
                            shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out 
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span
                    aria-hidden="true"
                    className={`${isEnabled ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-[20px] w-[20px] 
                                transform rounded-full bg-white dark:bg-neutral-300 shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>
    )
}
