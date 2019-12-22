import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';

import {Rents} from "../api/sportrent";
import {Items} from '../api/items'
import Rent from './Rent';
import RentForm from "./RentForm";




class RentList extends React.Component{

    renderRents = () => {
        const {rents} = this.props;
        return rents.map((rent)=>{
            return (<Rent key={rent._id} rent={rent} />)
        })
    };



    render() {
        const { items } = this.props;
        return (
            <div>
                <RentForm items={ items } />
                {this.renderRents()}
            </div>
        )
    }
}

export default withTracker(()=>{
    return{
        rents: Rents.find({}).fetch(),
        items: Items.find({}).fetch()
    };
})(RentList);
