import { PayloadAction } from '@reduxjs/toolkit'
import { layoutFeaturesInit } from './types'

export const reducers = {

  toggleAside(state: layoutFeaturesInit) {
    state.asideStatus = !state.asideStatus
  },

  setValue(state: layoutFeaturesInit, action: PayloadAction<{ value: string }>) {
    state.searchValue = action.payload.value
    state.activeFilter = false
  },

  activeSearch(state: layoutFeaturesInit) {
    state.activeFilter = true
  },

  cancelSearch(state: layoutFeaturesInit) {
    state.activeFilter = false
    state.searchValue = ''
  },

}

