import React from 'react';

import {Rents} from '../api/sportrent';


class Rent extends React.Component{

    closeRent = () => {
        Rents.update(this.props.rent._id, {
            $set: { rentEnd: new Date().toISOString().split('T')[0] }
        })
    };

    deleteRecord = () => {
        Rents.remove(this.props.rent._id);
    };

    render() {
        const {userFN, userLN, number, rentStart, rentEnd} = this.props.rent;
        return(
            <div className='block'>
                <div>Имя: {userFN}</div>
                <div>Фамилия: {userLN}</div>
                <div>Инвентарный номер снаряжения: {number}</div>
                <div>Начало проката: {rentStart}</div>
                <div>Дата сдачи: {rentEnd}</div>
                <div>
                    {rentEnd==='-' && (<button onClick={this.closeRent}>Сдать предмет</button>)}
                    <button onClick={this.deleteRecord}>Удалить запись</button>
                </div>
            </div>
        )
    }
}

export default Rent;