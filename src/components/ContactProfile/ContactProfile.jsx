import './ContactProfile.css';

import ContactLogo from '../../woman.png';
import ContactGithub from '../../github.png';

export default function ContactProfile() {
  return (
    <div class="card">
      <img src={ContactLogo} alt="Contact Logo" />
      <div class="card-content">
        <span class="card-title">Kateleen Issa</span>
        <p>Founder & Lead Developer</p>
        <div id="link-github">
          <a href="https://github.com/kjicodes" target="_blank" rel="noreferrer">
            <img id="contact-github" src={ContactGithub} alt="Contact Github" />
          </a>
        </div>
      </div> 
    </div>
  )
}
