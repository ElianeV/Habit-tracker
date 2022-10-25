import prisma from "../../../db/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const dayId = req.query["day"];

  if (!dayId || typeof dayId !== "string") {
    res.statusCode = 404;
    res.send(JSON.stringify({ message: "Not found" }));
    return;
  }

  if (req.method === "DELETE") {
    const deletedDay = await prisma.day.delete({
      where: {
        id: parseInt(dayId),
      },
    });
    return res.status(200).json(deletedDay);
  }
};
