import { useState } from "react";

export default function ProductDescription({text}) {
    const[isExpanded, setIsExpanded] = useState(false);

    if (text.length < 100) return <p className="">{text}</p>

    return(
        <div className="">
            <p className={isExpanded ? "" : "line-clamp-3"}>{text}</p>
            <button className="mt-2 font-semibold"
            onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Show Less" :"Read More..."}</button>
        </div>
    )
}