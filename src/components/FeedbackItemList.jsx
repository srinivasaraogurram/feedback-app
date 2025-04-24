
import FeedbackItem from "./FeedbackItem"

function FeedbackItemList( { feedback } ) {
  console.log("feedback", feedback)
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
      {
        feedback.map((item) => (
          <FeedbackItem key={item.id} item={item}></FeedbackItem>
          )
       )
      }
    </div>
  )
}




export default FeedbackItemList
