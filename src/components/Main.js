import React from "react";
import HornedBeasts from "./HornedBeast";

import { Row, Form } from "react-bootstrap/";

class Main extends React.Component {


    ChosenHornNum = (i) => {
        let HornsNum = parseInt(i.target.value);
        let HornsData = this.props.OriginalHorn;

        let newData = HornedBeasts;
        if (HornsNum) {
            newData = HornsData.filter((item) => {
                if (item.horns == HornsNum) {
                    return true;
                } else {
                    return false;
                }
            });
        } else {
            newData = HornsData
        }
        this.props.FilterImgs(newData);
    };

    render() {
        return ( <
            div >
            <
            Form >
            <
            Form.Group controlId = "exampleForm.ControlSelect1" >
            <
            Form.Label > How Many Horns: < /Form.Label>{" "} <
            Form.Control as = "select"
            onChange = { this.ChosenHornNum } >
            <
            option value = "0" > All < /option> <option value="1"> one </option > { " " } <
            option value = "2" > two < /option>{" "} <
            option value = "3" > three < /option>{" "} <
            option value = "100" > wow < /option>{" "} < /
            Form.Control > { " " } <
            /Form.Group>{" "} < /
            Form > { " " } <
            Row xs = { 1 }
            md = { 3 }
            className = "g-4" > { " " } {
                this.props.HornsData.map((item) => {
                    return ( <
                        HornedBeasts title = { item.title }
                        description = { item.description }
                        image_url = { item.image_url }
                        key = { item.title }
                        />
                    );
                })
            } { " " } <
            /Row>{" "} < /
            div >
        );
    }
}

export default Main;