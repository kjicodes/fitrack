import { Component } from 'react';
import './ContactPage.css';

import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import ContactProfile from '../../components/ContactProfile/ContactProfile';
import ContactForm from '../../components/ContactForm/ContactForm';

export default class ContactPage extends Component {

  state = {
    contacts: []
  };

  getContacts = async () => {
    await fetch("/api/contact")
    .then(res => res.json())
    .then(messages => this.setState({ messages }))
  };

  componentDidMount() {
    this.getContacts()
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <div className="ContactPage">
          <div className="ContactSections">
            <ContactProfile />
          </div>
          <div className="ContactSections">
            <ContactForm getContacts={this.getContacts} />
          </div>
        </div>
      </div>
    )
  }
};
