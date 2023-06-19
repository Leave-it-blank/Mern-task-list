import React from "react";
 

function CalculatorKey(props: { className: any; onClick: (arg0: any) => void; keyValue: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) {
    return (
        <button className={`${props.className}`}
            onClick={() => props.onClick(props.keyValue)}
        >
            {props.keyValue}{" "}
        </button>
    );
}

export default CalculatorKey;