
import { ErrorBoundary } from "react-error-boundary";

function CustomErrorBoundaryUi(error,resetErrorBoundary){
    return (
        <div role="alert" className="alert alert-error">
            <p>An error occurred!</p>
            <div>{error.message}</div>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    )
}


export default function CustomErrorBoundary({Children}){
    return(
        <ErrorBoundary
            FallbackComponent={CustomErrorBoundaryUi}
            onReset={()=>window.location.reload()}
        >
            {Children}
        </ErrorBoundary>
    )
}


// import React from "react";

// class CustomErrorBoundary extends React.Component {


// }
// export default CustomErrorBoundary;