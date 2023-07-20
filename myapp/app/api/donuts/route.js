import Donut from "@/model/Donut";
import connect from "@/lib/db";

export const GET = async (request) => {
    try {
        await connect();
        const donuts = await Donut.find({});
      return new Response(JSON.stringify(donuts), { status: 200 });
    } catch (err) {
      return new Response("Still In the Oven", { status: 500 });
    }
  };