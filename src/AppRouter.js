import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth';
import OnboardCarousel from './components/OnboardCarousel';
import Login from './components/Login';
import SignUp from './components/SignUp';
import App from './App';
import PrivateRoute from './components/PrivateRoute';
import List from './components/List';
import NotFoundPage from './components/NotFoundPage';


 const AppRouter = () => (
     <AuthProvider>
         <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={OnboardCarousel} exact={true}/>
                    <PrivateRoute exact path="/app" component={App}/>
                    <PrivateRoute path="/list" component={List} />
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>
     </AuthProvider>
    
)

export default AppRouter;