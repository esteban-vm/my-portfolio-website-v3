'use client'

import Image from 'next/image'
import { useLocale } from 'next-intl'
import { useAction } from 'next-safe-action/hooks'
import { useEffect, useState } from 'react'
import { FaLocationDot, FaTemperatureHalf } from 'react-icons/fa6'
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
    const tz = result.data.location.tz_id

    const timeFormat = new Intl.DateTimeFormat(locale, {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })

    const dateFormat = new Intl.DateTimeFormat(locale, {
      timeZone: tz,
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })

    const updateTime = () => {
      const date = new Date()
      setTime(timeFormat.format(date))
      setDate(dateFormat.format(date))
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
      <time className='text-3xl' dateTime={time}>
        {time}
      </time>
      <time dateTime={date}>{date}</time>
      <div className='flex items-center justify-center gap-1 text-sm'>
        <FaLocationDot className='inline align-baseline text-red-500' />
        <span>
          {locale === 'es' ? 'Asunción' : name}, {country}
        </span>
      </div>
      <div className='flex items-center justify-center gap-1 text-sm'>
        <FaTemperatureHalf className='inline align-baseline text-yellow-500' />
        <span>{temp_c.toLocaleString(locale, { style: 'unit', unit: 'celsius' })}</span>
      </div>
      <div className='flex items-center justify-center gap-1 text-sm' title={text}>
        <Image alt={text} className='inline size-4 align-text-bottom contrast-125' height={2} src={icon} width={2} />
        <span className='line-clamp-1 max-w-3/4'>{text}</span>
      </div>
    </div>
  )
}
