import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        THE GENERICS
        <li className="footer-icons">
          <a href="https://www.youtube.com">
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
              alt="youtube"
              className="photo"
            ></img>
          </a>
          <span className="footer-icons">
          <a href="https://accounts.spotify.com/en/login">
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png"
              alt="spotify"
              className="photo"
            ></img>
          </a>
        </span>
        <span className="footer-icons">
          <a href="https://www.facebook.com/">
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png"
              alt="yfacebook"
              className="photo"
            ></img>
          </a>
        </span>
        </li>
       
       
      </div>
    </footer>
  );
};

export default Footer;
