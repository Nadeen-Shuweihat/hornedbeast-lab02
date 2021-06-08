import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import DataRow from "./data.json";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DataRow: DataRow,
        };
    }

    render() {
        return ( <
            div className = "home" >
            <
            Header / >
            <
            Main HornsData = { this.state.DataRow }
            /> <Footer / >
            <
            /div>
        );
    }
}

export default App;