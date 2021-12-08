import { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import { Redirect, Route, Switch } from "react-router";




class Main extends Component {
    render() {
        const HomePage = () => {
            return(
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/aboutus' render={() => <About />} />
                    
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}

export default Main;