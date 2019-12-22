import React from 'react';

import {Items} from '../api/items'

class Item extends React.Component{

    deleteItem = () => {
        Items.remove(this.props.item._id);
    };

    render() {
        const {number, name, size, dateProd} = this.props.item;
        return(
            <div className='block'>
                <div>Номер снаряжения: {number}</div>
                <div>Наименование: {name}</div>
                <div>Размер: {size}</div>
                <div>Дата поступления в пункт: {dateProd}</div>
                <button onClick={this.deleteItem}>Удалить предмет</button>
            </div>
        )
    }
}

export default Item;