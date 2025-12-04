import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BlogSection() {
  const articles = [
    {
      title: "10 Ways to Reduce Plastic in Your Daily Life",
      excerpt:
        "Simple and effective strategies to minimize plastic consumption and make a positive environmental impact.",
      date: "March 15, 2024",
      category: "Lifestyle",
      image: "/eco-friendly-lifestyle-plastic-free.jpg",
      slug: "reduce-plastic-daily-life",
    },
    {
      title: "The True Cost of Fast Fashion",
      excerpt: "Understanding the environmental and social impact of fast fashion and how to make better choices.",
      date: "March 12, 2024",
      category: "Fashion",
      image: "/sustainable-fashion-clothing.jpg",
      slug: "fast-fashion-true-cost",
    },
    {
      title: "Zero Waste Kitchen: A Complete Guide",
      excerpt: "Transform your kitchen into a zero-waste zone with these practical tips and sustainable alternatives.",
      date: "March 8, 2024",
      category: "Home",
      image: "/zero-waste-kitchen-sustainable.jpg",
      slug: "zero-waste-kitchen-guide",
    },
  ]

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Latest from Our Blog</h2>
          <p className="text-lg text-muted-foreground">Tips, guides, and inspiration for sustainable living</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link href={`/blog/${article.slug}`} key={article.title} className="group">
              <div className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div
                  className="h-48 bg-secondary/20"
                  style={{
                    backgroundImage: `url('${article.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">{article.category}</span>
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button size="lg" variant="outline">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
