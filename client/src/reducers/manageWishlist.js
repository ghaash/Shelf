export default function manageWishlist(state = {
  wishlists: [],
}, action) {
  switch (action.type) {
    case 'ADD_WISHLIST':
      return { wishlists: state.wishlists.concat(action.wishlist.text) };
 
    default:
      return state;
  }
}