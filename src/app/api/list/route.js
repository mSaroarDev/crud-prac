import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req) {
  //   const formData = await req.json();
  const prisma = new PrismaClient();

  try {
    const newUser = await prisma.user.create({
      data: {
        name: formData.name,
      },
    });

    return NextResponse.json(
      { msg: "success", data: newUser },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ msg: "failed", data: "error" }, { status: 406 });
  }
}
