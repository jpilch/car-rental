const Heading = ({size, text, underline}) => {
    const style = {
        textAlign: 'center',
        padding: '0.5rem 3rem',
        color: 'var(--clr-dark)',
        backgroundColor: 'var(--clr-light)',
        fontWeight: 'bold',
        borderRadius: '1rem',
        boxShadow: '3px 3px 10px var(--clr-light)'
    }

    return (
        <div className="heading-container" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem'
        }}>
            <div className='heading' style={style}>
                <h1>{text}</h1>
            </div>
            {underline && <div className="underline" style={{
                backgroundColor: 'var(--clr-light)',
                height: '1px',
                width: '40vw'
            }}></div>}
        </div>
    )
}

export default Heading