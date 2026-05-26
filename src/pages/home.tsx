import { Main } from './home/Main'
import { Slogans } from './home/slogans'
import { Top } from './home/top'
import { Sucursals } from './home/sucursals'
import { Pays } from './home/pays'
import { Carrousel } from './home/carrousel'

export function Home() {
  return (
    <main className="py-20 space-y-40 overflow-hidden">
      <Main />
      <div className="max-w-7xl mx-auto px-4 space-y-40">
        <Slogans />
        <Top />
        <Sucursals />
        <Pays />
        <Carrousel />
      </div>
    </main>
  )
}
