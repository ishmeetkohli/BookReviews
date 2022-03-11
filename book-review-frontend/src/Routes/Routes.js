import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Book from "../Book/Book";
import Review from "../Review/Review";
import history from '../history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Book} />
                    <Route path="/Review" component={Review} />
                </Switch>
            </Router>
        )
    }
}