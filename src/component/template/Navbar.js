import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Page from "../Page"
  import Register from "../Register"
import data from "../../data.json"
import LandingPage from '../LandingPage';

const list_kelas = [
    "Web Dev", "Mobile App Dev", "Data Science", "Graphic Design", "CMS Web", "Web Frontend Dev", "UI/UX"
]


export default class Navbar extends Component {

    render() {
        console.log(data)
        return ( 
            <Router className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    {
                        data.map((item) => <Link className="p-2 text-muted" to={`/page/`+item.path}>{item.name}</Link>)
                    }
                </nav>
                <Switch>
                    <Route path="/page/:page" component={Page}/>
                    <Route exact path="/register">
                        <Register/>
                    </Route>
                    <Route exact path="/">
                        <LandingPage/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
