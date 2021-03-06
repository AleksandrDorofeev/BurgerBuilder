import React, { Component } from 'react';

import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios';

class ContactData extends Component {
  state = {
    name:'',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault()
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Alex",
        address: {
          zipCode: 117,
          country: "rus"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false})
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({loading: false})
      })
  }

  render() {
    let form = (
      <form>
          <input className="classes.Input" type="text" name="" placeholder="Your Name"/>
          <input className="classes.Input" type="email" name="" placeholder="Your Mail"/>
          <input className="classes.Input" type="text" name="" placeholder="Street"/>
          <input className="classes.Input" type="text" name="" placeholder="Postal Code"/>
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
    );
    if(this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter you Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;