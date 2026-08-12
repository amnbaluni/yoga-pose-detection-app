// SPDX-License-Identifier: MIT
// Copyright (C) 2026 Shogo Technologies, Inc.
/**
 * Auto-generated User Routes
 */

import { Hono } from "hono"
import { PrismaClient } from "./prisma/client"
import type { UserHooks } from "./user.hooks"

const bigIntReplacer = (_key: string, value: unknown) =>
  typeof value === "bigint" ? value.toString() : value

function sendJson(c: any, body: unknown, status: number = 200) {
  return c.body(JSON.stringify(body, bigIntReplacer), status, {
    "content-type": "application/json; charset=UTF-8",
  })
}

let prisma: PrismaClient | null = null
let hooks: UserHooks = {}

export function setPrisma(client: PrismaClient) { prisma = client }
export function setUserHooks(h: UserHooks) { hooks = h }

function getPrisma(): PrismaClient {
  if (!prisma) throw new Error("Prisma client not set. Call setPrisma() first.")
  return prisma
}

function buildContext(c: any, body?: any) {
  const auth = c.get("auth")
  return {
    body: body || {},
    params: c.req.param() || {},
    query: Object.fromEntries(new URL(c.req.url).searchParams),
    userId: auth?.userId,
    tunnelAuthenticated: !!auth?.tunnelAuthenticated,
    prisma: getPrisma(),
  }
}

const WRITABLE_SCALAR_FIELDS = ["email", "name", "createdAt", "updatedAt"] as const
const RELATION_FIELDS = [] as const

function pickWritableFields(body: any) {
  if (body == null || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, error: { code: "invalid_body", message: "Request body must be a JSON object." } }
  }
  const data: Record<string, unknown> = {}
  for (const key of WRITABLE_SCALAR_FIELDS) {
    if (body[key] !== undefined) data[key] = body[key]
  }
  for (const key of RELATION_FIELDS) {
    const value = body[key]
    if (value === undefined || value === null) continue
    if (typeof value !== "object" || Array.isArray(value)) {
      return { ok: false, error: { code: "invalid_relation_shape", message: `Field "${key}" is a relation. Provide it as { connect: { id: ... } } or { create: { ... } }.` } }
    }
    data[key] = value
  }
  return { ok: true, data }
}

export function createUserRoutes(): Hono {
  const router = new Hono()

  router.get("/", async (c) => {
    try {
      const ctx = buildContext(c)
      const query = ctx.query
      const reservedParams = ["limit", "offset", "userId", "include", "orderBy"]
      let where: any = {}
      for (const [key, value] of Object.entries(query)) {
        if (!reservedParams.includes(key) && value !== undefined && value !== null && value !== "") {
          let parsedValue: any = value
          if (value === "true") parsedValue = true
          else if (value === "false") parsedValue = false
          else if (!isNaN(Number(value)) && value !== "") parsedValue = Number(value)
          where[key] = parsedValue
        }
      }
      let include: any = undefined
      let orderBy: any = undefined
      if (hooks.beforeList) {
        const result = await hooks.beforeList(ctx)
        if (result && !result.ok) return sendJson(c, { error: result.error }, 400)
        if (result?.data) {
          where = result.data.where || where
          include = result.data.include || include
          orderBy = result.data.orderBy || orderBy
        }
      }
      const [items, total] = await Promise.all([
        prisma!.user.findMany({ where, include, orderBy, take: query.limit ? parseInt(query.limit) : undefined, skip: query.offset ? parseInt(query.offset) : undefined }),
        prisma!.user.count({ where }),
      ])
      return sendJson(c, { ok: true, items, total })
    } catch (error: any) {
      return sendJson(c, { error: { code: "list_failed", message: error.message } }, 500)
    }
  })

  router.get("/:id", async (c) => {
    try {
      const id = c.req.param("id")
      const ctx = buildContext(c)
      if (hooks.beforeGet) {
        const result = await hooks.beforeGet(id, ctx)
        if (result && !result.ok) return sendJson(c, { error: result.error }, result.error?.code === "not_found" ? 404 : 400)
      }
      const item = await prisma!.user.findUnique({ where: { id } })
      if (!item) return sendJson(c, { error: { code: "not_found", message: "User not found" } }, 404)
      return sendJson(c, { ok: true, data: item })
    } catch (error: any) {
      return sendJson(c, { error: { code: "get_failed", message: error.message } }, 500)
    }
  })

  router.post("/", async (c) => {
    try {
      let body = await c.req.json()
      const ctx = buildContext(c, body)
      if (hooks.beforeCreate) {
        const result = await hooks.beforeCreate(body, ctx)
        if (result && !result.ok) return sendJson(c, { error: result.error }, 400)
        if (result?.data) body = result.data
      }
      const picked = pickWritableFields(body)
      if (!picked.ok) return sendJson(c, { error: picked.error }, 400)
      const item = await prisma!.user.create({ data: picked.data as any })
      if (hooks.afterCreate) await hooks.afterCreate(item, ctx)
      return sendJson(c, { ok: true, data: item }, 201)
    } catch (error: any) {
      return sendJson(c, { error: { code: "create_failed", message: error.message } }, 500)
    }
  })

  router.patch("/:id", async (c) => {
    try {
      const id = c.req.param("id")
      let body = await c.req.json()
      const ctx = buildContext(c, body)
      if (hooks.beforeUpdate) {
        const result = await hooks.beforeUpdate(id, body, ctx)
        if (result && !result.ok) return sendJson(c, { error: result.error }, 400)
        if (result?.data) body = result.data
      }
      const picked = pickWritableFields(body)
      if (!picked.ok) return sendJson(c, { error: picked.error }, 400)
      const item = await prisma!.user.update({ where: { id }, data: picked.data as any })
      if (hooks.afterUpdate) await hooks.afterUpdate(item, ctx)
      return sendJson(c, { ok: true, data: item })
    } catch (error: any) {
      return sendJson(c, { error: { code: "update_failed", message: error.message } }, 500)
    }
  })

  router.delete("/:id", async (c) => {
    try {
      const id = c.req.param("id")
      const ctx = buildContext(c)
      if (hooks.beforeDelete) {
        const result = await hooks.beforeDelete(id, ctx)
        if (result && !result.ok) return sendJson(c, { error: result.error }, 400)
      }
      await prisma!.user.delete({ where: { id } })
      if (hooks.afterDelete) await hooks.afterDelete(id, ctx)
      return sendJson(c, { ok: true })
    } catch (error: any) {
      return sendJson(c, { error: { code: "delete_failed", message: error.message } }, 500)
    }
  })

  return router
}