import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RentList from "./Rent-list";
import ItemList from "./Item-list";
import Header from "./Header";


class App extends React.Component{

    render() {
        return (
            <div>
                <h1>Пункт проката спортивного снаряжения</h1>
                <Header />
                <Switch>
                    <Route exact path='/' component={RentList} />
                    <Route path='/items' component={ItemList} />
                </Switch>
            </div>
        )
    }
}

export default App;
