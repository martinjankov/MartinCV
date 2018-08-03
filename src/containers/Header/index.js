import React, { Component } from 'react';

import './Header.css';

export default class Header extends Component  {
    constructor(props) {
        super(props);

        this.state = {
            sticky : ''
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', (event) => {
            let scrollTop = window.scrollY;

            if(scrollTop > 100) {
                this.makeSticky(true);
            } else {
                this.makeSticky(false);
            }
        });
    }

    render() {
        return (
            <header id="header" className={`tt-nav nav-border-bottom ${this.state.sticky}`}>
                <div className="header-sticky brand-header">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </header>
        )
    }

    makeSticky(sticky) {
        sticky === true ? this.setState({sticky: 'sticky'}) : this.setState({sticky:''});
    }
}