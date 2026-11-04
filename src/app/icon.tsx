import { ImageResponse } from 'next/og'

export const size = {
  width: 48,
  height: 48,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 45,
        background: '#0a0a0a',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ededed',
        borderRadius: '8px',
      }}
    >
      E
    </div>,
    { ...size }
  )
}
