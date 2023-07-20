import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Donut from "@/model/Donut";


export const POST = async (request) => {
    const body = await request.json();
  
    const newPost = new Donut(body);
  
    try {
      await connect();
  
      await newPost.save();
  
      return new NextResponse("Donut created", { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };