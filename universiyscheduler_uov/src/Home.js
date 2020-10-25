import React, {Component} from 'react';
import Header from "./components/header";
import IndexBody from "./components/indexbody";

class Home extends Component {
    render() {
        return (
            <div>
                 <Header/>
                 <IndexBody/>
            </div>
        );
    }
}

export default Home;