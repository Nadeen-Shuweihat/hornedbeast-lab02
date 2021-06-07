import React from 'react';

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
        };
    }

    favorite = () => {
        this.setState({ likes: this.state.likes + 1 });
    };

    render() {
        return (


            <
            div >
            <
            Col >
            <
            Card style = {
                { width: '18rem' }
            } >
            <
            Card.Img variant = "top"
            onClick = { this.favorite }
            src = { this.props.image_url }
            / > <
            Card.Body >


            <
            Card.Title > Card Title < /Card.Title>

            <
            Card.Text >

            ❤️ = { this.state.likes } <
            /Card.Text>

            <
            Card.Text > { this.props.description } < /
            Card.Text > < /
            Card.Body > <
            /Card> < /
            Col >

            <
            /div>
        )
    }
}

export default HornedBeast;