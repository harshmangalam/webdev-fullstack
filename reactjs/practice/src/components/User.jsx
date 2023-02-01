function User({name,email,profileImage,loggedIn,children}){
    return (
        <div>
            <img width="100" height="100" src={profileImage} alt="Profile" />
            <h1>{name}</h1>
            <h2>{email}</h2>
            <h3>Loggedin: {loggedIn}</h3>
            {children}
        </div>
    )
}


export default User