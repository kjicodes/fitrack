import './ContactProfile.css';

import ContactLogo from '../../woman.png';
import ContactGithub from '../../github.png';

export default function ContactProfile() {
  return (
    <div className="card">
      <div id="profile-logo">
        <img src={ContactLogo} alt="Contact Logo" draggable={false} />
      </div>
      <div className="card-content">
        <span className="card-title">Kateleen Issa</span>
        <p>Founder & Lead Developer</p>
        <div id="link-github">
          <a href="https://github.com/kjicodes" target="_blank" rel="noreferrer">
            <img id="contact-github" src={ContactGithub} alt="Contact Github" draggable={false} />
          </a>
        </div>
      </div> 
    </div>
  )
}
