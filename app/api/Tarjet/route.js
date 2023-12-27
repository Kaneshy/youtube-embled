"use server";

import { connectToDB } from "@/libs/mongoose.js";

import Tarjet from "@/libs/models/Tarjet.js";
import { NextResponse } from "next/server";

// export async function fetchPosts(pageNumber = 1, pageSize = 20) {
//     connectToDB();

//     // Calculate the number of posts to skip based on the page number and page size.
//     const skipAmount = (pageNumber - 1) * pageSize;

//     // Create a query to fetch the posts that have no parent (top-level threads) (a thread that is not a comment/reply).
//     const postsQuery = Thread.find({ parentId: { $in: [null, undefined] } })
//       .sort({ createdAt: "desc" })
//       .skip(skipAmount)
//       .limit(pageSize)
//       .populate({
//         path: "author",
//         model: Tarjet,
//       })
//       .populate({
//         path: "children", // Populate the children field
//         populate: {
//           path: "author", // Populate the author field within children
//           model: Tarjet,
//           select: "_id name parentId image", // Select only _id and username fields of the author
//         },
//       });

//     // Count the total number of top-level posts (threads) i.e., threads that are not comments.
//     const totalPostsCount = await Thread.countDocuments({
//       parentId: { $in: [null, undefined] },
//     }); // Get the total count of posts

//     const posts = await postsQuery.exec();

//     const isNext = totalPostsCount > skipAmount + posts.length;

//     return { posts, isNext };
//   }

export async function POST(req, res) {
  const body = await req.json();
  console.log('api/tarjet', body)
  connectToDB();
  console.log('espress addvideo', body)
  const newVideo = new Tarjet({ ...body });
  try {
    const savedVideo = await newVideo.save();
    console.log('hhh', savedVideo)
    return NextResponse.json(savedVideo)

  } catch (err) {
    console.log(err.message)
    return NextResponse.json('error api/tarjet', err.message)
  }
};

export async function GET(req, res) {
  connectToDB();
  try {
    console.log('runinng get')
    const videos = await Tarjet.aggregate([{ $sample: { size: 40 } }]);
    return NextResponse.json(videos)
  } catch (err) {
    console.log(err.message)
    return NextResponse.json('error api/tarjet', err.message)
  }
};