import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Donut from "@/model/Donut";



export const DELETE = async (request, { params }) => {
    const { id } = params;
  
    try {
      await connect();
  
      await Donut.findByIdAndDelete(id);
  
      return new NextResponse("Donut Removed", { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };