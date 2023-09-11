import Images from './components/Images'
import Description from "./components/Description"
import Rating from "./components/Rating"
import RestaurantNavBar from "./components/RestaurantNavBar"
import Title from "./components/Title"
import Reviews from "./components/Reviews"
import ReservationCard from "./components/ReservationCard"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where:  {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  })

  if (!restaurant) {
    throw new Error()
  }

  return restaurant
}

export default async function RestaurantDetailsPage({params}: {params: {slug: string}}) {
  const restaurant = await fetchRestaurantBySlug(params.slug)
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug}/>
        <Title name={restaurant.name}/>
        <Rating />
        <Description description={restaurant.description}/>
        <Images images={restaurant.images}/>
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
      {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */} {/* RESERVATION
    CARD PORTION */}
    </>
  )
}
