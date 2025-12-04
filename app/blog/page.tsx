import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogPage() {
  const articles = [
    {
      slug: "reduce-plastic-daily-life",
      title: "10 Ways to Reduce Plastic in Your Daily Life",
      excerpt:
        "Simple and effective strategies to minimize plastic consumption and make a positive environmental impact.",
      date: "March 15, 2024",
      category: "Lifestyle",
      image: "/eco-friendly-lifestyle-plastic-free.jpg",
      readTime: "5 min read",
    },
    {
      slug: "fast-fashion-true-cost",
      title: "The True Cost of Fast Fashion",
      excerpt: "Understanding the environmental and social impact of fast fashion and how to make better choices.",
      date: "March 12, 2024",
      category: "Fashion",
      image: "/sustainable-fashion-clothing.jpg",
      readTime: "7 min read",
    },
    {
      slug: "zero-waste-kitchen-guide",
      title: "Zero Waste Kitchen: A Complete Guide",
      excerpt: "Transform your kitchen into a zero-waste zone with these practical tips and sustainable alternatives.",
      date: "March 8, 2024",
      category: "Home",
      image: "/zero-waste-kitchen-sustainable.jpg",
      readTime: "8 min read",
    },
    {
      slug: "sustainable-travel-guide",
      title: "Sustainable Travel: How to Explore Responsibly",
      excerpt: "Tips for reducing your carbon footprint while traveling and supporting local sustainable businesses.",
      date: "March 5, 2024",
      category: "Travel",
      image: "/sustainable-travel-eco-tourism.jpg",
      readTime: "6 min read",
    },
    {
      slug: "buying-local-seasonal",
      title: "The Benefits of Buying Local and Seasonal",
      excerpt: "Why choosing local and seasonal products is better for the environment and your community.",
      date: "March 1, 2024",
      category: "Food",
      image: "/farmers-market-local-organic-produce.jpg",
      readTime: "4 min read",
    },
    {
      slug: "diy-natural-cleaning",
      title: "DIY Natural Cleaning Products",
      excerpt: "Easy recipes for making your own eco-friendly cleaning products using simple ingredients.",
      date: "February 28, 2024",
      category: "Home",
      image: "/natural-cleaning-products-diy-eco.jpg",
      readTime: "5 min read",
    },
  ]

  const categories = ["All", "Lifestyle", "Fashion", "Home", "Travel", "Food"]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground mb-6">Our Blog</h1>
            <p className="text-xl text-muted-foreground mb-8">Tips, guides, and inspiration for sustainable living</p>
            <div className="relative max-w-xl mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.title}
                className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div
                  className="h-56 bg-secondary/20"
                  style={{
                    backgroundImage: `url('${article.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {article.category}
                    </span>
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                  <Link href={`/blog/${article.slug}`}>
                    <Button variant="ghost" className="group p-0 h-auto font-semibold text-primary">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12"></div>
        </div>
      </section>
    </main>
  )
}
