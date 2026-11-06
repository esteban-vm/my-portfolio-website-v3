'use client'

import Image from 'next/image'
import { useLocale } from 'next-intl'
import { useAction } from 'next-safe-action/hooks'
import { useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { getWeather } from '@/actions'

export function DateTime() {
  const locale = useLocale()
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const { execute, result, isPending } = useAction(getWeather)

  useEffect(() => {
    execute({ lang: locale })
  }, [execute, locale])

  useEffect(() => {
    if (!result?.data) return

    const timeFormat = new Intl.DateTimeFormat(locale, {
      timeZone: result.data.location.tz_id,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })

    const dateFormat = new Intl.DateTimeFormat(locale, {
      timeZone: result.data.location.tz_id,
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })

    const updateTime = () => {
      setTime(timeFormat.format(new Date()))
      setDate(dateFormat.format(new Date()))
    }

    updateTime()
    const interval = setInterval(updateTime, 1_000)
    return () => clearInterval(interval)
  }, [result?.data, locale])

  if (isPending || !result?.data) return null

  const { temp_c } = result.data.current
  const { text, icon } = result.data.current.condition
  const { name, country } = result.data.location

  return (
    <div className='flex size-full flex-col items-center justify-center'>
      <Image alt='' height={64} src={icon} width={64} />
      <time className='font-semibold text-3xl' dateTime={time}>
        {time}
      </time>
      <time dateTime={date}>{date}</time>
      <p>
        <FaLocationDot className='inline align-baseline' /> {locale === 'es' ? 'Asunción' : name}, {country}
      </p>
      <p>
        {temp_c.toLocaleString(locale, { style: 'unit', unit: 'celsius' })} · {text}
      </p>
    </div>
  )
}
