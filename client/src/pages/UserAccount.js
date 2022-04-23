const UserAccount = (props) => {

    const greetingHeadingStyle = {
        paddingTop: '100px'
    }

    return (
        <>
            <h1 style={greetingHeadingStyle}>Hi UserName!</h1>
            <button>Logout</button>
        </>
    )
}

export default UserAccount