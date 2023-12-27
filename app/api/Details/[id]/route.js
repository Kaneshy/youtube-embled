"use server";

import { connectToDB } from "@/libs/mongoose.js";

import Tarjet from "@/libs/models/Tarjet.js";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {

    connectToDB();

    try {
        const video = await Tarjet.findById(params.id);
        return NextResponse.json(video)
      } catch (err) {
        console.log(err.message)
      return NextResponse.json('error api/tarjet', err.message)
      }

  };

