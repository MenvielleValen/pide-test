import React from 'react'
import { useParams } from 'react-router'
import Db from '../../Database/Test_Data.json'
import './ViewProducts.scss'

//Components
import Product from '../Product/Product';



export default function ViewProducts() {

    const {id} = useParams(); //Recibe ID de categorias por parametros URL
    
    return (
        <div >
           
            <div className="viewproducts-container">
           
            {//Imprime todos los productos del comercio
                id==="all"&&
                Db.Productos.map((element, i)=>{
                        
                        return(
                        
                            <Product key={"prod"+i} product={element}/>
                            
                        )
                    
                })

            }
            {//Busca en todos los productos y los divide por categoria
        
                Db.Productos.map((element, i)=>{
                    if(element.idCategoria == id ){
                        return(
                        
                            <Product key={"prods"+i} product={element}/>
                            
                        )
                    }
                    
                })
            }
            </div>
        </div>
    )
}
