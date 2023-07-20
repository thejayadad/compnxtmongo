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
    const [submitted, setSubmitted] = useState(false); // New state variable

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
        }, [submitted]);


        if (session.status === "loading") {
            return <p>Loading...</p>;
          }
        
          if (session.status === "unauthenticated") {
            router?.push("/social/login");
          }

          const handleSubmit = async (e) => {
            e.preventDefault();
            const title = e.target[0].value;
            const desc = e.target[1].value;
            const img = e.target[2].value;
          
        
            try {
              await fetch("/api/donut", {
                method: "POST",
                body: JSON.stringify({
                  title,
                  desc,
                  img,
                  username: session.data.user.name,
                }),
              });
              setSubmitted(true); 
              e.target.reset(" ");
            } catch (err) {
              console.log(err);
            }
          };

          const handleDelete = async (id) => {
            try {
              await fetch(`/api/donut/${id}`, {
                method: "DELETE",
              });
              setSubmitted(true); 
            } catch (err) {
              console.log(err);
            }
          };
        
if (session.status === "authenticated") {

  return (
    <section>
        <h2>Profile Page</h2>
        <div className="gap-6 grid grid-cols-2 mt-10">
        <div className="bg-gray-200 w-full flex flex-wrap justify-center overflow-auto md:-m-2 -m-1 scroll-hide" style={{ height: "600px"}}>
        
        {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className=""  key={post._id}>
                  <div className="md:p-2 w-48 p-1">
                    <img
                    className="rounded-lg w-full"
                    src={post.img} alt="" />
                       <h2>{post.title}</h2>
                  <button
                  className="cursor btn btn-sm btn-error"
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete
                  </button>
                  </div>
               
                </div>
              ))}
        </div>
            <div className="fixed sticky bg-red-100">
            <form  onSubmit={handleSubmit}>
            <h1>Add New Post</h1>
            <input type="text" placeholder="Title"  />
            <input type="text" placeholder="Desc"  />
            <input type="text" placeholder="Image"  />
            <button>Send</button>
            </form>
            </div> 
        </div>
    </section>
  )
}
}

export default Profile