import cuid from 'cuid';
export const cuidFn = cuid;


export default function manageRestaurants(
   state = {
      restaurants: [],
      reviews: []
   }, action) {
   console.log("reducer state from store (at start):", state)
   console.log("Action sent to reducer:", action)

   switch (action.type) {
      case "ADD_RESTAURANT":
         const newRestaurant = {
            text: action.text,
            id: cuid()
         }
         return {
            restaurants: [...state.restaurants, newRestaurant],
            reviews: [...state.reviews]
         }
      case "DELETE_RESTAURANT":
         return {
            restaurants: state.restaurants.filter(rest => rest.id !== action.id),
            reviews: state.reviews.filter(review => review.restaurantId !== action.id)
         }
      case "ADD_REVIEW":
         const newReview = {
            id: cuid(),
            text: action.review.text,
            restaurantId: action.review.restaurantId
         }
         return {
            restaurants: [...state.restaurants],
            reviews: [...state.reviews, newReview]
         }
      case "DELETE_REVIEW":
         return {
            restaurants: [...state.restaurants],
            reviews: state.reviews.filter(review => review.id !== action.id)
         }
      default:
         return state
   }
}