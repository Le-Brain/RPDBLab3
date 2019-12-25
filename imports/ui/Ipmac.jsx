import React from 'react';

import { Ipmacs } from '../api/ipmac';
import { Hardwares } from '../api/hardwares';

class Ipmac extends React.Component{

    deleteIpmac = () => {
        let currentHardware;
        this.props.hardwares.map(hardware=>{
            for (let i=0; i<hardware.ipaddress.length; i++) {
                if (hardware.ipaddress[i] === this.props.ipmac.ipaddress && hardware.number === this.props.ipmac.number) {
                    currentHardware = hardware;
                    if (currentHardware.ipaddress[i] == this.props.ipmac.ipaddress) {
                        currentHardware.ipaddress.splice(i,1);
                        Hardwares.update(currentHardware._id, {
                            $set: { ipaddress: currentHardware.ipaddress }
                        });
                    }
                }
            }
            for (let i=0; i<hardware.macaddress.length; i++) {
                if (hardware.macaddress[i] === this.props.ipmac.macaddress && hardware.number === this.props.ipmac.number) {
                    currentHardware = hardware;
                    if (currentHardware.macaddress[i] == this.props.ipmac.macaddress) {
                        currentHardware.macaddress.splice(i,1);
                        Hardwares.update(currentHardware._id, {
                            $set: { macaddress: currentHardware.macaddress }
                        });
                    }
                }
            }
        });
        Ipmacs.remove(this.props.ipmac._id);
    };

    render() {
        const { number, type, ipaddress, macaddress } = this.props.ipmac;
        return(
            <div className='block'>
                <div><b>Номер оборудования:</b> { number }</div>
                <div><b>Тип оборудования:</b> { type }</div>
                <div><b>IP ADDRESS:</b> { ipaddress }</div>
                <div><b>MAC ADDRESS:</b> { macaddress }</div>
                <div>
                    <button className="o-button-delete" onClick={this.deleteIpmac}>Удалить IP и MAC</button>
                </div>
            </div>
        )
    }
}

export default Ipmac;