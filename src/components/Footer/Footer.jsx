import './Footer.css';

function Footer() {
    return(
        <footer className="footer">
            <p className="footer__copyright">© 2025 Cole Essig</p>
            <div className="footer__links">
              <a href='https://www.linkedin.com/in/colepessig/'>
                <img 
                  src='src\assets\icons8-linkedin.svg' 
                  className='footer__links_linkedin' 
                  alt='LinkedIn logo'
                />
              </a>
              <a href='https://github.com/cole-essig'>
                <img 
                  src='src\assets\icons8-github.svg'
                  className='footer__links_github'
                  alt='Github Logo'
                />
              </a>
            </div>
        </footer>
    )
};

export default Footer;