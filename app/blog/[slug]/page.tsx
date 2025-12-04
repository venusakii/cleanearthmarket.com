import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

// Article data
const articles: Record<string, any> = {
  "reduce-plastic-daily-life": {
    slug: "reduce-plastic-daily-life",
    title: "10 Ways to Reduce Plastic in Your Daily Life",
    content: `
      <p>In today's world, plastic pollution has become one of the most pressing environmental challenges we face. Every year, millions of tons of plastic waste end up in our oceans, landfills, and natural habitats, threatening wildlife and ecosystems.</p>
      
      <p>The good news? Each of us can make a significant difference by making conscious choices in our daily lives. Here are 10 practical ways to reduce your plastic consumption:</p>
      
      <h2>1. Carry Reusable Bags</h2>
      <p>Keep reusable shopping bags in your car, purse, or backpack. This simple habit can eliminate hundreds of plastic bags from your annual consumption.</p>
      
      <h2>2. Use a Reusable Water Bottle</h2>
      <p>Invest in a quality reusable water bottle. Not only will you reduce plastic waste, but you'll also save money in the long run.</p>
      
      <h2>3. Say No to Plastic Straws</h2>
      <p>Plastic straws are one of the top pollutants found in ocean cleanups. Carry a reusable metal or bamboo straw, or simply skip the straw altogether.</p>
      
      <h2>4. Choose Products with Minimal Packaging</h2>
      <p>When shopping, opt for products with minimal or recyclable packaging. Buy in bulk when possible to reduce individual packaging waste.</p>
      
      <h2>5. Switch to Bar Soap and Shampoo</h2>
      <p>Replace liquid soaps and shampoos in plastic bottles with bar alternatives. They last longer and come with minimal packaging.</p>
      
      <h2>6. Bring Your Own Containers</h2>
      <p>When ordering takeout or buying from bulk bins, bring your own containers. Many stores are happy to accommodate this request.</p>
      
      <h2>7. Use Cloth Napkins and Towels</h2>
      <p>Replace paper towels and napkins with cloth versions. They're more durable, cost-effective, and better for the environment.</p>
      
      <h2>8. Buy Second-Hand When Possible</h2>
      <p>Shopping second-hand reduces demand for new plastic-packaged products and gives items a second life.</p>
      
      <h2>9. Choose Natural Fiber Clothing</h2>
      <p>Synthetic fabrics shed microplastics with every wash. Opt for natural fibers like cotton, linen, and wool.</p>
      
      <h2>10. Support Plastic-Free Businesses</h2>
      <p>Vote with your wallet by supporting companies committed to reducing plastic use and packaging.</p>
      
      <h2>Making It a Habit</h2>
      <p>Remember, you don't have to implement all these changes at once. Start with one or two that feel most manageable, and gradually incorporate more as they become habits. Every small action counts, and collectively, we can make a significant impact on reducing plastic pollution.</p>
      
      <p>Share your plastic-free journey with friends and family to inspire others. Together, we can create a more sustainable future for our planet.</p>
    `,
    date: "March 15, 2024",
    category: "Lifestyle",
    image: "/eco-friendly-lifestyle-plastic-free.jpg",
    readTime: "5 min read",
    author: "Sarah Green",
    related: ["fast-fashion-true-cost", "zero-waste-kitchen-guide"],
  },
  "fast-fashion-true-cost": {
    slug: "fast-fashion-true-cost",
    title: "The True Cost of Fast Fashion",
    content: `
      <p>Fast fashion has revolutionized the way we shop for clothes, making trendy styles accessible and affordable. However, this convenience comes at a significant cost to our environment, workers, and society.</p>
      
      <h2>Environmental Impact</h2>
      <p>The fashion industry is the second-largest polluter in the world, right after the oil industry. Fast fashion contributes to massive water pollution, carbon emissions, and textile waste. Each year, millions of tons of clothing end up in landfills, where synthetic fabrics can take hundreds of years to decompose.</p>
      
      <h2>Water Consumption and Pollution</h2>
      <p>It takes approximately 2,700 liters of water to produce a single cotton t-shirt. The dyeing and treatment processes release toxic chemicals into waterways, affecting aquatic life and communities that depend on these water sources.</p>
      
      <h2>Labor Conditions</h2>
      <p>Behind the cheap price tags are often exploited workers in developing countries. Many garment workers face unsafe working conditions, extremely low wages, and long working hours to meet the demands of fast fashion brands.</p>
      
      <h2>The Microplastic Problem</h2>
      <p>Synthetic fabrics like polyester release microplastics with every wash. These tiny particles make their way into our oceans and food chain, posing risks to marine life and human health.</p>
      
      <h2>What You Can Do</h2>
      <p>Choose quality over quantity. Invest in well-made garments that will last longer. Support ethical and sustainable fashion brands. Buy second-hand and vintage clothing. Learn basic sewing skills to repair and alter your clothes.</p>
      
      <h2>Moving Forward</h2>
      <p>By making conscious choices about our clothing purchases, we can reduce the demand for fast fashion and support a more sustainable industry. Every garment you choose not to buy or choose to buy responsibly makes a difference.</p>
    `,
    date: "March 10, 2024",
    category: "Fashion",
    image: "/sustainable-fashion-clothing.jpg",
    readTime: "7 min read",
    author: "Emma Thompson",
    related: ["reduce-plastic-daily-life", "zero-waste-kitchen-guide"],
  },
  "zero-waste-kitchen-guide": {
    slug: "zero-waste-kitchen-guide",
    title: "Zero Waste Kitchen: A Complete Guide",
    content: `
      <p>The kitchen is often the biggest source of household waste, but it's also where we have the most opportunities to make sustainable changes. This comprehensive guide will help you transform your kitchen into a zero-waste zone.</p>
      
      <h2>Start with the Basics</h2>
      <p>Begin by assessing your current waste. Keep track of what you throw away for a week to identify the biggest waste sources in your kitchen. This awareness is the first step toward meaningful change.</p>
      
      <h2>Reusable Storage Solutions</h2>
      <p>Replace plastic wrap and bags with reusable alternatives like beeswax wraps, silicone bags, and glass containers. These investments pay for themselves quickly and eliminate ongoing waste.</p>
      
      <h2>Bulk Shopping</h2>
      <p>Buy pantry staples in bulk using your own containers. Many stores now offer bulk sections for grains, nuts, spices, and cleaning products. This reduces packaging waste and often saves money.</p>
      
      <h2>Composting Food Scraps</h2>
      <p>Food waste makes up a significant portion of household garbage. Start composting vegetable peels, coffee grounds, and other organic matter. Even apartment dwellers can compost using countertop bins or worm composters.</p>
      
      <h2>Meal Planning and Food Preservation</h2>
      <p>Plan your meals to reduce food waste. Learn preservation techniques like freezing, canning, and fermenting to extend the life of your produce. Use the entire vegetable, including stems and leaves that are often discarded.</p>
      
      <h2>Sustainable Cleaning</h2>
      <p>Make your own cleaning products using simple ingredients like vinegar, baking soda, and castile soap. Use washable cloths instead of paper towels. Choose dish soap and detergent in bulk or in refillable containers.</p>
      
      <h2>Zero Waste Kitchen Tools</h2>
      <p>Invest in quality tools that last: wooden spoons, cast iron pans, stainless steel utensils, and cloth napkins. Avoid single-use gadgets and disposable items.</p>
      
      <h2>The Journey Continues</h2>
      <p>Remember, zero waste is a journey, not a destination. Start with one change at a time, and celebrate your progress. Every small step contributes to a healthier planet and a more sustainable lifestyle.</p>
    `,
    date: "March 5, 2024",
    category: "Home",
    image: "/zero-waste-kitchen-sustainable.jpg",
    readTime: "8 min read",
    author: "Michael Chen",
    related: ["reduce-plastic-daily-life", "sustainable-travel-guide"],
  },
  "sustainable-travel-guide": {
    slug: "sustainable-travel-guide",
    title: "Sustainable Travel: How to Explore Responsibly",
    content: `
      <p>Travel enriches our lives with new experiences, cultures, and perspectives. However, tourism can also have significant environmental and social impacts. Sustainable travel is about exploring the world while minimizing harm and maximizing benefits to local communities and ecosystems.</p>
      
      <h2>Understanding Your Carbon Footprint</h2>
      <p>Air travel is one of the most carbon-intensive activities. Consider taking fewer, longer trips instead of frequent short ones. When possible, choose trains or buses over flights. If flying is necessary, select direct flights and economy class, which have lower per-passenger emissions.</p>
      
      <h2>Choose Eco-Friendly Accommodations</h2>
      <p>Look for hotels and lodges with green certifications. Many accommodations now implement sustainable practices like renewable energy, water conservation, waste reduction, and support for local communities. Consider staying in locally-owned guesthouses to directly benefit the community.</p>
      
      <h2>Pack Light and Smart</h2>
      <p>Bring reusable items like water bottles, shopping bags, utensils, and toiletry containers. Pack reef-safe sunscreen and biodegradable soap. Lighter luggage means lower fuel consumption during transportation.</p>
      
      <h2>Respect Local Cultures and Environments</h2>
      <p>Research local customs and dress codes before visiting. Support local businesses, artisans, and restaurants. Avoid attractions that exploit animals or harm the environment. Stay on marked trails and never disturb wildlife or remove natural souvenirs.</p>
      
      <h2>Sustainable Transportation at Your Destination</h2>
      <p>Walk, bike, or use public transportation whenever possible. These options reduce emissions, save money, and offer a more authentic experience of your destination. Rent electric vehicles if a car is necessary.</p>
      
      <h2>Support Conservation Efforts</h2>
      <p>Visit national parks and protected areas where entrance fees support conservation. Participate in volunteer tourism programs that benefit local communities or ecosystems. Choose tour operators committed to sustainable practices.</p>
      
      <h2>Minimize Waste While Traveling</h2>
      <p>Refuse single-use plastics by bringing your own reusables. Properly dispose of waste and recycle when possible. Take shorter showers to conserve water, especially in water-scarce regions.</p>
      
      <h2>Eat Local and Seasonal</h2>
      <p>Enjoy local cuisine made from seasonal, regional ingredients. This supports local farmers and reduces the carbon footprint of food transportation. Visit farmers markets and street food vendors.</p>
      
      <h2>The Ripple Effect of Responsible Travel</h2>
      <p>Your choices as a traveler send powerful messages to the tourism industry. By prioritizing sustainability, you encourage businesses to adopt greener practices and help preserve the destinations you love for future generations. Travel with intention, curiosity, and respect.</p>
    `,
    date: "March 5, 2024",
    category: "Travel",
    image: "/sustainable-travel-eco-tourism.jpg",
    readTime: "6 min read",
    author: "David Martinez",
    related: ["reduce-plastic-daily-life", "buying-local-seasonal"],
  },
  "buying-local-seasonal": {
    slug: "buying-local-seasonal",
    title: "The Benefits of Buying Local and Seasonal",
    content: `
      <p>In our globalized food system, we've become accustomed to having any food available at any time. However, choosing local and seasonal produce offers remarkable benefits for the environment, your health, the economy, and your community.</p>
      
      <h2>Environmental Benefits</h2>
      <p>Local food travels shorter distances, reducing transportation emissions significantly. The average meal in the US travels 1,500 miles from farm to plate. By buying local, you drastically cut this carbon footprint. Seasonal eating means food is grown naturally without energy-intensive greenhouses or extended cold storage.</p>
      
      <h2>Fresher and More Nutritious</h2>
      <p>Locally grown seasonal produce is harvested at peak ripeness and reaches you quickly, maintaining maximum nutritional value and flavor. Studies show that produce can lose up to 30% of nutrients within three days of harvest. Local food gets to your table faster, preserving vitamins and antioxidants.</p>
      
      <h2>Supporting Local Economy</h2>
      <p>When you buy from local farmers and producers, more money stays in your community. For every dollar spent at a local farm or farmers market, approximately 65 cents stays local, compared to only 25 cents when shopping at chain stores. This strengthens your local economy and creates jobs.</p>
      
      <h2>Preserving Farmland and Biodiversity</h2>
      <p>Supporting local farms helps prevent farmland from being converted into shopping centers and housing developments. Small local farms often grow diverse crops and heritage varieties, preserving agricultural biodiversity that's disappearing from industrial agriculture.</p>
      
      <h2>Better Taste and Quality</h2>
      <p>Food grown for local markets is selected for taste and quality rather than durability for shipping. Farmers can grow flavorful heirloom varieties that wouldn't survive long-distance transportation. The difference in taste is remarkable.</p>
      
      <h2>Transparency and Trust</h2>
      <p>Buying local allows you to meet the people who grow your food, visit their farms, and ask questions about growing practices. This transparency builds trust and accountability that's impossible with industrial food chains.</p>
      
      <h2>How to Buy Local and Seasonal</h2>
      <p>Visit farmers markets, join a CSA (Community Supported Agriculture) program, shop at farm stands, or look for local options at your grocery store. Learn what's in season in your region and plan meals around these ingredients.</p>
      
      <h2>Seasonal Eating Through the Year</h2>
      <p>Each season offers unique bounty. Spring brings tender greens and asparagus. Summer explodes with tomatoes, berries, and stone fruits. Fall delivers squash, apples, and root vegetables. Winter offers hearty greens, citrus, and stored crops. Embrace the rhythm of the seasons.</p>
      
      <h2>Making the Shift</h2>
      <p>Start small by choosing one or two local, seasonal items each shopping trip. Gradually increase as you discover new favorites and cooking methods. The rewards—for your health, community, and planet—are immeasurable.</p>
    `,
    date: "March 1, 2024",
    category: "Food",
    image: "/farmers-market-local-organic-produce.jpg",
    readTime: "4 min read",
    author: "Lisa Anderson",
    related: ["zero-waste-kitchen-guide", "sustainable-travel-guide"],
  },
  "diy-natural-cleaning": {
    slug: "diy-natural-cleaning",
    title: "DIY Natural Cleaning Products",
    content: `
      <p>Commercial cleaning products often contain harsh chemicals that can harm your health and the environment. Making your own natural cleaning products is easy, effective, affordable, and eco-friendly. Here's everything you need to know to get started.</p>
      
      <h2>The Basic Ingredients</h2>
      <p>You only need a few simple ingredients to make most household cleaners: white vinegar (disinfects and cuts grease), baking soda (scrubs and deodorizes), castile soap (gentle all-purpose cleaner), essential oils (add fragrance and antimicrobial properties), and lemon juice (natural bleach and deodorizer).</p>
      
      <h2>All-Purpose Cleaner</h2>
      <p>Mix 1 cup water, 1 cup white vinegar, and 20-30 drops of essential oil (tea tree, lavender, or lemon work well) in a spray bottle. This works on countertops, sinks, appliances, and most surfaces. Avoid using on natural stone as vinegar can damage it.</p>
      
      <h2>Glass and Mirror Cleaner</h2>
      <p>Combine 2 cups water, 1/2 cup white vinegar, and 1/4 cup rubbing alcohol in a spray bottle. Spray on glass surfaces and wipe with a microfiber cloth or newspaper for streak-free shine. The alcohol helps it dry quickly without streaking.</p>
      
      <h2>Scouring Powder</h2>
      <p>Mix 1 cup baking soda with 1/4 cup salt. Add 10 drops of essential oil if desired. Use this mixture to scrub sinks, tubs, and tile. It's gentle enough for most surfaces but tough on soap scum and grime. Store in a jar with a shaker top.</p>
      
      <h2>Toilet Bowl Cleaner</h2>
      <p>Pour 1 cup of baking soda into the toilet bowl, followed by 1 cup of white vinegar. Let it fizz for 5-10 minutes, then scrub with a toilet brush. For tough stains, make a paste of baking soda and hydrogen peroxide.</p>
      
      <h2>Floor Cleaner</h2>
      <p>For hardwood floors, mix 1/4 cup white vinegar with 1 gallon of warm water. For tile floors, add 2 tablespoons of castile soap to 1 gallon of hot water with 1/4 cup baking soda. Always test in an inconspicuous area first.</p>
      
      <h2>Furniture Polish</h2>
      <p>Combine 1/4 cup white vinegar with 3/4 cup olive oil or jojoba oil. Add a few drops of lemon essential oil for fragrance. Apply with a soft cloth, rubbing in the direction of the wood grain. Buff with a clean cloth for shine.</p>
      
      <h2>Drain Cleaner</h2>
      <p>For regular maintenance, pour 1/2 cup baking soda down the drain, followed by 1/2 cup vinegar. Cover the drain and let it fizz for 15 minutes, then flush with boiling water. This helps prevent clogs naturally.</p>
      
      <h2>Storage and Safety Tips</h2>
      <p>Store cleaners in labeled glass spray bottles or jars away from direct sunlight. Make small batches to ensure freshness. Keep out of reach of children and pets. Never mix vinegar with hydrogen peroxide or castile soap with acids like vinegar or lemon juice.</p>
      
      <h2>Making the Switch</h2>
      <p>Start by replacing one commercial cleaner at a time. You'll quickly discover that natural cleaners work just as well, if not better, than their chemical counterparts. Your home will be cleaner, your family healthier, and your environmental impact reduced.</p>
    `,
    date: "February 28, 2024",
    category: "Home",
    image: "/natural-cleaning-products-diy-eco.jpg",
    readTime: "5 min read",
    author: "Rachel Kim",
    related: ["zero-waste-kitchen-guide", "reduce-plastic-daily-life"],
  },
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug]

  if (!article) {
    notFound()
  }

  const relatedArticles = article.related.map((slug: string) => articles[slug]).filter(Boolean)

  return (
    <main className="min-h-screen">
      {/* Hero Image */}
      <section className="relative h-[500px] bg-secondary/20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${article.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
            {article.category}
          </span>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {article.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.readTime}
          </div>
          <div className="ml-auto">
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
          {article.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-4 mb-12 pb-8 border-b">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-semibold">{article.author.charAt(0)}</span>
          </div>
          <div>
            <p className="font-semibold text-foreground">{article.author}</p>
            <p className="text-sm text-muted-foreground">Environmental Writer</p>
          </div>
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Back button after article content */}
        <div className="mt-16 pt-8 border-t">
          <Link href="/blog">
            <Button variant="ghost" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Related Articles */}
        <div className="bg-secondary/10 rounded-2xl p-8 mb-8 mt-16">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Related Articles</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {relatedArticles.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="group">
                <div className="bg-background rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div
                    className="h-40 bg-secondary/20"
                    style={{
                      backgroundImage: `url('${related.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">{related.readTime}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}
