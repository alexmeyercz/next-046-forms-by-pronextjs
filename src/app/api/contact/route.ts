import { NextRequest, NextResponse } from 'next/server'

import { contactSchema } from '@/schema/schema'

const f = '⇒ route.ts:'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const data = Object.fromEntries(formData)
  console.log(f, 'data →', data)
  const parsed = contactSchema.safeParse(data)
  console.log(f, 'parsed →', parsed)

  if (parsed.success) {
    // Add parsed.data to the database
    return NextResponse.json({
      message: 'Successful contact form submission',
      submission: parsed.data,
    })
  } else {
    return NextResponse.json(
      {
        message: 'Submission failed',
        submission: parsed.error,
      },
      { status: 400 }
    )
  }
}
