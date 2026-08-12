// SPDX-License-Identifier: MIT
// Copyright (C) 2026 Shogo Technologies, Inc.
/**
 * Auto-generated Routes Index
 */

import { Hono } from "hono"
import { PrismaClient } from "./prisma/client"
import { createUserRoutes, setPrisma as setPrismaUser, setUserHooks } from "./user.routes"
import { userHooks } from "./user.hooks"

export { createUserRoutes, setPrismaUser, setUserHooks }
export { userHooks }
export type { UserHooks } from "./user.hooks"

export function createAllRoutes(prisma: PrismaClient): Hono {
  const app = new Hono()
  setPrismaUser(prisma)
  setUserHooks(userHooks)
  app.route("/users", createUserRoutes())
  return app
}