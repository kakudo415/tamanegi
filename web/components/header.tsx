import { css } from '@/styled-system/css'
import { container } from '@/styled-system/patterns'

export default function Header() {
  return (
    <header className={css({ width: '100%', color: 'white', background: 'purple' })}>
      <div className={container()}>
        <h1 className={css({ padding: '8px 0', fontSize: '24px' })}>
          <a href="/">Tamanegi</a>
        </h1>
      </div>
    </header>
  )
}