import { IoIosArrowDown } from "react-icons/io";

export function ScrollIndicator() {
    return (
        <>
            <div className="flex justify-center mt-5">
                <IoIosArrowDown className="size-12 fill-white animate-bounce"/>
            </div>
        </>
    );
}