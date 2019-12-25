import React from 'react';

import { Ipmacs } from "../api/ipmac";
import { Hardwares } from "../api/hardwares"; 
import Select from "react-select";

class IpmacForm extends React.Component{
    state = {
        number: '',
        type: '',
        ipaddress: '',
        macaddress: ''
    };

    clearForm = () => {
      this.setState({
          number: '',
          type: '',
          ipaddress: '',
          macaddress: ''
      });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { hardwares } = this.props;
        const {number, type, ipaddress, macaddress } = this.state;
        const trueNumber = number.value;
        Ipmacs.insert({ number: trueNumber, type, ipaddress, macaddress });
        let currentHardware;
        hardwares.map((hardware) => {
            if (hardware.number === trueNumber) currentHardware = hardware;
        });
        Hardwares.update(currentHardware._id, {
            $set: { ipaddress: [].concat(currentHardware.ipaddress, ipaddress) }
        });
        Hardwares.update(currentHardware._id, {
            $set: { macaddress: [].concat(currentHardware.macaddress, macaddress) }
        });
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

    getOptions = (hardwares) => {
         return hardwares.map((hardware)=>{
             const {number, type} = hardware;
             const option = {
                 value: number,
                 label: `${type} ${number}`
             };
             return option;
         })
    };

    handleSelect = (number) => {
        this.setState({number});
        console.log(number);
        const hardwares = this.props.hardwares;
        hardwares.map(item => {
            console.log(item.number);
            if (item.number=== number.value) this.setState({ type: item.type}); 
        });
        console.log(this.state);
    };

    render() {
        const { number, type, ipaddress, macaddress } = this.state;
        const options = this.getOptions(this.props.hardwares);
        console.log(options);
        return (
            <form className='newRent' onSubmit={this.handleSubmit}>
                <div className='input_group'>
                    <label htmlFor='name'>Наименование: </label>
                    <Select
                        onChange={this.handleSelect}
                        value={number}
                        options={options}
                    />
                </div>
                <div className='input_group'>
                    <label htmlFor='ipaddress'>Введите IP ADDRESS:</label>
                    <input type='text' name='ipaddress' value={ipaddress} onChange={this.handleInputChange} />
                </div>
                <div className='input_group'>
                    <label htmlFor='macaddress'>Введите MAC ADDRESS:</label>
                    <input type='text' name='macaddress' value={macaddress} onChange={this.handleInputChange} />
                </div>
                <button className="o-button-add">Добавить</button>
            </form>
        )
    }
}

export default IpmacForm;