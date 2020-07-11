import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-12 text-center">
                        <a className="blog-header-logo text-dark" href="/">Sanber Note</a>
                    </div>
                </div>
            </header>
        )
    }
}
