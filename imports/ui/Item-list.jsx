import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';

import {Items} from '../api/items'
import Item from "./Item";
import ItemForm from "./Item-form";

class ItemList extends React.Component{

    state = {filter: ''};

    renderItems = () => {
        const { items } = this.props;
        const {filter} = this.state;
        const filteredItems = items.filter(item=>{
            return item.name.toLowerCase().includes(filter.toLowerCase());
        });
        return filteredItems.map((item)=>{
            return (<Item key={item._id} item={item} />)
        })
    };

    handleFilter = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        const {items} = this.props;
        const lastNumber = items.reduce((acc, item) => {
            if(acc < item.number){
                acc = item.number;
            }
            return acc;
        }, 0);
        const {filter} = this.state;
        return (
            <div>
                <form onSubmit={(event => event.preventDefault())}>
                    <label htmlFor='filter'>Отфильтровать по типу снаряжения</label>
                    <input type='text' name='filter' value={filter} onChange={this.handleFilter} />
                </form>
                <ItemForm lastNumber={lastNumber} />
                {this.renderItems()}
            </div>
        )
    }
}

export default withTracker(()=>{
    return{
        items: Items.find({}).fetch()
    }
})(ItemList);