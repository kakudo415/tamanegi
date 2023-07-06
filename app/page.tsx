import { container, vstack } from '@/styled-system/patterns'

import Header from '@/components/header'
import OnionButton from '@/components/onionButton'

export default function Home() {
  return (
    <div className={vstack({ gap: '32px' })}>
      <Header />
      <main className={container()}>
        <OnionButton></OnionButton>
      </main>
    </div>
  )
}
