import { Users, Heart, MessageCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CommunitySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with like-minded individuals who are passionate about sustainability and making a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-background p-8 rounded-2xl text-center shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Connect</h3>
            <p className="text-muted-foreground">Meet fellow eco-warriors and share your journey</p>
          </div>

          <div className="bg-background p-8 rounded-2xl text-center shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Share</h3>
            <p className="text-muted-foreground">Exchange tips and sustainable living ideas</p>
          </div>

          <div className="bg-background p-8 rounded-2xl text-center shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Support</h3>
            <p className="text-muted-foreground">Get motivation and encouragement from others</p>
          </div>

          <div className="bg-background p-8 rounded-2xl text-center shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Achieve</h3>
            <p className="text-muted-foreground">Earn badges for your sustainability milestones</p>
          </div>
        </div>

        <div className="text-center">
          
        </div>
      </div>
    </section>
  )
}
