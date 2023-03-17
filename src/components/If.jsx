import React from "react"

const If = props => {
    return (
        props.test ? props.children : false
    )
}

export default If