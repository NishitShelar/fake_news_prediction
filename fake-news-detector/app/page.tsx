import NewsDetectorForm from "@/components/news-detector-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fake News Detector | Home",
  description: "Detect fake news using AI and machine learning",
}

export default function Home() {
  return (
    <div className="container max-w-5xl mx-auto px-4 py-8 md:py-12">
      <div className="space-y-6">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-primary">Fake News</span> Detector
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Verify the credibility of news articles using cutting-edge AI and machine learning
          </p>
        </div>

        <NewsDetectorForm />
      </div>
    </div>
  )
}

