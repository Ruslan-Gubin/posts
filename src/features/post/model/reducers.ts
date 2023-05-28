import { PayloadAction } from '@reduxjs/toolkit'
import { PostFeaturesInit } from './types'

export const reducers = {
  setPage(state: PostFeaturesInit, action: PayloadAction<{ page: number }>) {
    state.page = action.payload.page
  },

  setTotalPosts(state: PostFeaturesInit, action: PayloadAction<{ total: number }>) {
    state.totalPosts = action.payload.total
  },

}