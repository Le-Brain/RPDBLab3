import React from 'react';
import Select from "react-select";

import { Hardwares } from '../api/hardwares';

const optionsfirst = [
    {value: 'PC', label: 'PC'},
    {value: 'Laptop', label: 'Laptop'},
    {value: 'Phone', label: 'Phone'},
    {value: 'Tablet', label: 'Tablet'},
    {value: 'Server', label: 'Server'},
];

const optionssecond = [
    {value: 'SNMP', label: 'SNMP'},
    {value: 'SSH', label: 'SSH'},
    {value: 'Telnet', label: 'Telnet'},
    {value: 'Cifs', label: 'Cifs'},
]

class HardwareForm extends React.Component{

    state = {
        type: optionsfirst[0],
        location: "",
        ipaddress: [],
        macaddress: [],
        services: ""
    };

    clearForm = () => {
        this.setState({
            type: optionsfirst[0],
            location: "",
            ipaddress: [],
            macaddress: [],
            services: ""
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { type, location, ipaddress, macaddress, services } = this.state;
        const number = 1+parseInt(this.props.lastNumber, 10);
        Hardwares.insert({number, type: type.value, location: location, ipaddress: ipaddress, macaddress: macaddress, services: services});
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

    handleSelectType = (type) =>{
        this.setState({type})
    };

    handleSelectServices = (services) => {
        this.setState({services});
    };

    render() {
        const {type, location, ipaddress, macaddress, services} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <div className='input_search'>
                    <label htmlFor='number'>Номер оборудования: </label>
                    <input className="o-input" type='number' value={1+parseInt(this.props.lastNumber,10)} name='number' disabled={true} />
                </div>
                <div className='input_group'>
                    <label htmlFor='type'>Тип оборудования: </label>
                    <Select
                        onChange={this.handleSelectType}
                        value={type}
                        options={optionsfirst}
                    />
                </div>
                <div className='input_search'>
                    <label htmlFor='location'>Расположение: </label>
                    <input className="o-input" type='text' value={location} name='location' onChange={this.handleInputChange} />
                </div>
                <div className='input_search'>
                    <label htmlFor='ipaddress'>IP-address: </label>
                    <input className="o-input" type='text' value={ipaddress} name='ipaddress' onChange={this.handleInputChange} />
                </div>
                <div className='input_search'>
                    <label htmlFor='macaddress'>MAC-address: </label>
                    <input className="o-input" type='text' value={macaddress} name='macaddress' onChange={this.handleInputChange} />
                </div>
                <div className='input_search'>
                    <label htmlFor='services'>Поддерживаемые сервисы: </label>
                    <input className="o-input" type='text' value={services} name='services' onChange={this.handleInputChange} />
                </div>
                <button className="o-button-add">Добавить оборудование</button>
            </form>
        )
    }
}

export default HardwareForm;