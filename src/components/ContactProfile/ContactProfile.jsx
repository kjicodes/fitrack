import './ContactProfile.css';
import Card from 'react-bootstrap/Card';
import ContactLogo from '../../woman.png';
import ContactGithub from '../../github.png';

export default function ContactProfile() {
  return (
    <div className="ContactProfile">
      <Card as="div" id="div1">
        <Card.Body as="div" id="div2">
          <Card.Text>
            <img src={ContactLogo} alt="Contact Logo" />
          </Card.Text>
          <Card.Title>
            <h3>Kateleen Issa</h3>
          </Card.Title>
          <Card.Text as="p">Founder & Lead Developer</Card.Text>
          <Card.Text>
            <a href="https://github.com/kjicodes" target="_blank">
              <img id="contact-github" src={ContactGithub} alt="Contact Github" />
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
