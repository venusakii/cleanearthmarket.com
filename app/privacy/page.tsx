export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="glass-effect rounded-2xl p-8 sm:p-12">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-8 text-balance">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-foreground/80 leading-relaxed text-pretty">
                  We collect information you provide directly to us, such as when you create an account, subscribe to
                  our newsletter, or contact us. This may include your name, email address, and any other information
                  you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-foreground/80 leading-relaxed text-pretty mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Send you newsletters and marketing communications (with your consent)</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Protect against fraudulent or illegal activity</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. Cookies and Tracking</h2>
                <p className="text-foreground/80 leading-relaxed text-pretty">
                  We use cookies and similar tracking technologies to collect information about your browsing
                  activities. This helps us improve your experience and analyze site usage. You can control cookies
                  through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
                <p className="text-foreground/80 leading-relaxed text-pretty">
                  We do not sell your personal information. We may share your information with service providers who
                  assist us in operating our website, conducting our business, or serving our users, as long as those
                  parties agree to keep this information confidential.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Amazon Affiliate Disclosure</h2>
                <p className="text-foreground/80 leading-relaxed text-pretty">
                  As an Amazon Associate, we may collect information when you click on affiliate links. This information
                  is used to track affiliate earnings and is governed by Amazon's privacy policy.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Data Security</h2>
                <p className="text-foreground/80 leading-relaxed text-pretty">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                <p className="text-foreground/80 leading-relaxed text-pretty mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to the processing of your information</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
                <p className="text-foreground/80 leading-relaxed text-pretty">
                  Our service is not directed to children under 13 years of age. We do not knowingly collect personal
                  information from children under 13. If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">9. Changes to This Policy</h2>
                <p className="text-foreground/80 leading-relaxed text-pretty">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the
                  new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
                <p className="text-foreground/80 leading-relaxed text-pretty">
                  If you have any questions about this Privacy Policy, please contact us at hello@cleanearthmarket.com.
                </p>
              </section>

              <p className="text-sm text-muted-foreground mt-12">Last updated: January 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
