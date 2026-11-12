'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { FaRegCopy, FaRegEnvelope } from 'react-icons/fa6'
import tw from 'tailwind-styled-components'
import { EMAIL } from '@/lib/constants'

export function EmailLink() {
  const t = useTranslations('contact')
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
    <Wrapper>
      <FaRegEnvelope className='size-4 text-current/60' />
      <div className='grow'>
        <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
      </div>
      <button
        className='text-current/60 enabled:cursor-pointer enabled:hover:opacity-90 [&_svg]:size-4'
        disabled={copied}
        onClick={onCopy}
        title={copied ? t('copied') : t('copy')}
        type='button'
      >
        {copied ? <FaCheck className='text-emerald-500 dark:text-emerald-300' /> : <FaRegCopy />}
      </button>
    </Wrapper>
  )
}

const Wrapper = tw.div`flex items-center justify-between gap-2 rounded-lg border border-foreground/10 bg-background px-3 py-2 text-sm`
const Link = tw.a`font-semibold text-sky-500 text-sm hover:underline hover:opacity-90 dark:text-sky-300`
