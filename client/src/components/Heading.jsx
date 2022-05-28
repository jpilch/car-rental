const Heading = ({size, text}) => {
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
        <div className='heading' style={style}>
            <h1>{text}</h1>
        </div>
    )
}

export default Heading