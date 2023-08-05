import Link from "next/link";
import Navbar from "../components/Navbar";
import Header from "./components/Header";

const Search = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-full">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        {/* SEARCH HEADER */}
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start text-black">
          {/* SEARCH SIDE BAR */}
          <div className="w-1/5">
            <div className="border-b pb-4">
              <h1 className="mb-2">Region</h1>
              <p className="uppercase text-reg">Toronto</p>
              <p className="uppercase text-reg">Ottawa</p>
              <p className="uppercase text-reg">Montreal</p>
              <p className="uppercase text-reg">Hamilton</p>
              <p className="uppercase text-reg">Kingston</p>
              <p className="uppercase text-reg">Niagara</p>
            </div>
            <div className="border-b pb-4 mt-3">
              <h1 className="mb-2">Cuisine</h1>
              <p className="uppercase text-reg">Italian</p>
              <p className="uppercase text-reg">Mexican</p>
              <p className="uppercase text-reg">Chinese</p>
            </div>
            <div className="mt-3 pb-4">
              <h1 className="mb-2">Price</h1>
              <div className="flex">
                <button className="border w-full text-reg  rounded-l p-2">
                  $
                </button>
                <button className="border-r border-t border-b w-full text-reg  p-2">
                  $$
                </button>
                <button className="border-r border-t border-b w-full text-reg  p-2 rounded-r">
                  $$$
                </button>
              </div>
            </div>
          </div>
          {/* SEARCH SIDE BAR */}
          <div className="w-5/6">
            {/* RESAURANT CAR */}
            <div className="border-b flex pb-5">
              <img
                src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
                alt=""
                className="w-44 rounded"
              />
              <div className="pl-5">
                <h2 className="text-3xl">Aiāna Restaurant Collective</h2>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <p className="ml-2 text-sm">Awesome</p>
                </div>
                <div className="mb-9">
                  <div className=" flex text-reg">
                    <p className="mr-4">$$$</p>
                    <p className="mr-4">Mexican</p>
                    <p className="mr-4">Ottawa</p>
                  </div>
                </div>
                <div className="text-red-600">
                  <a href="">View more information</a>
                </div>
              </div>
            </div>
            {/* RESAURANT CAR */}
          </div>
        </div>
      </main>
    </main>
  );
};

export default Search;
