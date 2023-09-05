import NavBar from "../../components/NavBar"
import Header from '../[slug]/components/Header'
import Images from './components/Images'
import Description from "./components/Description"
import Rating from "./components/Rating"
import RestaurantNavBar from "./components/RestaurantNavBar"
import Title from "./components/Title"
import Reviews from "./components/Reviews"
import ReservationCard from "./components/ReservationCard"

export default function RestaurantDetailsPage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <Header />
        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavBar />
            <Title />
            <Rating />
            <Description />
            <Images />
            <Reviews />
          </div>
          <div className="w-[27%] relative text-reg">
            <ReservationCard />
          </div>
        </div>
        {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */} {/* RESERVATION
    CARD PORTION */}
      </main>
    </main>

  )
}
