import ClipLoader from "react-spinners/ClipLoader";
import React from "react";

const Loading = ({ fullPageLoading }) => {
    const loadingStyle = {
        height: fullPageLoading ? '100vh' : '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div className="loading" style={loadingStyle}>
            <ClipLoader
                loading={true}
                size={50}
            />
        </div>
    )
}

export default Loading