import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'

function App() {
  return (
    <>
      <Header />
      <div className='container'>
      <FeedbackItem />
      <FeedbackItem item={{ rating:9, text:"this is sample text for feedback item"}}/>
      </div>
    </>
  )
}

export default App
