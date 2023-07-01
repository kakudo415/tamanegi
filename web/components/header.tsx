import { css } from '@/styled-system/css'
import { container } from '@/styled-system/patterns'

export default function Header() {
  return (
    <header className={css({ width: '100%', color: 'white', background: '#7B1FA2' })}>
      <div className={container()}>
        <h1 className={css({ padding: '16px 0', fontSize: '24px', fontWeight: '600' })}>
          <a href="/">Tamanegi</a>
        </h1>
      </div>
    </header>
  )
}