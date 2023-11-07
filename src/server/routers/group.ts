import prisma from "@/lib/prisma";
import { sanitizeNameString } from "@/lib/utils";
import { publicProcedure, router } from "@/server/trpc";
import { z } from "zod";

export const groupRouter = router({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1).max(30),
      })
    )
    .mutation(async function ({ input }) {
      const group = await prisma.group.create({
        data: {
          ...input,
          name: sanitizeNameString(input.name),
        },
      });
      return group;
    }),
  getAll: publicProcedure
    .input(
      z.object({
        includeStudents: z.boolean().optional().default(false),
      })
    )
    .query(async function ({ input }) {
      return prisma.group.findMany({
        include: {
          students: input.includeStudents,
        },
      });
    }),
  findByName: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(async function ({ input }) {
      return await prisma.group.findMany({
        where: {
          name: sanitizeNameString(input.name),
        },
      });
    }),
});
