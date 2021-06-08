import React from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
    render() {
        return ( <
            Modal show = { this.props.PopUp }
            onHide = { this.props.close } >
            <
            Modal.Header >
            <
            Modal.Title > { this.props.title } < /Modal.Title>{" "} <
            /Modal.Header>{" "} <
            Modal.Body >
            <
            Card bg = "dark"
            text = "light" >
            <
            Card.Img variant = "top"
            src = { this.props.image_url }
            alt = { this.props.title }
            title = { this.props.title }
            />{" "} <
            /Card>{" "} <
            Card.Body >
            <
            Card.Title > { this.props.title } < /Card.Title>{" "} <
            Card.Text > { this.props.description } < /Card.Text>{" "} <
            /Card.Body>{" "} <
            /Modal.Body>{" "} <
            Modal.Footer >
            <
            Button variant = "secondary"
            onClick = { this.props.close } >
            Close { " " } <
            /Button>{" "} <
            /Modal.Footer>{" "} <
            /Modal>
        );
    }
}
export default SelectedBeast;