import {
	AUTH_USER,
	SIGN_OUT,
	UPDATE_USER_PROFILE,
	USER_CHANGE_EMAIL,
	USER_ADD_TO_CART,
	PURCHASE_SUCCESS,
} from '../constants/userConstants';

let initialUserState = {
	data: {
		_id: null,
		email: null,
		name: null,
		history: [],
		verified: null,
	},
	auth: null,
	cart: [],
};

export default function userReducer(state = initialUserState, action) {
   switch(action.type) {
      default:
         return state;
   }
}