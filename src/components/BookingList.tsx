'use client'

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/redux/store"
import { removeBooking } from "@/redux/features/bookSlice"
import { useAppSelector } from "@/redux/store"
export default function BookingList(){

    const bookings = useAppSelector((state: RootState) => state.bookSlice.bookItems)
    const dispatch = useDispatch()

    if(bookings.length === 0){
        return <div>No Venue Booking</div>
    }

    return(
        <>
        <div className="flex flex-col gap-4">
            {
                bookings.map((item, index)=>(
                    <div key={index} className="border p-3 rounded-md">

                        <div>Name: {item.nameLastname}</div>
                        <div>Tel: {item.tel}</div>
                        <div>Venue: {item.venue}</div>
                        <div>Date: {item.bookDate}</div>

                        <button
                            onClick={()=>dispatch(removeBooking(item))}
                            className="mt-2 bg-red-500 text-white px-2 py-1 rounded"
                            >
                            Cancel
                        </button>

                    </div>
                ))
            }
        </div>
            </>
    )
}