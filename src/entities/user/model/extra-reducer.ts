import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { getUserPostsThunk, getUserThunk } from './thunk'
import { UserInitState  } from './types'


export const extraReducers = (builder: ActionReducerMapBuilder<UserInitState>) => {
	
	builder
		.addCase(getUserThunk.pending, (state) => {
			state.error = null
			state.loading = true
		})
		.addCase(getUserThunk.rejected, (state, action) => {
			if (action.payload) {
				state.error = action.payload
				state.loading = false
			}
		})
		.addCase(getUserThunk.fulfilled, (state, action) => {
			state.error = null
			state.loading = false
			state.user = action.payload
		})

	builder
		.addCase(getUserPostsThunk.pending, (state) => {
			state.error = null
			state.loading = true
		})
		.addCase(getUserPostsThunk.rejected, (state, action) => {
			if (action.payload) {
				state.error = action.payload
				state.loading = false
			}
		})
		.addCase(getUserPostsThunk.fulfilled, (state, action) => {
			state.error = null
			state.loading = false
			state.posts = action.payload
		})

	
}