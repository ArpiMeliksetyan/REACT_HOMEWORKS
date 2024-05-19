import React, { useCallback } from "react";
import "../components/DropDown.css"
import { useSearchParams, usePathname, useRouter, } from "next/navigation";

const sortingTypes = ['RELEASE DATE', 'TITLE'];
export const sortingSearchMap = {
    'RELEASE DATE': 'release_date',
    'TITLE': 'title',
};


export default function Dropdown() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams?.toString() || "");

            params.set(name, value);

                return params.toString();
        },
        [searchParams]
    );


    function handleDropdownClick(type: string) {
        router.push(pathname + '?' + createQueryString("sortBy", sortingSearchMap[type]))
    }

    return (
        <div className="dropDownContainer">
            {sortingTypes.map(type => <button key={type} onClick={() => handleDropdownClick(type)}
                                              className="dropDownButton">{type}</button>)}
        </div>
    )
}