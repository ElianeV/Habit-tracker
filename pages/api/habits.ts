import prisma from "../../db/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(req.body);
  if (req.method === "POST") {
    try {
      const createHabit = await prisma.habit.create({
        data: {
          name: req.body.name,
          category: req.body.category,
          goal: parseInt(req.body.goal),
          // habitsCompleted: {
          //   create: [{ date: new Date()}]
          // },
        },
      });
      return res.status(200).json(createHabit);
    } catch (error) {
      console.log(error);
      return res.status(404).json({ message: "Server error" });
    }
  } else {
    const habits = await prisma.habit.findMany();
    return res.status(200).json(habits);
  }
};
