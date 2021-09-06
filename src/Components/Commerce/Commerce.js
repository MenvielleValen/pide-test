import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Db from '../../Database/Test_Data.json'
import './Commerce.scss'
import Load from '../../Assets/img/load.jpg'

export default function Commerce() {

    const [load, setload] = useState(false)
    const commerce = Db.Comercio[0];

    

    return (
        <Link to={"/comercios/all/"+commerce.idComercio} className="commerce-container">
            <div  className="img-container">
                <img loading="lazy" onLoad={()=>{setload(true)}} className={load===true && "fade"} src={load ? commerce.imagenComercio : Load} alt={commerce.nombreComercio}/>
            </div>
            <div  className="info-container">
                <h3>{commerce.nombreComercio}</h3>
                <p>{commerce.direccionComercio}</p>
                <div className="category-container">
                {
                    Db.Categorias.map((element,i)=>{
                        for(let i=0; i < commerce.idCategoria.length; i++){
                            if(element.idCategoria == commerce.idCategoria[i]){
                                
                                return(
                                        <p key={"category"+i} className="category">{element.nombreCat}</p>

                                )
                            }
                        }
                    })
                }
                </div>           
            </div>
        </Link>
    )
}