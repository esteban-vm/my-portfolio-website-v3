import type { NextProxy } from 'next/server'
import { acceptClientHintsHeader } from '@teispace/next-themes/server'
import { NextResponse } from 'next/server'

export const proxy: NextProxy = () => {
  const res = NextResponse.next()
  res.headers.set('Accept-CH', acceptClientHintsHeader())
  return res
}
