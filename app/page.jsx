'use client'
import Moviesformat from "@/components/MoviesFormat";
import axios from "axios";
import { useEffect, useState } from "react";

const CategoriesPage = () => {

  const [Tarjets, setTarjets] = useState([])

  useEffect(() => {

    const randomTarjets = async () => {
      try {
        const res = await axios.get('/api/Tarjet')
        console.log('crocodile', res.data)
        setTarjets(res.data)
      } catch (error) {
        console.log('errorb', error.message)
      }
    }

    randomTarjets()
  }, [])



  return (
    <section className="flex flex-col gap-y-10  text-white mb-48 pt-20 ">

      {Tarjets && (
        <Moviesformat tarjet={Tarjets} />
      )}


      <div className="flex flex-col items-center gap-10 mt-20 w-full bg-purple-4 p-10">
        <h1 className="text-heading1-bold text-purple-1">About</h1>
        <div className="flex max-lg:flex-col gap-10">
          <div className="flex flex-col justify-center ">
            <h1 className="text-body-bold text-neutral-200 ">More</h1>
            <p className="flex max-w-lg  text-neutral-400   ">anime, series, mov an anime, series, movies and clips recommendationsime, series, movies and clips recommendationsies and clips recommendations anime, series, movies and clips recommendationsanime, series, movies and clips recommendationsanime, series, movies and clips recommendations </p>
          </div>
          <div>
            <img className="rounded-xl drop-shadow-xl" src="https://i.ibb.co/gDc32hX/demon2.gif" alt="" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default CategoriesPage
