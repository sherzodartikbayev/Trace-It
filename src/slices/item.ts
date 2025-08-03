import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	error: 'error',
	items: [],
	itemDetail: null,
}

const itemSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {
		itemFetchingStart: state => {
			state.isLoading = true
		},
		itemFetchingSuccess: (state, action) => {
			state.isLoading = false
			state.items = action.payload
		},
		itemFetchingFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		createItemStart: state => {
			state.isLoading = true
		},
		createItemSuccess: (state, action) => {
			state.isLoading = false
			state.items = action.payload
		},
		createItemFailure: (state, action) => {
			;(state.isLoading = false), (state.error = action.payload)
		},
		deleteItemStart: state => {
			state.isLoading = true
		},
		deleteItemSuccess: state => {
			state.isLoading = false
		},
		deleteItemFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const {
	itemFetchingStart,
	itemFetchingSuccess,
	itemFetchingFailure,
	createItemStart,
	createItemSuccess,
	createItemFailure,
	deleteItemStart,
	deleteItemSuccess,
	deleteItemFailure,
} = itemSlice.actions
export default itemSlice.reducer
