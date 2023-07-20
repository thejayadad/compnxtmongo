import { NextResponse } from "next/server";
import Donut from "@/model/Donut";
import connect from "@/lib/db";


export const GET = async (request) => {
    const url = new URL(request.url);
  
    const username = url.searchParams.get("username");
  
    try {
      await connect();
  
      const donuts = await Donut.find(username && { username });
  
      return new NextResponse(JSON.stringify(donuts), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };
  
export const POST = async (request) => {
    const body = await request.json();
  
    const newDonut = new Donut(body);
  
    try {
      await connect();
  
      await newDonut.save();
  
      return new Response(JSON.stringify(newDonut), { status: 201 })
    } catch (err) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
  };    