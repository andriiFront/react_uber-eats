import React, { Component } from 'react';
import { Input } from '../Input/Input';

export class Header extends Component {
  state = {
    adress: '',
    time: '',
    search: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    const {
      adress,
      time,
      search,
    } = this.state;

    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <img src="./images/logo.svg" alt="header" />
            <div className="header__delivery-info">
              <Input
                name="adress"
                value={adress}
                onChange={this.handleChange}
                placeholder="Address"
                iconUrl="./images/place.svg"
              />
              <Input
                name="time"
                value={time}
                onChange={this.handleChange}
                placeholder="Time"
                type="time"
              />
            </div>
            <Input
              name="search"
              value={search}
              onChange={this.handleChange}
              placeholder="Search"
              iconUrl="./images/search.svg"
              className="header__search"
            />
            <a
              className="header__link"
              href="sign-in"
            >
              Sign In
            </a>
          </div>
        </div>
      </header>
    );
  }
}
