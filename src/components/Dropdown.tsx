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
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    );


    function handleDropdownClick(type) {
        router.push(pathname + '?' + createQueryString("sortBy", sortingSearchMap[type]))

        // setSearchParams((prev) => {
        //     prev.set("sortBy", sortingSearchMap[type]);
        //     return prev;
        // });
    }

    return (
        <div className="dropDownContainer">
            {sortingTypes.map(type => <button onClick={() => handleDropdownClick(type)}
                                              className="dropDownButton">{type}</button>)}
        </div>
    )
}