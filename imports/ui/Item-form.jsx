import React from 'react';
import Select from "react-select";

import {Items} from '../api/items';

const options = [
    {value: 'Лыжи', label: 'Лыжи'},
    {value: 'Коньки', label: 'Коньки'},
    {value: 'Футбольный мяч', label: 'Футбольный мяч'},
    {value: 'Бита', label: 'Бита'},
    {value: 'Ласты', label: 'Ласты'},
];

class ItemForm extends React.Component{

    state = {
        name: options[0],
        size: 0,
        dateProd: new Date().toISOString().split('T')[0]
    };

    clearForm = () => {
        this.setState({
            name: options[0],
            size: 0,
            dateProd: new Date().toISOString().split('T')[0]
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const {name, size, dateProd} = this.state;
        const number = 1+parseInt(this.props.lastNumber,10);
        const { value } = name;

        Items.insert({number, name: value, size, dateProd});

        this.clearForm();
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleSelect = (name) =>{
        this.setState({name})
    };

    render() {
        const {name, size, dateProd} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <div className='input_group'>
                    <label htmlFor='number'>Номер предмета: </label>
                    <input type='number' value={1+parseInt(this.props.lastNumber,10)} name='number' disabled={true} />
                </div>
                <div className='input_group'>
                    <label htmlFor='name'>Наименование: </label>
                    <Select
                        onChange={this.handleSelect}
                        value={name}
                        options={options}
                    />
                </div>
                <div className='input_group'>
                    <label htmlFor='size'>Размер: </label>
                    <input type='number' value={size} name='size' onChange={this.handleInputChange} />
                </div>
                <div className='input_group'>
                    <label htmlFor='dateProd'>Дата поступления в пункт: </label>
                    <input type='date' value={dateProd} name='dateProd' onChange={this.handleInputChange} />
                </div>
                <button>Добавить</button>
            </form>
        )
    }
}

export default ItemForm;