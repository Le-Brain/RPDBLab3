import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HardwareList from "./Hardware-list";
import IpmacList from "./Ipmac-list";
import Header from "./Header";


class App extends React.Component{

    render() {
        return (
            <div>
                <h1>Записная книжка системного администратора</h1>
                <Header />
                <Switch>
                    <Route exact path='/' component={HardwareList} />
                    <Route path='/ipmac' component={IpmacList} />
                </Switch>
            </div>
        )
    }
}

export default App;
