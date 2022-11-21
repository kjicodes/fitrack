import { Component } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';

export default class ContactPage extends Component {

  state = {
    messages: []
  }

  render() {
    return (
      <div className="ContactPage">
        <ContactForm />
      </div>
    )
  }
};
