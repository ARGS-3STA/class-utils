import { groupRouter } from "@/server/routers/group";
import { router } from "@/server/trpc";

export const appRouter = router({
  group: groupRouter,
});

export type AppRouter = typeof appRouter;
