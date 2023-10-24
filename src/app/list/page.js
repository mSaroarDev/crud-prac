import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import React from "react";

const List = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.user.findMany();

  return (
    <div className="mt-5 ml-5">
      <ol>
        {data &&
          data.map((data) => {
            return <li key={data.id}>{data.name}</li>;
          })}
      </ol>

      <Link className="mt-5" href={"/"}>
        Back to Homepage
      </Link>
    </div>
  );
};

export default List;
