import Link from 'next/link'
import { articlesApi } from '@/lib/api'
import { Article } from '@/types/article'
import HeroSection from '@/components/HeroSection'
// import FeaturedWorkSection from '@/components/FeaturedWorkSection'
import MyRolesSection from '@/components/MyRolesSection'

export const metadata = {
  title: 'Dr. Sazzad Siddiqui - Educator, Author, Public Servant',
  description: 'Dr. Sazzad Siddiqui is a distinguished educator, accomplished author, and dedicated public servant committed to creating positive change through knowledge, leadership, and community engagement.',
  keywords: 'Dr. Sazzad Siddiqui, educator, author, politician, public servant, teacher, writer',
  openGraph: {
    title: 'Dr. Sazzad Siddiqui - Educator, Author, Public Servant',
    description: 'Distinguished educator, accomplished author, and dedicated public servant',
    type: 'website',
  },
}

export default async function Home() {
  // let articles: Article[] = []

  // try {
  //   const response = await articlesApi.getAll(0, 6)
  //   articles = response.data
  // } catch (error) {
  //   console.error('Failed to fetch articles:', error)
  // }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      <MyRolesSection />
      {/* <FeaturedWorkSection/> */}
      
      {/* Welcome Section */}
      {/* <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Our News Platform
          </h1>
          <p className="text-xl mb-8">
            Stay updated with the latest articles, news, and insights
          </p>
          <Link
            href="/articles"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Explore Articles
          </Link>
        </div>
      </section> */}

      {/* Latest Articles */}
      {/* <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        
        {articles.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">No articles available yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="border rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {article.title}
                </h3>
                {article.excerpt && (
                  <p className="text-gray-600 line-clamp-3">
                    {article.excerpt}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            href="/articles"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            View All Articles →
          </Link>
        </div>
      </section> */}
    </main>
  )
}