"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";


const Navbar = () => {
const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setupProviders();
  }, []);



  return (
    <header className="navbar">
        <div className="flex-1">
        <Link href={'/'}>
                Donut
            </Link>
        </div>
        <nav className="flex-none">
        <ul className="menu menu-horizontal px-1">
       
            {session?.user ? (
               <>

          <li>  <Link href={'/social/profile/'}>
            Create Donut
          </Link></li>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={session?.user.image} />
        </div>
      </label>
          <li>
          <button onClick={signOut}>Logout</button>
          </li>
        </>

        ) : (
            <>
            {providers &&
            Object.values(providers).map((provider) => (
              <button
                className="blue-btn"
                key={provider.name}
                onClick={() => signIn(providers.id)}
              >
                Sign In
              </button>
            ))}
            </>
        )}
        </ul>
        </nav>
    </header>
  )
}

export default Navbar