import './ContactForm.css';
import Card from 'react-bootstrap/Card';

export default function ContactForm() {

  return (
    <div className="Contact">
      <div className="Section">
        <Card>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>
              <h3>Kateleen Issa</h3>
            </Card.Title>
            <Card.Text>
              <p>Founder | Software Developer</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="Section">
        <h2>Contact Us</h2>
        <form>
          <input 
            name="name"
            type="text"
            placeholder="Enter Name"
          />
          <input
            name="email"
            type="text"
            placeholder="Enter Email"
          />
          <input 
            name="message"
            type="text"
            placeholder="Enter Message"
          />
        </form>
      </div>
    </div>
  )
};
