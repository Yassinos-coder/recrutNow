import {configureStore} from '@reduxjs/toolkit'
import OrdersReducer from './OrdersReducer'

const Store = configureStore({
    reducer: {
        OrdersReducer: OrdersReducer
    }
})

export default Store