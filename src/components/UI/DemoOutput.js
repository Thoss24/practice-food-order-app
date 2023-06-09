import React from "react"

const DemoOutput = (props) => {
    console.log('DemoOutput RUNNING')
    return (
       <p>{props.showing ? 'Paragraph showing' : ''}</p>
    )
}

export default React.memo(DemoOutput)