// Write your code here.

import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="app">
      <div className="faq-container">
        <h1>FAQs</h1>
        <div className="faq-card">
          <ul>
            {faqsList.map(eachFaq => (
              <FaqItem faqDetails={eachFaq} key={eachFaq.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Faqs
