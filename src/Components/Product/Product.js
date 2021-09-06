import React, {useState} from 'react'
import './Product.scss'
import {AiOutlineHeart, AiFillHeart, AiOutlineShareAlt} from 'react-icons/ai';
import {IoAddOutline, IoRemove} from'react-icons/io5';
import Load from '../../Assets/img/load.jpg'

export default function Product(params) {
    
    const [load, setLoad] = useState(false);
    const [liked, setliked] = useState(false)
    const {product} = params; 

    return (
        <div className="product-container">
           <div className="img-container">
                <img loading="lazy" onLoad={()=>{setLoad(true)}} className={load ? "fade" : undefined} src={load ? product.imagenProducto : Load} alt={product.nombreProducto}/>
           </div>
           <div className="info-container">
                <h4>{product.nombreProducto}</h4>
                <p>{product.descriProducto}</p>
                <div className="price"><p>$ {product.precioProducto}</p></div>
           </div>
           <div className="btn-container">
                <div className="btn-add">
                    <p><IoRemove/></p>
                    <p><IoAddOutline/></p>
                </div>
                <div className="btn-em">
                    <p>{liked ? <AiFillHeart className="liked" onClick={()=>{setliked(!liked)}}/> : <AiOutlineHeart onClick={()=>{setliked(!liked)}}/>}</p>
                    <p><AiOutlineShareAlt/></p>
                </div>
           </div>
        </div>
    )
}
