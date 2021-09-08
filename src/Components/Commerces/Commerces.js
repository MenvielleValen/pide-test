import React from 'react'
import './Commerces.scss'

//Components
import Commerce from '../Commerce/Commerce';


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
