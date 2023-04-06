import img1footer from "../imgs/foooter1.png"
import img2footer from "../imgs/footer2.png"
import logoface from "../imgs/facelogo.png"
import logotwit from "../imgs/twitterlogo.png"
import logodisc from "../imgs/discordlogo.png"



export default function Footer(){
    
    
    return(
        <div className="sec-footer">
            <img src={img1footer} alt="" />
            <div className="cont-footer">
                <div className="footer-logos">
                    <img src={logodisc} alt="" />
                    <img src={logoface} alt="" />
                    <img src={logotwit} alt="" />
                </div>
                <div className="footer-text">
                    <h1>Privacy</h1>
                    <h1>Terms of Use</h1>
                </div>
            </div>
            <img src={img2footer} alt="" />
        </div>
    )
}