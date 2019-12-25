import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';

import { Hardwares } from '../api/hardwares'
import Hardware from "./Hardware";
import HardwareForm from "./Hardware-form";

class HardwareList extends React.Component{

    state = { filteripaddress: '', filtermacaddress: '', filtertype: '' };

    renderHardwares = () => {
        const { hardwares } = this.props;
        const { filteripaddress, filtermacaddress, filtertype } = this.state;
        let filteredHardwares = hardwares.filter(hardware=>{
            for (let i=0; i<hardware.ipaddress.length; i++) {
                if (hardware.ipaddress[i].toLowerCase().includes(filteripaddress.toLowerCase())) return hardware;
            }
        });
        filteredHardwares = filteredHardwares.filter(hardware=>{
            for (let i=0; i<hardware.macaddress.length; i++) {
                if (hardware.macaddress[i].toLowerCase().includes(filtermacaddress.toLowerCase())) return hardware;
            }
        });
        filteredHardwares = filteredHardwares.filter(hardware=>{
            return hardware.type.toLowerCase().includes(filtertype.toLowerCase());
        }); 
        return filteredHardwares.map((hardware)=>{
            return (<Hardware key={hardware._id} hardware={hardware} />)
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
        const { hardwares } = this.props;
        const lastNumber = hardwares.reduce((acc, item) => {
            if(acc < item.number){
                acc = item.number;
            }
            return acc;
        }, 0);
        const { filteripaddress, filtermacaddress, filtertype } = this.state;
        return (
            <div>
                <form onSubmit={(event => event.preventDefault())}>
                    <div className="input_search">
                        <label className="o-label-search" htmlFor='filteripaddress'>Поиск по IP Address</label>
                        <input placeholder="ex. 87.87.87.87" className="o-input" type='text' name='filteripaddress' value={filteripaddress} onChange={this.handleFilter} />
                    </div>
                </form>
                <form onSubmit={(event => event.preventDefault())}>
                <div className="input_search">
                    <label className="o-label-search" htmlFor='filtermacaddress'>Поиск по MAC Address</label>
                    <input placeholder="ex. 8b-8b-8b-8b-8b-8b" className="o-input" type='text' name='filtermacaddress' value={filtermacaddress} onChange={this.handleFilter} />
                </div>
                </form>
                <form onSubmit={(event => event.preventDefault())}>
                <div className="input_search">
                    <label className="o-label-search" htmlFor='filtertype'>Поиск по типу оборудования</label>
                    <input placeholder="ex. PC" className="o-input" type='text' name='filtertype' value={filtertype} onChange={this.handleFilter} />
                </div>
                </form>
                <HardwareForm lastNumber={lastNumber} />
                {this.renderHardwares()}
            </div>
        )
    }
}

export default withTracker(()=>{
    return{
        hardwares: Hardwares.find({}).fetch()
    }
})(HardwareList);