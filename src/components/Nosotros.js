
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWallet,faChessKnight,faPenRuler,faSatelliteDish,faCheckDouble,faFolderTree} from '@fortawesome/free-solid-svg-icons'

export default function Nosotros(){



    return(
        <div className="sect-nosotros" id='nosotros'>
            <h1>NOSOTROS</h1>
            <div className="nosotros-contint">
                <div className="sing-nosotros">
                    <div className='sing-logo'>
                        <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon>
                    </div>
                    <div className='sing-text'>
                        <h2>CONECTA TU BILLETERA</h2>
                        <p>Usa Metamask para unir tu billetera a nuestra app.</p>
                    </div>
                </div>
                <div className="sing-nosotros">
                    <div className='sing-logo'>
                        <FontAwesomeIcon icon={faChessKnight}></FontAwesomeIcon>
                    </div>
                    <div  className='sing-text'>
                        <h2>RECIBI TUS PROPIOS NFTS</h2>
                        <p>Inverti en tus nfts favoritos en una sola plataforma.</p>
                    </div>
                </div>
                <div className="sing-nosotros">
                    <div className='sing-logo'>
                    <FontAwesomeIcon icon={faSatelliteDish}></FontAwesomeIcon>
                    </div>
                    <div  className='sing-text'>
                        <h2>ELEGI TU MERCADO PARA VENDER</h2>
                        <p>Subi tus cryptos y elegi tu precio.</p>
                    </div>
                </div>
                <div className="sing-nosotros">
                    <div className='sing-logo'>
                    <FontAwesomeIcon icon={faPenRuler}></FontAwesomeIcon>
                    </div>
                    <div  className='sing-text'>
                        <h2>SELECCIONA TU CANTIDAD</h2>
                        <p>Descubri tu cripto favorita y empeza tu colleccion.</p>
                    </div>
                </div>
                <div className="sing-nosotros">
                    <div className='sing-logo'>
                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                    </div>
                    <div  className='sing-text'>
                        <h2>CONFIRMA TU TRANSACCION</h2>
                        <p>Recibi ganancias extra por vender en nuestra app</p>
                    </div>
                </div>
                <div className="sing-nosotros">
                    <div className='sing-logo'>
                        <FontAwesomeIcon icon={faFolderTree}></FontAwesomeIcon>
                    </div>
                    <div  className='sing-text'> 
                        <h2>CONTROLA TO COLLECCION</h2>
                        <p>Hacemos facil tu aventura en el mundo de las cryptos</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}