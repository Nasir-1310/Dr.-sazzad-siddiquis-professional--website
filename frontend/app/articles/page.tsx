import Link from 'next/link'
import { articlesApi } from '@/lib/api'
import { Article } from '@/types/article'

export default async function ArticlesPage() {
  let articles: Article[] = []
  let error = null

  try {
    const response = await articlesApi.getAll(0, 20)
    articles = response.data
  } catch (err: any) {
    error = err.message
    console.error('Failed to fetch articles:', err)
  }

  if (error) {
    return (
      <main className="max-w-6xl mx-auto p-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h2 className="text-red-800 font-semibold">Error Loading Articles</h2>
          <p className="text-red-600">{error}</p>
          <p className="text-sm text-red-500 mt-2">
            Make sure the backend is running on http://localhost:8000
          </p>
        </div>
      </main>
    )
  }

  if (articles.length === 0) {
    return (
      <main className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-gray-600 text-lg">No articles found.</p>
          <p className="text-gray-500 text-sm mt-2">
            Create your first article using the API or admin panel.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.slug}`}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
          >
            {article.cover_image && (
              <img
                src={article.cover_image}
                alt={article.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            
            <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">
              {article.title}
            </h2>
            
            {article.excerpt && (
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.excerpt}
              </p>
            )}
            
            <div className="text-sm text-gray-500">
              <p>{new Date(article.created_at).toLocaleDateString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}