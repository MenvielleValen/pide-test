import React from 'react'
import Db from '../../Database/Test_Data.json'
import './Commerces.scss'


//Components
import Commerce from '../Commerce/Commerce';
import Footer from '../Footer/Footer';

export default function Commerces() {

    return (
   
        <section className="container">
            <h3>Comercios adheridos</h3>
            <div className="commerces-container">
                <Commerce className="commerce"/>
            </div>
        </section>

       
    )
}
