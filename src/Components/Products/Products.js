import React, { useState } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Load from '../../Assets/img/load.jpg'
import Db from '../../Database/Test_Data.json'
import './Products.scss'

//Components
import ViewProducts from '../ViewProducts/ViewProducts';
import Footer from '../Footer/Footer';

export default function Products() {

    const { comerid } = useParams();
    const [load, setLoad] = useState(false)
    let commerce = "";


    ///Funcion que filtra y busca el comercio al que se ha clickeado
    ///El parametro que toma como ref es el ID del comercio obtenido mediante url
    const searchCommerce = () => {

        commerce = Db.Comercio.filter(x => x.idComercio == comerid);

    }

    searchCommerce();

    return (
        <div className="container">
            <div className="banner-container">
                <img loading="lazy" onLoad={() => { setLoad(true) }} className={load ? "fade" : ""} src={load ? commerce[0].bannerComercio : Load} alt="" />
            </div>
            <section className="products-container">
                <Router>
                    <nav className="nav-container">
                        <ul>
                            <NavLink key={"linkall"} exact activeClassName="active" className="link" to={"/comercios/all/" + commerce[0].idComercio}><li key={"categoryall"} className="category">Todos</li></NavLink>
                            {
                                Db.Categorias.map((element, i) => { //Busca las categorias del comercio para colocarlas en el menu de navegación
                                    for (let i = 0; i < commerce[0].idCategoria.length; i++) {
                                        if (element.idCategoria === commerce[0].idCategoria[i]) {

                                            return (
                                                <NavLink key={"link" + i} activeClassName="active" className="link" to={"/comercios/" + commerce[0].idCategoria[i] + "/" + commerce[0].idComercio}><li key={"category" + i} className="category">{element.nombreCat}</li></NavLink>
                                            )
                                        }

                                    }

                                })
                            }
                            <NavLink key={"linkcombo"} activeClassName="active" className="link" to={"/comercios/102/" + commerce[0].idComercio}><li key={"categorycombos"} className="category">Combos</li></NavLink>
                        </ul>
                    </nav>
                    <Route exact path="/comercios/:id/:comerid" component={ViewProducts} />
                </Router>
            </section>
            <Footer />
        </div>
    )
}
