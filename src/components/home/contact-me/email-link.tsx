'use client'

import { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { FaRegCopy, FaRegEnvelope } from 'react-icons/fa6'
import { EMAIL } from '@/lib/constants'

export function EmailLink() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2_000)
      return () => clearTimeout(timer)
    }
  }, [copied])

  const onCopy = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
  }

  return (
    <div className='flex items-center justify-between gap-2 rounded-lg border border-foreground/30 px-3 py-2 text-sm'>
      <FaRegEnvelope className='text-current/60' />
      <a className='grow font-wellfleet hover:opacity-90' href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>
      <button
        className='cursor-pointer text-current/60 enabled:hover:opacity-90'
        disabled={copied}
        onClick={onCopy}
        type='button'
      >
        {copied ? <FaCheck className='text-emerald-500 dark:text-emerald-300' /> : <FaRegCopy />}
      </button>
    </div>
  )
}
