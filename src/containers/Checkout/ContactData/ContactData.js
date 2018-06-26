import React, { Component } from 'react';

import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
  state = {
    name:'',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter you Contact Data</h4>
        <form>
          <input type="text" name="" placeholder="Your Name"/>
          <input type="email" name="" placeholder="Your Mail"/>
          <input type="text" name="" placeholder="Street"/>
          <input type="text" name="" placeholder="Postal Code"/>
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;