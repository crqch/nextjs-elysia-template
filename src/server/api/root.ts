import { createElysia } from '@/server/api/elysia'

export const appRouter = createElysia({ prefix: '/api' }).compile()

export type App = typeof appRouter