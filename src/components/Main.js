import React from "react";
import HornedBeasts from "./HornedBeast";

import Row from "react-bootstrap/Row";

class Main extends React.Component {
    render() {
        return ( <
            div >
            <
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
            /Row>{" "} <
            /div>
        );
    }
}

export default Main;