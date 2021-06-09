import React from "react";

import { Card, Col } from "react-bootstrap";

import SelectedBeast from "./SelectedBeast";

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            PopUp: false,
        };
    }

    favorite = () => {
        this.setState({ likes: this.state.likes + 1 });
        this.Open();
    };

    Open = () => {
        this.setState({ PopUp: true });
    };

    Close = () => {
        this.setState({ PopUp: false });
    };

    render() {
        return ( <
            div >
            <
            Col >
            <
            Card style = {
                { width: "18rem" } }
            bg = "dark"
            text = "light" >
            <
            Card.Img variant = "top"
            src = { this.props.image_url }
            />{" "} <
            Card.Body onClick = { this.favorite } >
            <
            Card.Title > { this.props.title } < /Card.Title>{" "} <
            Card.Text > ❤️ = { this.state.likes } < /Card.Text>{" "} <
            Card.Text > { this.props.description } < /Card.Text>{" "} <
            /Card.Body>{" "} <
            /Card>{" "} <
            SelectedBeast PopUp = { this.state.PopUp }
            close = { this.Close }
            title = { this.props.title }
            image_url = { this.props.image_url }
            description = { this.props.description }
            />{" "} <
            /Col>{" "} <
            /div>
        );
    }
}

export default HornedBeast;