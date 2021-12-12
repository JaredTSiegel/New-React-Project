import { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Footer from "./FooterComponent";
import { Redirect, Route, Switch } from "react-router";
import Contact from './ContactComponent';





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
                        <Route exact path='/contactus' component={Contact} />
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;