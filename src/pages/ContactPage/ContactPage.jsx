import { Component } from 'react';
import './ContactPage.css';

import ContactProfile from '../../components/ContactProfile/ContactProfile';
import ContactForm from '../../components/ContactForm/ContactForm';

export default class ContactPage extends Component {

  state = {
    contacts: []
  };

  getContacts = async () => {
    await fetch("/api")
    .then(res => res.json())
    .then(messages => this.setState({ messages }))
  };

  componentDidMount() {
    this.getContacts()
  }

  render() {
    return (
      <div className="ContactPage">
        <div className="ContactSections">
          <ContactProfile />
        </div>
        <div className="ContactSections">
          <ContactForm getContacts={this.getContacts} />
        </div>
      </div>
    )
  }
};
