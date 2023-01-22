// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isAnswerShow: false}

  renderShowAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isAnswerShow} = this.state

    if (isAnswerShow) {
      return (
        <div>
          <hr className="line" />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  getAnswer = () => {
    this.setState(preState => ({isAnswerShow: !preState.isAnswerShow}))
  }

  renderImg = () => {
    const {isAnswerShow} = this.state
    const image = isAnswerShow
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

    const altText = isAnswerShow ? 'minus' : 'plus'

    return (
      <button className="btn" type="button" onClick={this.getAnswer}>
        <img src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="list">
        <div className="question-card">
          <div className="QA">
            <h3>{questionText}</h3>
            {this.renderShowAnswer()}
          </div>
          {this.renderImg()}
        </div>
      </li>
    )
  }
}

export default FaqItem
