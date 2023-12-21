// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isTrue: false,
    showFirstNameError: false,
    showLastNameError: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isTrue: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isTrue: false,
      })
    }
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onOpenSubmitForm = () => {
    const {
      showFirstNameError,
      showLastNameError,
      firstName,
      lastName,
    } = this.state
    const firstClassName = showFirstNameError
      ? 'input-error-first-name'
      : 'input-first-name'

    const secondClassName = showLastNameError
      ? 'input-error-first-name'
      : 'input-first-name'

    return (
      <form className="form-filling-container" onSubmit={this.onSubmitForm}>
        <div className="inputs-content">
          <label className="input-label" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstName"
            className={firstClassName}
            onChange={this.onChangeFirstName}
            placeholder="First Name"
            value={firstName}
            onBlur={this.onBlurFirstName}
          />
          {showFirstNameError && <p className="error-msg"> Required </p>}
          <label className="input-label" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            type="text"
            id="lastName"
            className={secondClassName}
            onChange={this.onChangeLastName}
            placeholder="Last Name"
            value={lastName}
            onBlur={this.onBlurLastName}
          />
          {showLastNameError && <p className="error-msg"> Required </p>}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  onClickAnotherResponse = () => {
    this.setState(prevState => ({
      isTrue: !prevState.isTrue,
      firstName: '',
      lastName: '',
    }))
  }

  onSubmittedForm = () => (
    <div className="submit-form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="submit-right-image"
      />
      <p className="submitted-text"> Submitted Successfully </p>
      <button
        className="submit-another-response"
        type="submit"
        onClick={this.onClickAnotherResponse}
      >
        {' '}
        Submit Another Response{' '}
      </button>
    </div>
  )

  render() {
    const {isTrue} = this.state
    return (
      <div className="registration-form-container">
        <h1 className="registration-heading"> Registration </h1>
        {!isTrue && this.onOpenSubmitForm()}
        {isTrue && this.onSubmittedForm()}
      </div>
    )
  }
}

export default RegistrationForm
