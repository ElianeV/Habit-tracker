import prisma from "../../db/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const createDay = await prisma.day.create({
        data: {
          date: req.body.date,
          habitId: req.body.habitId,
        },
      });
      return res.status(200).json(createDay);
    } catch (error) {
      return res.status(404).json({ message: "Server error" });
    }
  }

  if (req.method === "DELETE") {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
};
