import './CreditCard.css'
import visa from '../assets/images/visa.png'



function CreditCard(props){
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}= props
    let imageCard =''
    if (type === 'Visa'){
        imageCard = visa
    } 
    return(
        <img src= {imageCard}/>
       
        
    )
}




export default CreditCard;