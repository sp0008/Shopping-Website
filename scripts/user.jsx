function user(){
    return(
    <div>
        <h1>My Account</h1>
        <br/> <hr />
        <form action="">
            <label htmlFor="email">
            Email Address
            </label>
            <input type="email" />
            <label htmlFor="password">
            Password
            </label>
            <input type="password" />
            <input type="submit" value="Sign In" />
        </form>
        <a href=""> Forgotten Your Password </a>
    </div>
    );
};