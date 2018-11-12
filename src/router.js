import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import PraiseDashboard from './components/PraiseDashboard';
import AddPraisePage from './containers/AddPraisePage';
import EditPraisePage from './containers/EditPraisePage';
import NotFoundPage from './components/NotFoundPage';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact={true} path='/' component={PraiseDashboard} />
                        <Route path='/create' component={AddPraisePage} />
                        <Route path='/edit' component={EditPraisePage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router; 
