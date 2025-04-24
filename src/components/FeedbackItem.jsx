
import Card from './shared/Card'
function FeedbackItem( {item } ) {
  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}

// Set default props
FeedbackItem.defaultProps = {
  item: {
    rating: "0",      // Default rating
    text: "No feedback provided"  // Default text
  }
}


export default FeedbackItem
