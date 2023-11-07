import prisma from "@/lib/prisma";
import { sanitizeNameString } from "@/lib/utils";
import { publicProcedure, router } from "@/server/trpc";
import { z } from "zod";

export const studentRouter = router({
  create: publicProcedure
    .input(
      z.object({
        firstName: z.string().min(1).max(30),
        lastName: z.string().min(1).max(30),
      })
    )
    .mutation(async function ({ input }) {
      const student = await prisma.student.create({
        data: {
          ...input,
          firstName: sanitizeNameString(input.firstName),
          lastName: sanitizeNameString(input.lastName),
        },
      });
      return student;
    }),
  getAll: publicProcedure
    .input(
      z.object({
        includeGroups: z.boolean().optional().default(false),
      })
    )
    .query(async function ({ input }) {
      return prisma.student.findMany({
        include: {
          groups: input.includeGroups,
        },
      });
    }),
});
