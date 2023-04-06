import { useEffect, useState } from "react"

export default function Tabla(){
    const listakey = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Ccardano%2Ctether%2Cdogecoin%2Csolana%2Cpolkadot%2Clitecoin%2Ctron%2Cchainlink%2Ccosmos%2Cuniswap%2Cravencoin%2Cergo&vs_currencies=usd&include_24hr_change=true"
    const [list,setList] = useState("")
    const nombres = ["Bitcoin","Ethereum","Bnb","Cardano","Tether","Dogecoin","Solana","Polkadot","Litecoin","Tron"]


    const makelist = async()=> {
        const resultado = await fetch(listakey)
        const lista = await resultado.json()

        
        return lista
      } 

    useEffect(function(){
        makelist()
        .then(res =>{
            const final =[res.bitcoin,res.ethereum,res.binancecoin,res.cardano,res.tether,res.dogecoin,res.solana,res.polkadot,res.litecoin,res.tron]
            setList(final)
        })
    },[])

    console.log(list)

    return(
        <div className="sect-tabla" id="mercado">
            <h1>Mercado Actualizado</h1>
            <div className="list-head">
                <h1>Moneda</h1>
                <h2>Precio</h2>
                <h3>24h Cambio</h3>
            </div>
            {list !=""&& list.map((ele,index)=>{
                return(
                    <div className="singlist">
                        <h2>{nombres[index]}</h2>
                        <h1>${Math.round(ele.usd*100)/100}</h1>
                        <h3>{Math.round(ele.usd_24h_change*100)/100}%</h3>
                    </div>
                )
            })
            }
        </div>
    )
}