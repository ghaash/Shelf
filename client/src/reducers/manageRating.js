export default function manageReview(state = {
  reviews: [],
}, action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      return { reviews: state.reviews.concat(action.review.text) };
 
    default:
      return state;
  }
}