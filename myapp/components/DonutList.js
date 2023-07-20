"use client";

import React, { useState, useEffect } from "react";
import SingleDonut from "./SingleDonut";


const DonutList = () => {
    const [allDonuts, setAllDonuts] = useState([]);

    useEffect(() => {
      const fetchDonuts = async () => {
        try {
          const response = await fetch(`/api/donuts/`);
          const data = await response.json();
          setAllDonuts(data);
        } catch (error) {
          console.error("Error fetching donuts:", error);
        }
      };
  
      fetchDonuts();
    }, []);

  return (
    <section>
        <div className='flex flex-wrap gap-4 justify-center p-2 w-ful'>
        {allDonuts.map((single) => (
          <SingleDonut key={single.id} {...single} />
        ))}
        </div>
    </section>
  )
}

export default DonutList