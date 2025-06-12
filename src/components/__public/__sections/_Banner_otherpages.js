const Banner_otherpages = (props) => {
    return (
        <>
        <div className="banner_otherpages " style={{ backgroundImage: `url(${props.image})`, maxHeight: '30rem' }}>
            <h1>{props.title}</h1>
        </div>
        </>
    )
}
export default Banner_otherpages;

