import React, { Component } from 'react'
import workspace from "../workspace.svg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class LandingPage extends Component {
    render() {
        return (
            <div className="jumbotron p-3 mt-5 p-md-5 text-dark rounded">
                <div className="row">
                    <div className="col-md-6 px-0 landingPage">
                        <h1 className="display-4 font-italic">Ngoding Santai Berkualitas</h1>
                        <p className="lead my-3">Kami membantu Anda belajar intensif membuat website, mobile apps, data science, desain grafis, dan lainnya.
    Kami bantu Anda mendapatkan kerja / proyek.</p>
                        <p className="lead mb-0"><Link to="/page/web-dev" className="text-white font-weight-bold btn btn-dark">Daftar Program Intensif</Link></p>
                    </div>
                    <div className="col-md-6 px-0">
                        <img srcSet={workspace} className="img-fluid"/>
                    </div>
                </div>
            </div>
        )
    }
}
