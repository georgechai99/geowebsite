import React from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import linkedin from '../images/linkedin.svg';
import gmail from '../images/gmail.svg';

function Footer() {
    return (
        <footer class="footer">
            <div class="bottom">
                <div class="bottomWords">
      <p class="builtWith">Built with React.js and lots of love ❤️</p>
      </div>
        <div class="socialLinks">
          
  <a href="https://www.linkedin.com/in/george-chai/" target="_blank" rel="noreferrer">
      <img class="socialIcon" src={ linkedin } alt="linkedin icon"/>
  </a>

  <a href="mailto:gc498@cornell.edu" target="_blank" rel="noreferrer">
    <img class="socialIcon" src={ gmail } alt="email icon"/>
  </a>
  </div>
        </div>
    </footer>
    );
}

export default Footer;