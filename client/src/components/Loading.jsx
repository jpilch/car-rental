const Loading = () => {
    const loadingStyle = {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div className="loading" style={loadingStyle}>
            <h1>Loading...</h1>
        </div>
    )
}

export default Loading