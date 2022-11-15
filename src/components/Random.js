import './Random.css'

function Random(props){
    const {min, max} = props
    function randomIntFromInterval(min_param, max_param) { // min and max included 
        return Math.floor(Math.random() * (max_param - min_param + 1) + min_param)
      }
    const result = randomIntFromInterval(min,max)

    return(
        <div>
            <h1>Random value between {min} and {max} =&gt; {result}</h1>
        </div>
    )
}

export default Random;