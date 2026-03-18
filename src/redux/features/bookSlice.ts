import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type BookState = {
    bookItems : BookingItem[]
}

const initialState : BookState = {bookItems:[]}

export const bookSlice = createSlice({
    name:"book",
    initialState,
    reducers : {
        addBooking: (state, action: PayloadAction<BookingItem>) => {

    const newBooking = action.payload

    const index = state.bookItems.findIndex(obj =>
        obj.venue === newBooking.venue &&
        obj.bookDate === newBooking.bookDate
    )

    if(index !== -1){
        
        state.bookItems[index] = newBooking
    } else {
        
        state.bookItems.push(newBooking)
    }
},
        removeBooking: (state, action: PayloadAction<BookingItem>) => {

        const target = action.payload

        const remainItem = state.bookItems.filter(obj =>
            !(
                obj.nameLastname === target.nameLastname &&
                obj.tel === target.tel &&
                obj.venue === target.venue &&
                obj.bookDate === target.bookDate
            )
        )

        state.bookItems = remainItem
        }
        
    }
})

export const {addBooking, removeBooking} =bookSlice.actions
export default bookSlice.reducer