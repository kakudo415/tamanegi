'use client'

import { css } from '@/styled-system/css'
import { center } from '@/styled-system/patterns'

function Screw() {
  return (
    <div className={css({ height: '32px', width: '32px', rounded: '50%', background: '#90A4AE', boxShadow: '0px 3px 0 0 #78909C' })}></div>
  )
}

function onionClick() {
  // TODO: Push Notification
  console.log('ONION CLICKED!')
}

export default function OnionButton() {
  return (
    <div className={center({ aspectRatio: '1/1', width: '100%', rounded: '32px', background: '#CFD8DC', boxShadow: '0px 16px 0 0 #90A4AE', position: 'relative' })}>
      <div className={`${css({ position: 'absolute', top: '32px', left: '32px' })}`}><Screw /></div>
      <div className={`${css({ position: 'absolute', top: '32px', right: '32px' })}`}><Screw /></div>
      <div className={`${css({ position: 'absolute', bottom: '32px', left: '32px' })}`}><Screw /></div>
      <div className={`${css({ position: 'absolute', bottom: '32px', right: '32px' })}`}><Screw /></div>

      <button onClick={onionClick} className={center({ aspectRatio: '1/1', width: '50%', rounded: '50%', background: '#F57C00', position: 'relative', top: '-16px', boxShadow: '0px 16px 0 0 #E65100', cursor: 'pointer', _hover: { background: '#EF6C00' }, _active: { top: '-0px', boxShadow: 'none' } })}>
        <img src='/icon-512x512.png' alt='Tamanegi' className={css({ height: 'auto', width: '60%' })} />
      </button>
    </div>
  )
}