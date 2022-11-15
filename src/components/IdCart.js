import './IdCart.css'


function IdCart(props) {
    const { lastName, firstName, gender, height, birth, picture } = props
    const month = birth.toLocaleString("en-US", { month: "long" });
    const year = birth.getFullYear()
    const day = birth.toLocaleString("en-US", { day: "2-digit" });
    const weekday= birth.toLocaleString("en-US", {weekday: "short"})

    return (
        <div>
            <img className="IdPicture" src={picture} />
            <h1>First name:<strong> {firstName}</strong></h1>
            <h1>Last name: <strong> {lastName}</strong></h1>
            <h1>Gender: <strong>{gender}</strong> </h1> 
            <h1>Height: <strong> {height}</strong></h1>
            <h1>Birth: <strong> {weekday} {month} {day} {year}</strong></h1>
        </div>
    )
}

export default IdCart;