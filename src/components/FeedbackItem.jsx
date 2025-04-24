
function FeedbackItem( {item } ) {
  return (
      <div className='container'>
        <div className='num-display'>{item.rating}</div>
        <div className='text-display'>{item.text}</div>
      </div>
   
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
