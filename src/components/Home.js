import ethimg from "../imgs/pngwing.com (15).png"
import bitimg from "../imgs/pngwing.com (16).png"
import carimg from "../imgs/pngwing.com (18).png"
import bnbimg from "../imgs/pngwing.com (19).png"
import { useEffect, useState } from 'react';

export default function Home(){

    const apikey = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Cbinancecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true"
    const [datos,setdatos] = useState("")
    
  
  
    const buscar = async()=> {
      const resultado = await fetch(apikey)
      const final = await resultado.json()
      return final
    } 

    useEffect(function(){
        buscar()
        .then(res => {
            setdatos(res)
        })
        
    },[])
    
    return(
        <div className="cont-home" id="inicio">
            <h1>INVESTIGA Y DESCUBRI</h1>
            <h2>CRIPTO MONEDAS</h2>
            <div className="home-criptos">
                <div className="home-sing-cripto">
                    <img src={bitimg} alt="" />
                    <h2>Bitcoin</h2>
                    {datos !== "" && <h3>${datos.bitcoin.usd}</h3>}
                </div>
                <div className="home-sing-cripto">
                    <img src={ethimg} alt="" />
                    <h2>Ethereum</h2>
                    {datos !== "" && <h3>${datos.ethereum.usd}</h3>}
                </div>
                <div className="home-sing-cripto">
                    <img src={bnbimg} alt="" />
                    <h2>Bnb</h2>
                    {datos !== "" && <h3>${datos.binancecoin.usd}</h3>}
                </div>
                <div className="home-sing-cripto">
                    <img src={carimg} alt="" />
                    <h2>Cardano</h2>
                    {datos !== "" && <h3>${Math.round(datos.cardano.usd*100)/100}</h3>}
                </div>
            </div>
        </div>
    )
}