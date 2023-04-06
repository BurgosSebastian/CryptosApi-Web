import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link';


export default function Nav(){

const [estilo, setestilo] = useState("")

function closemenu(){
    setestilo("")
}

const handleclick= () =>{

    if(estilo == ""){
        setestilo("show")
    } else setestilo("")

}

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

    return(
        <nav>
            <div className={`cont-nav ${estilo}`}>
                <h1>Burgos Crypto</h1>
                <ul>
                    <HashLink className='link' onClick={closemenu} scroll={el => scrollWithOffset(el)} to="#inicio"><li>Inicio</li></HashLink>
                    <HashLink className='link' onClick={closemenu} scroll={el => scrollWithOffset(el)} to="#mercado"><li>Mercado</li></HashLink>
                    <HashLink className='link' onClick={closemenu}  scroll={el => scrollWithOffset(el)} to="#nosotros"><li>Nosotros</li></HashLink>
                    <HashLink className='link' onClick={closemenu}  scroll={el => scrollWithOffset(el)} to="#unirse"><li>Unirse</li></HashLink>
                </ul>
                <FontAwesomeIcon onClick={handleclick} icon={faBars}></FontAwesomeIcon>
            </div>
        </nav>
    )
}