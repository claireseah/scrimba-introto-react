import React from "react"

function Product(props) {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h3>Price: {props.price}</h3>
            <h5>Description: {props.description}</h5>
            <hr/>
        </div>
    )
}

export default Product