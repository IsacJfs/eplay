import ProductsList from '../../components/ProductList'
import { Game } from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promo: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'windows',
    infos: ['-10%', 'R$ 150,00'],
    image: resident
  },
  {
    id: 2,
    title: 'Diablo 4',
    category: 'Ação',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    system: 'windows',
    infos: ['-10%', 'R$ 150,00'],
    image: diablo
  },
  {
    id: 3,
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'windows',
    infos: ['-10%', 'R$ 150,00'],
    image: resident
  },
  {
    id: 4,
    title: 'Diablo 4',
    category: 'Ação',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    system: 'windows',
    infos: ['-10%', 'R$ 150,00'],
    image: diablo
  }
]

const commingSoon: Game[] = [
  {
    id: 5,
    title: 'The Legend of Zelda - TOK',
    category: 'Ação',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    system: 'windows',
    infos: ['-10%', 'R$ 150,00'],
    image: zelda
  },
  {
    id: 6,
    title: 'Star Wars Jedi Survivor',
    category: 'Ação',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    system: 'windows',
    infos: ['-10%', 'R$ 150,00'],
    image: starWars
  },
  {
    id: 7,
    title: 'The Legend of Zelda - TOK',
    category: 'Ação',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    system: 'windows',
    infos: ['-10%', 'R$ 150,00'],
    image: zelda
  },
  {
    id: 8,
    title: 'Star Wars Jedi Survivor',
    category: 'Ação',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    system: 'windows',
    infos: ['-10%', 'R$ 150,00'],
    image: starWars
  }
]

const Categories = () => {
  return (
    <div>
      <ProductsList games={promo} title="RPG" background="secundary" />
      <ProductsList games={commingSoon} title="Ação" background="primary" />
      <ProductsList games={promo} title="Aventura" background="secundary" />
      <ProductsList games={commingSoon} title="FPS" background="primary" />
    </div>
  )
}

export default Categories
