import './BoxColor.css'

function BoxColor(props) {
    const { r, g, b } = props
    const color = `rgb(${r}, ${g}, ${b})`
    const colorR = r.toString(16)
    const colorG = g.toString(16)
    const colorB = b.toString(16)

    const hexColor = colorR + colorG + colorB

    const divStyle = {
        backgroundColor: color,
        width: '200px',
        height: '200px'
    }


    return (
        <div style={divStyle}>
            <h1>rgb({r},{g},{b})</h1>
            <h1>#{hexColor}</h1>
        </div>
    )

}

export default BoxColor;