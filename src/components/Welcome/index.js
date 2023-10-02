import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  renderSubscribeButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading"> Welcome </h1>
          <p className="para"> Thank you! Happy Learning </p>
          <button
            type="button"
            className="btn"
            onClick={this.renderSubscribeButton}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
