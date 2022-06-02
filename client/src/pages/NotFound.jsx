const NotFound = () => {
    return (
        <main id="not-found" style={{
            paddingTop: '5rem',
            height: '92vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
        }}>
            <div className="message-container" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1>Error 404</h1>
                <h2>Page not found</h2>
            </div>
        </main>
    )
}

export default NotFound