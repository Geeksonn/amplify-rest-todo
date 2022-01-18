
const Banner = ({ user, signOut }) => {
    return (
        <div>Welcome {user.username} - <button onClick={signOut}>Sign Out</button></div>
    )
}

export default Banner;