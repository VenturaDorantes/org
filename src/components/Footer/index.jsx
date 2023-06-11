import './footer.css'

const Footer = () => {

    return (
        <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
            <div className="redes">
                <a href="#">
                    <img src="/img/facebook.png" alt="Facebook" />    
                </a>
                <a href="#">
                    <img src="/img/twitter.png" alt="Twitter" />    
                </a>
                <a href="#">
                    <img src="/img/instagram.png" alt="Instagram" />    
                </a>
            </div>
            <img src="/img/Logo.png" alt="org" />
            <strong>Desarrollador por <br/> Ventura Dorantes</strong> 
        </footer>
    );
}

export default Footer;