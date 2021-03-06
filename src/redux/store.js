import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let store;

const initialState = {
  categories: [],
  products: [],
  productsCart: [],
  productsWishlist: []
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: payload,
      }
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: payload,
      }
    case 'ADD_TO_CART':
      return {
        ...state,
        productsCart: [
          ...(state.productsCart || []),
          payload
        ],
      }
    case 'ADD_TO_WISHLIST':
      const tmpProductsWishlist = [...(state.productsWishlist || []), payload];
      // uniq product wishlist by id
      const productsWishlist = tmpProductsWishlist.filter((product, i) => (
        tmpProductsWishlist.findIndex(e => e.id == product.id) == i
      ))
      return {
        ...state,
        productsWishlist
      }
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        productsWishlist: (state.productsWishlist || []).filter(product => (
          product.id != payload.id
        )),
      }
    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
