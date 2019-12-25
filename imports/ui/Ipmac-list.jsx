import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';

import { Hardwares } from "../api/hardwares";
import { Ipmacs } from '../api/ipmac';
import Ipmac from './Ipmac';
import IpmacForm from "./IpmacForm";

class IpmacList extends React.Component{

    renderIpmacs = () => {
        const { ipmacs } = this.props;
        const { hardwares } = this.props;
        console.log(ipmacs);
        return ipmacs.map((ipmac)=>{
            return (<Ipmac key={ipmac._id} ipmac={ipmac} hardwares={hardwares} />)
        })
    };

    render() {
        const { hardwares } = this.props;
        return (
            <div>
                <IpmacForm hardwares={ hardwares } />
                {this.renderIpmacs()}
            </div>
        )
    }
}

export default withTracker(()=>{
    return{
        ipmacs: Ipmacs.find({}).fetch(),
        hardwares: Hardwares.find({}).fetch()
    };
})(IpmacList);
