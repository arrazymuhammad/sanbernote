import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import data from "../data.json"
export default class Page extends Component {
    render() {     
        const path = this.props.match.params.page;
        let filtered = data.filter((item) => item.path == path)
        const {name, fullname, jadwal, desc, tags, studi_kasus, fasilitas } = filtered[0]
        return (
            <div>
                <h3 className="mt-5 font-italic">{fullname}</h3>
                <p className="jadwal">Jadwal : {jadwal}</p>
                <p className="text-justify border-bottom">{desc}</p>
                <p className="mt-2 mb-2">
                    <b className="materiTitle">Materi Utama : </b> <br/>
                    <ul className="materiList">
                        {tags.map((item) => <li className="materiListItem">{item}</li>)}
                    </ul>
                </p>
                <div className="row">
                    <div className="col-md-6">
                        <b className="materiTitle">Studi Kasus : </b> <br/>
                        <ul className="studiKasusList">
                            {studi_kasus.map((item) => <li className="studiKasusListItem">{item}</li>)}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <b className="materiTitle">Studi Kasus : </b> <br/>
                        <ul className="studiKasusList">
                            {fasilitas.map((item) => <li className="studiKasusListItem">{item}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 btnDaftarContainer">
                        <Link to="/register">
                            <button className="btn btn-daftar">Daftar Sekarang</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
