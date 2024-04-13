import { registerSchema } from '@/schema/schema'
import { NextRequest, NextResponse } from 'next/server'

const f = '⇒ route.tsx:'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const parsed = registerSchema.safeParse(data)
  console.log(f, 'parsed →', parsed)

  // Add artificial delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  if (parsed.success) {
    // Add parsed.data to database

    return NextResponse.json({
      message: 'User registered successfully',
      user: parsed.data,
    })
  } else {
    return NextResponse.json({
      message: 'User registration failed',
      error: parsed.error,
    })
  }
}
