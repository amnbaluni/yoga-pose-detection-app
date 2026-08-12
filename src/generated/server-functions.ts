// SPDX-License-Identifier: MIT
// Copyright (C) 2026 Shogo Technologies, Inc.
/**
 * Auto-generated Client Functions
 * Fetch-based CRUD operations that call the Hono REST API.
 */

import type { UserType, UserCreateInput, UserUpdateInput } from './types'

function getApiBase(): string {
  if (typeof window !== 'undefined') return window.location.origin
  return process.env.API_URL || 'http://localhost:3001'
}

export async function getUserList(args: { data: { userId?: string; where?: Record<string, unknown> } }): Promise<UserType[]> {
  const params = new URLSearchParams()
  if (args.data.userId) params.set('userId', args.data.userId)
  if (args.data.where) {
    for (const [key, value] of Object.entries(args.data.where)) {
      if (value !== undefined && value !== null) params.set(key, String(value))
    }
  }
  const qs = params.toString()
  const url = `${getApiBase()}/api/users${qs ? `?${qs}` : ''}`
  const response = await fetch(url)
  if (!response.ok) { const err = await response.json().catch(() => ({})); throw new Error(err.error?.message || 'Failed to list') }
  const json = await response.json()
  return (json.items || []) as UserType[]
}

export async function getUserById(args: { data: { id: string; userId?: string } }): Promise<UserType> {
  const url = `${getApiBase()}/api/users/${args.data.id}`
  const response = await fetch(url)
  if (!response.ok) { const err = await response.json().catch(() => ({})); throw new Error(err.error?.message || 'Not found') }
  const json = await response.json()
  return json.data as UserType
}

export async function createUser(args: { data: { input: UserCreateInput; userId?: string } }): Promise<UserType> {
  const url = `${getApiBase()}/api/users`
  const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(args.data.input) })
  if (!response.ok) { const err = await response.json().catch(() => ({})); throw new Error(err.error?.message || 'Failed to create') }
  const json = await response.json()
  return json.data as UserType
}

export async function updateUser(args: { data: { id: string; input: UserUpdateInput; userId?: string } }): Promise<UserType> {
  const url = `${getApiBase()}/api/users/${args.data.id}`
  const response = await fetch(url, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(args.data.input) })
  if (!response.ok) { const err = await response.json().catch(() => ({})); throw new Error(err.error?.message || 'Failed to update') }
  const json = await response.json()
  return json.data as UserType
}

export async function deleteUser(args: { data: { id: string; userId?: string } }): Promise<{ success: boolean }> {
  const url = `${getApiBase()}/api/users/${args.data.id}`
  const response = await fetch(url, { method: 'DELETE' })
  if (!response.ok) { const err = await response.json().catch(() => ({})); throw new Error(err.error?.message || 'Failed to delete') }
  return { success: true }
}