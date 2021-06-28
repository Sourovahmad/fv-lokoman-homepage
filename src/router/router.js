import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './../pages/home/home';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>

            </Switch>
        </BrowserRouter>

    );
}
