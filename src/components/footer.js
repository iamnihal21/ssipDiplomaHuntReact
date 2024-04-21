import React from 'react';
import '../style/footer.css'
import '../style/CommonSecMedia.css'

function Footer() {
  return (
    <footer>
      <p>
        Made by{' '}
        <a href="/">Nihal <i className="fa-solid fa-music"></i></a> |{' '}
        <a href="/">Satyajit <i className="fa-solid fa-gamepad"></i></a> |{' '}
        <a href="/">Pushpak <i className="fa-brands fa-apple"></i></a>
      </p>
    </footer>
  );
}

export default Footer;
