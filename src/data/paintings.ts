import type { Painting } from '../types'
import rawData from './data.json'

function fixPath(path: string): string {
  return path.startsWith('./') ? path.slice(1) : path
}

export const paintings: Painting[] = (rawData as Painting[]).map((p) => ({
  ...p,
  artist: { ...p.artist, image: fixPath(p.artist.image) },
  images: {
    thumbnail: fixPath(p.images.thumbnail),
    hero: {
      small: fixPath(p.images.hero.small),
      large: fixPath(p.images.hero.large),
    },
    gallery: fixPath(p.images.gallery),
  },
}))
