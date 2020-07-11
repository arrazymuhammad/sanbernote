import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div className="jumbotron p-3 mt-5 p-md-5 text-dark rounded">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-dark border-bottom">Pendaftaran</h2>
                        <form className="mt-5">
                            <div className="form-group">
                                <label className="control-label">Nama Lengkap</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Email</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Password</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-dark float-right btn-daftar-dark">Daftar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
