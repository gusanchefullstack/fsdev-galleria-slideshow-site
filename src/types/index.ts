export interface PaintingArtist {
  image: string
  name: string
}

export interface PaintingImages {
  thumbnail: string
  hero: {
    small: string
    large: string
  }
  gallery: string
}

export interface Painting {
  name: string
  year: number
  description: string
  source: string
  artist: PaintingArtist
  images: PaintingImages
}
