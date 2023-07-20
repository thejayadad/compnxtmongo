"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";



const Profile = () => {
    const session = useSession();
    const router = useRouter();
    const [data, setData] = useState([]);
    const [err, setErr] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

        useEffect(() => {
            const getData = async () => {
            setIsLoading(true);
            const res = await fetch("http://localhost:3000/api/donut", {
                cache: "no-store",
            });

            if (!res.ok) {
                setErr(true);
            }

            const data = await res.json()

            setData(data);
            setIsLoading(false);
            };
            getData()
        }, []);


        if (session.status === "loading") {
            return <p>Loading...</p>;
          }
        
          if (session.status === "unauthenticated") {
            router?.push("/social/login");
          }
        

  return (
    <div>Profile</div>
  )
}

export default Profile