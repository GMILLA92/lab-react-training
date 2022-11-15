import Rating from "./Rating";
import './Rating.css'

function DrivingCard(props){
    const {FullName, rating, img, model, licensePlate} = props
    return(
        <div>
            <h1>{FullName}</h1>
            <img class="profile_picture" src= {img}/>
            <Rating>3.9</Rating>
            <h1>{model}</h1>
            <h1>{licensePlate}</h1>
        </div>

    )
}


export default DrivingCard;