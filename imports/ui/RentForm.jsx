import React from 'react';

import {Rents} from "../api/sportrent";
import Select from "react-select";

class RentForm extends React.Component{
    state = {
        userFN: '',
        userLN: '',
        number: null,
        rentStart: new Date().toISOString().split('T')[0],
        rentEnd: '-'
    };

    clearForm = () => {
      this.setState({
          userFN: '',
          userLN: '',
          number: null,
          rentStart: new Date().toISOString().split('T')[0],
          rentEnd: '-'
      });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {userFN, userLN, number, rentStart, rentEnd} = this.state;

        const trueNumber = number.value;

        Rents.insert({userFN, userLN, number: trueNumber, rentStart, rentEnd});

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

    getOptions = (items) => {
         return items.map((item)=>{
             const {number, name} = item;
             const option = {
                 value: number,
                 label: `${name} ${number}`
             };
             return option;
         })
    };

    handleSelect = (number) => {
        this.setState({number})
    };

    render() {
        const {userFN, userLN, number, rentEnd, rentStart} = this.state;
        const options = this.getOptions(this.props.items);
        console.log(options);
        return (
            <form className='newRent' onSubmit={this.handleSubmit}>
                <div className='input_group'>
                    <label htmlFor='userFN'>Введите имя:</label>
                    <input type='text' name='userFN' value={userFN} onChange={this.handleInputChange} />
                </div>
                <div className='input_group'>
                    <label htmlFor='userLN'>Введите фамилию:</label>
                    <input type='text' name='userLN' value={userLN} onChange={this.handleInputChange} />
                </div>
                <div className='input_group'>
                    <label htmlFor='name'>Наименование: </label>
                    <Select
                        onChange={this.handleSelect}
                        value={number}
                        options={options}
                    />
                </div>
                <div className='input_group'>
                    <label htmlFor='rentStart'>Дата выдачи: </label>
                    <input
                        type='date'
                        value={rentStart}
                        name='rentStart'
                        onChange={this.handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                    />
                </div>
                <button>Добавить</button>
            </form>
        )
    }
}

export default RentForm;