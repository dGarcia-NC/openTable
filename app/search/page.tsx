import Header from "../search/components/Header";
import RestaurantCard from "../search/components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

export default function SearchPage() {
    return (
        <>
            <Header />
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <SearchSideBar />
                <div className="w-5/6">
                    <RestaurantCard />
                </div>
            </div>
        </>
    )
}
