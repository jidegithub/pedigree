import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Carousel from './components/Carousel';
import App from './App'

 const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Carousel} exact={true}/>
                <Route path="/app" component={App}/>
                {/* <Route component={NotFoundPage}/> */}
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;