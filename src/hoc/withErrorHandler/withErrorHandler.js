import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Fragment/Fragment';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    componentWillMount() {
      this.reqInterseptor = axios.interceptors.request.use(request => {
        this.setState({error: null})
        return request;
      });
      this.resInterseptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error})
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterseptor);
      axios.interceptors.response.eject(this.resInterseptor);
    }

    errorConfirmHandler = () => {
      this.setState({error: null})
    }

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
}

export default withErrorHandler;
