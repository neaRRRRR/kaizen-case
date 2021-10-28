import React from 'react'

export default (props) => {
    let data = props.location.state
    return(
        <div>{data.text}</div>
    )
}
