import React from 'react';

import { Hardwares } from '../api/hardwares'

class Hardware extends React.Component{

    deleteHardware = () => {
        Hardwares.remove(this.props.hardware._id);
    };

    render() {
        const {number, type, location, ipaddress, macaddress, services} = this.props.hardware;
        return(
            <div className='block'>
                <div><b>Номер оборудования:</b> {number}</div>
                <div><b>Тип оборудования:</b> {type}</div>
                <div><b>Расположение:</b> {location}</div>
                <div><b>IP-Address:</b> {ipaddress}</div>
                <div><b>MAC-Address:</b> {macaddress}</div>
                <div><b>Поддерживаемые службы:</b> {services}</div>
                <button className="o-button-delete" onClick={this.deleteHardware}>Удалить оборудование</button>
            </div>
        )
    }
}

export default Hardware;