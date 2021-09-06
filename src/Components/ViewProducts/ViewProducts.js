import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Db from '../../Database/Test_Data.json'
import './ViewProducts.scss'
//Components
import Product from '../Product/Product';



export default function ViewProducts() {

    const {id} = useParams();
    const [countProd, setCountProd] = useState(0);
    

    return (
        <div >
           
            <div className="viewproducts-container">
           
            {//Todos los productos
                id==="all"&&
                Db.Productos.map((element, i)=>{
                        
                        return(
                        
                            <Product key={"prod"+i} product={element}/>
                            
                        )
                    
                })

            }
            {//Divisióm de productos por categoría 
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
