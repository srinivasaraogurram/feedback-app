import Header from './components/Header'
import FeedbackItemList from './components/FeedbackItemList'
import FeedbackData  from './Data/FeedbackData'
import FeedbackNoData from './Data/FeedbackNoData'

function App() {
  return (
    <>
      <Header />
      <div className='container'>
      {/* <FeedbackItem /> } */ }
      { /* <FeedbackItem item={{ rating:9, text:"this is sample text for feedback item"}}/> */ }

      { /* FeedBack Item List with No Data */ }
      <FeedbackItemList feedback={FeedbackNoData}></FeedbackItemList>

     
      <div style={{ height: '20px' }}></div> {/* Line space */}
      <hr></hr>

      { /* FeedBack Item List with Data */ }
      <FeedbackItemList feedback={FeedbackData}></FeedbackItemList>
      </div>
    </>
  )
}

export default App
