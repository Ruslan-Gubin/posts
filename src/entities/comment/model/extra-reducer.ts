import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { getCommentsThunk } from './thunk'
import { CommentInitState  } from './types'


export const extraReducers = (builder: ActionReducerMapBuilder<CommentInitState>) => {
	
	builder
		.addCase(getCommentsThunk.pending, (state) => {
			state.loading = true
			state.error = null
		})
		.addCase(getCommentsThunk.rejected, (state, action) => {
			if (action.payload) {
				state.loading = false
				state.error = action.payload
			}
		})
		.addCase(getCommentsThunk.fulfilled, (state, action) => {
			state.loading = false
			state.error = null
			const newId = action.payload.postId
			state.comment[newId] = action.payload.data
		})

	
}