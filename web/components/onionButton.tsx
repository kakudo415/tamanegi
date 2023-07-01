'use client'

import { css } from '@/styled-system/css'

export default function OnionButton() {
  return (
    <button className={css({ background: 'white', _hover: { background: 'floralwhite' }, rounded: '16px', cursor: 'pointer' })} onClick={() => { console.log('CLICKED!') }}>
      <img src='/icon-512x512.png' alt='Tamanegi' className={css({ height: 'auto', width: '100%' })} />
    </button>
  )
}