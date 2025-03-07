import about_page from '../../../assets/images/_about/about.jpg';

const Banner_about = () => {
    return (
        <>
        <div className="banner_otherpages" style={{ backgroundImage: `url(${about_page})` }}>
            <h1>About Us</h1>
        </div>
        </>
    )
}
export default Banner_about;