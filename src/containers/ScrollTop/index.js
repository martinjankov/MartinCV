import React, { Component } from 'react';

import './ScrollTop.css';

export default class ScrollTop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sticky: ''
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', (event) => {
            let scrollTop = window.scrollY;

            if (scrollTop > 200) {
                this.makeSticky(true);
            } else {
                this.makeSticky(false);
            }
        });

        document.querySelectorAll('.back-top')[0].addEventListener('click', (event) => {
            event.preventDefault();
            const scrollStep = -window.scrollY / (1000 / 15);
            let scrollInterval = setInterval(function () {
                if (window.scrollY !== 0) {
                    window.scrollBy(0, scrollStep);
                }
                else clearInterval(scrollInterval);
            }, 15);
        });
    }

    render() {
        return (
            <a href="/" className={`page-scroll back-top ${this.state.sticky}`}>
                <i aria-hidden="true" className="fa fa-arrow-up"></i>
            </a>
        )
    }

    makeSticky(sticky) {
        sticky === true ? this.setState({ sticky: 'show-scroll' }) : this.setState({ sticky: 'hide-scroll' });
    }
}