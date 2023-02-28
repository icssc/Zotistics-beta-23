import {useState} from "react";
import {Option} from "../../types";

interface CheckboxProps {
    label: string
    apiValue: string
    setValue: (value: string) => void;
}

export default function Checkbox({label, apiValue, setValue}: CheckboxProps) {
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setValue(!checked ? apiValue : "")
        setChecked(!checked)
    }

    return (
        <div className="dark:text-white">
            <label>
                <input type="checkbox" checked={checked} onChange={handleChange}/>
                <span className="pl-1">{label}</span>
            </label>
        </div>
    )
}