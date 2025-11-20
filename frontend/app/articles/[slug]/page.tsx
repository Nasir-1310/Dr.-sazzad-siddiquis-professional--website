import { notFound } from 'next/navigation'
import { articlesApi } from '@/lib/api'
import { Article } from '@/types/article'

interface PageProps {
  params: {
    slug: string
  }
}

export default async function ArticlePage({ params }: PageProps) {
  let article: Article | null = null

  try {
    const response = await articlesApi.getBySlug(params.slug)
    article = response.data
  } catch (error) {
    console.error('Failed to fetch article:', error)
    notFound()
  }

  if (!article) {
    notFound()
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <article>
        {article.cover_image && (
          <img
            src={article.cover_image}
            alt={article.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
        )}
        
        <h1 className="text-5xl font-bold mb-4">{article.title}</h1>
        
        <div className="flex items-center gap-4 text-gray-600 mb-8 pb-8 border-b">
          <time dateTime={article.created_at}>
            {new Date(article.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        
        {article.excerpt && (
          <div className="text-xl text-gray-600 mb-8 italic">
            {article.excerpt}
          </div>
        )}
        
        <div className="prose prose-lg max-w-none">
          {article.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  )
}