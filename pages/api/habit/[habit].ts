import prisma from "../../../db/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const habitId = req.query["habit"];

  if (!habitId || typeof habitId !== "string") {
    res.statusCode = 404;
    res.send(JSON.stringify({ message: "Not found" }));
    return;
  }
  console.log(habitId);

  //   console.log(deleteHabit);
  try {
    const deleteHabit = await prisma.habit.delete({
      where: {
        id: Number(habitId),
      },
    });
  } catch (error) {
    res.statusCode = 404;
    res.send(JSON.stringify({ message: "Error" }));
    return;
  }

  return res.send(JSON.stringify({ message: "Habit deleted" }));
};
