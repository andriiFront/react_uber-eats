import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export class Input extends PureComponent {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const {
      iconUrl,
      value,
      onChange,
      type,
      placeholder,
      name,
      className,
    } = this.props;

    const { isFocused } = this.state;

    const rootClass = cx('control', {
      'control--focused': isFocused,
      [className]: !!className,
    });

    return (
      <div className={rootClass}>
        {!!iconUrl && (
          <img
            src={iconUrl}
            alt={placeholder}
            className="control__icon"
          />
        )}

        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          name={name}
          className="control__input"
          placeholder={placeholder}
        />
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  iconUrl: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
  className: '',
};
