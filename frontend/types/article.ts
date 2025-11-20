export interface Author {
  id: string
  name: string
  email: string
  bio?: string
  avatar?: string
  created_at: string
}

export interface Category {
  id: string
  name: string
  slug: string
  created_at: string
}

export interface Tag {
  id: string
  name: string
  slug: string
  created_at: string
}

export interface Article {
  id: string
  title: string
  slug: string
  content: string
  excerpt?: string
  cover_image?: string
  published: boolean
  published_at?: string
  created_at: string
  updated_at?: string
  author_id: string
  category_id?: string
  author?: Author
  category?: Category
  tags?: Tag[]
}