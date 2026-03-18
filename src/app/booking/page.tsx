'use client'

import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { useDispatch } from "react-redux"
import { addBooking } from "@/redux/features/bookSlice"
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface";
export default function Booking(){

    const urlParams = useSearchParams()
    const vid = urlParams.get('id')
    const name = urlParams.get('name')

    const [pickupDate, setPickupDate] = useState<Dayjs | null>(null)
    const [place , setPlace] = useState('Bloom')
    const [nameLastname, setName] = useState("")
    const [tel, setTel] = useState("")  
    
    const dispatch = useDispatch<AppDispatch>()

     const handleSubmit = () => {

    if(!nameLastname || !tel || !pickupDate){
        alert("Please fill all fields")
        return
    }

    dispatch(addBooking({
        nameLastname,
        tel,
        venue: place,
        bookDate: pickupDate.format("YYYY-MM-DD")
    }))

    alert("Booking confirmed!")
}

    return(
        <main className="w-[100%] flex flex-col items-center gap-4">

            <div className="font-bold text-2xl">Venue Booking</div>
            <div className=" text-xl">Venue : {name} </div>

            <div className="flex flex-col gap-4 w-full max-w-md">
                <TextField 
                variant="standard" 
                label="Name-Lastname" 
                name="Name-Lastname"
                onChange={(e)=>setName(e.target.value)}
                />

                <TextField 
                variant="standard" 
                label="Contact-Number" 
                name="Contact-Number"
                onChange={(e)=>setTel(e.target.value)}
                />

                <DateReserve 
                    onDateChange={(value:Dayjs)=>{setPickupDate(value)}}  
                    onLocationChange={(value:string)=>{setPlace(value)}}
                    />
            </div>

            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" 
                name="Book Venue"
                onClick={handleSubmit} >
                Book Venue
            </button>

        </main>
    );
}