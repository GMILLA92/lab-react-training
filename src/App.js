import logo from './logo.svg';
import './App.css';
import IdCart from "./components/IdCart"
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard'
import Rating from './components/Rating';
import DrivingCard from './components/DrivingCard';


function App() {
  const arrayCarts = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date("1992-07-14"),
      picture: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date("1988-05-11"),
      picture: "https://randomuser.me/api/portraits/women/44.jpg"
    },
  ]

  const arrayCreditCards= [
    {
      type: "Visa",
      number: "0123456789018845",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "BNP",
      owner: "Maxence Bouret",
      bgColor: "#11aa99",
      color:"white" 
    },
    {
      type: "Master Card",
      number: "0123456789010995",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "N26",
      owner: "Maxence Bouret",
      bgColor: "#eeeeee",
      color:"#222222" 
    }
  ]
  const idCarts = arrayCarts.map((idCart) => (
    <IdCart
      lastName={idCart.lastName}
      firstName={idCart.firstName}
      gender={idCart.gender}
      height={idCart.height}
      birth={idCart.birth}
      picture={idCart.picture}
    >adsfsdfsd</IdCart>
  ))

  const arrayDrivingCards = [
    {
      FullName: "Travis Kalanick",
      rating: 4.2,
      img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
      car: {
        model: "Toyota Corolla Altis",
        licensePlate: "CO42DE"
       }
    },
    {
      FullName: "Dara Khosrowshahi",
      rating: 4.9,
      img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
      car: {
        model: "Audi A3",
        licensePlate: "BE33ER"
       }
      }
  ]

  const creditCards = arrayCreditCards.map((creditCard)=> (
    <CreditCard 
    type= {creditCard.type}
    number= {creditCard.number}
    expirationMonth = {creditCard.expirationMonth}
    expirationYear = {creditCard.expirationYear}
    bank= {creditCard.bank}
    owner = {creditCard.owner}
    bgColor= {creditCard.bgColor}
    color= {creditCard.color}
    />
  ))

  const drivingCards = arrayDrivingCards.map((drivingCard)=>
  <DrivingCard
  FullName= {drivingCard.FullName}
  rating= {drivingCard.rating}
  img= {drivingCard.img}
  model= {drivingCard.car.model}
  licensePlate= {drivingCard.car.licensePlate}
  />
  )


  return (
    <div className="App">
      {idCarts}
      <Greetings lang="en">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      {creditCards}
      <Rating>0.9</Rating>
      <Rating>4</Rating>
      <Rating>2.12</Rating>
      <Rating>5</Rating>
      <Rating>4.9</Rating>
      <Rating>3.9
      </Rating>
      {drivingCards}
    </div>
  );
}

export default App;
