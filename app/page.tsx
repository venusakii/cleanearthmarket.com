import { WindLayer } from "@/components/wind-layer"
import { FloatingActionButton } from "@/components/floating-action-button"
import { HeroSection } from "@/components/sections/hero-section"
import { FlowSection } from "@/components/sections/flow-section"
import { ProductsSection } from "@/components/sections/products-section"
import { ComparisonSection } from "@/components/sections/comparison-section"
import { MissionSection } from "@/components/sections/mission-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { CategoriesSection } from "@/components/sections/categories-section"
import { VideoSection } from "@/components/sections/video-section"
import { ImpactSection } from "@/components/sections/impact-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { AboutSection } from "@/components/sections/about-section"
import { NewsletterSection } from "@/components/sections/newsletter-section"
import { StatsSection } from "@/components/sections/stats-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { BlogSection } from "@/components/sections/blog-section"
import { CommunitySection } from "@/components/sections/community-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CommitmentSection } from "@/components/sections/commitment-section"

export default function HomePage() {
  return (
    <>
      <WindLayer />
      <HeroSection />
      <FlowSection />
      <ProductsSection />
      <ComparisonSection />
      <MissionSection />
      <HowItWorksSection />
      <StatsSection />
      <CategoriesSection />
      <PartnersSection />
      <VideoSection />
      <CommitmentSection />
      <ImpactSection />
      <BlogSection />
      <TestimonialsSection />
      <CommunitySection />
      <FaqSection />
      <AboutSection />
      <NewsletterSection />
      <FloatingActionButton />
    </>
  )
}
