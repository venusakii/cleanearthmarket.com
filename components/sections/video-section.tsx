export function VideoSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl animate-breathe">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="/sustainable-artisan-crafts-renewable-energy.jpg"
            >
              <source src="/placeholder.mp4" type="video/mp4" />
            </video>

            {/* Overlay Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end justify-center pb-12">
              <div className="text-center space-y-2">
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground text-balance">
                  Sustainability in Motion
                </h3>
                <p className="text-lg text-primary-foreground/90 text-pretty">
                  Every choice matters. Every action multiplies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
