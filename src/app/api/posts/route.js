import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  // Fetch
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connectDB();
    const posts = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("It works!", { status: 500 });
  }
};

export const POST = async (request) => {
  const { title, content, img, author, desc } = await request.json();

  try {
    await connectDB();
    const newPost = new Post({ title, content, img, author, desc });
    await newPost.save();

    return new NextResponse("Post has been created.", { status: 201 });
  } catch (err) {
    return new NextResponse(err, { status: 500 });
  }
};
