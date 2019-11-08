
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
    state = {
        restaurants: [],
        reviews: []
    }, action) {
        console.log("state from store", state)
        console.log("reducer action", action)
        switch (action.type) {
            case "ADD_RESTAURANT":
                const newRestaurant = {
                    text: action.text, 
                    id: cuidFn()
                }
                return {
                    restaurants: [...state.restaurants, newRestaurant],
                    reviews: [...state.reviews]
                }
            case "DELETE_RESTAURANT":
                return {
                    restaurants: state.restaurants.filter( restaurant => restaurant.id !== action.id),
                    reviews: state.reviews.filter(review => review.restaurantId !== action.id)
                }
            case "ADD_REVIEW":
                const newReview = {
                    id: cuidFn(),
                    text: action.review.text,
                    restaurantId: action.review.restaurantId
                }
                return {...state,
                    // restaurants: [...state.restaurants],
                    reviews: [...state.reviews, newReview]
                }
            case "DELETE_REVIEW":
                const reviews = state.reviews.filter(review => review.id !== action.id)
                return {...state, reviews
                    // restaurants: [...state.restaurants],
                    // review: state.reviews.filter(review => review.id !== action.id)
                }
            default:
                return state
        }

}
