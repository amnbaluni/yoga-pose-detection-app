import { Hono } from 'hono'
import { prisma } from './src/lib/db'

const app = new Hono()

app.get('/api/health', (c) => c.json({ status: 'ok' }))

export default app
