const Logout = () => {
    localStorage.removeItem('loggedInStatus');
    localStorage.removeItem('memberId');
    localStorage.clear();
    window.location.replace('/login');
    
    return null;
}
export default Logout;