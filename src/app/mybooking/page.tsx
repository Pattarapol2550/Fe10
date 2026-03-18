import BookingList from "@/components/BookingList"

export default function MyBookingPage(){
    return(
        <main className="p-5">
            <h1 className="text-2xl font-bold mb-4">My Booking</h1>
            <BookingList />
        </main>
    )
}