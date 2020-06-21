import * as React from 'react';
import { HashRouter,Switch } from 'react-router-dom';
import routerConfig from "./routeConfig"
import FrontendAuth from '../components/auth'

class Router extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <FrontendAuth config={routerConfig}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default Router