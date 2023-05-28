import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { getPostsThunk } from './thunk'
import { PostInitState  } from './types'


export const extraReducers = (builder: ActionReducerMapBuilder<PostInitState>) => {
	
	builder
		.addCase(getPostsThunk.pending, (state) => {
			state.error = null
			state.loading = true
		})
		.addCase(getPostsThunk.rejected, (state, action) => {
			if (action.payload) {
				state.error = action.payload
				state.loading = false
			}
		})
		.addCase(getPostsThunk.fulfilled, (state, action) => {
			state.error = null
			state.loading = false
			state.posts = action.payload
		})

	
}