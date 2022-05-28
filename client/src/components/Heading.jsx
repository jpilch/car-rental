const Heading = ({size, text}) => {
    const style = {
        padding: '0.5rem 1rem',
        border: '1px solid var(--clr-light)',
        color: 'var(--clr-dark)',
        textShadow: '1px 1px 1px var(--clr-light)',
        letterSpacing: '0.1rem',
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