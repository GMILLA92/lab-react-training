import './Greetings.css'

function Greetings(props){
    const {lang, children} = props
  
    return(
        <div>
            {lang === 'en' && 'Hello ' + children}
            {lang === 'es' && 'Hola ' + children}
            {lang === 'de' && 'Hallo ' + children}
            {lang === 'fr' && 'Bonjour ' + children}
        </div>
    )
}

export default Greetings;