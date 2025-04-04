"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Search, BarChart2, Shield } from "lucide-react"

export default function AboutPageClient() {
  return (
    <div className="container max-w-5xl mx-auto px-4 py-8 md:py-12">
      <div className="space-y-8 md:space-y-12">
        <div className="text-center space-y-3 md:space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-primary">About</span> Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Welcome to Fake News Detector
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-p:text-base md:prose-p:text-lg prose-headings:text-primary">
          <p className="text-center md:text-left">
            In today's digital world, misinformation spreads faster than ever. Our mission is to help people verify the
            credibility of news articles using cutting-edge Artificial Intelligence and Machine Learning. Whether you're
            a journalist, researcher, or a curious reader, our tool empowers you to differentiate between real and fake
            news with just a few clicks.
          </p>

          <h2 className="text-center md:text-left mt-8 mb-6">How It Works</h2>
          <div className="grid gap-4 md:gap-6 md:grid-cols-3 my-6">
            <Card className="bg-secondary/50 border-primary/20 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <Search className="h-10 w-10 text-primary mb-2" />
                  <h3 className="text-lg md:text-xl font-medium">Enter News Content</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Our AI analyzes the text using advanced Natural Language Processing (NLP) techniques.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-secondary/50 border-primary/20 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <BarChart2 className="h-10 w-10 text-primary mb-2" />
                  <h3 className="text-lg md:text-xl font-medium">Get Instant Prediction</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Our model, trained on a large dataset, determines whether the article is likely to be real or fake.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-secondary/50 border-primary/20 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <h3 className="text-lg md:text-xl font-medium">See Probability Scores</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    We don't just give a binary answer; you also get a confidence score showing how likely the news is
                    to be fake or real.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-center md:text-left mt-8 mb-6">Why Choose Us?</h2>
          <ul className="space-y-4 pl-0 list-none">
            <li className="flex items-start gap-3 bg-secondary/30 p-4 rounded-lg border border-border/50">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong>AI-Powered Accuracy</strong> – Our system uses Naïve Bayes Classification with TF-IDF
                Vectorization, refined through hyperparameter tuning, to provide the best results.
              </span>
            </li>
            <li className="flex items-start gap-3 bg-secondary/30 p-4 rounded-lg border border-border/50">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong>User-Friendly Interface</strong> – Simply paste your news content and get a prediction
                instantly.
              </span>
            </li>
            <li className="flex items-start gap-3 bg-secondary/30 p-4 rounded-lg border border-border/50">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong>Privacy-Focused</strong> – We don't store your queries; all analysis happens in real-time.
              </span>
            </li>
            <li className="flex items-start gap-3 bg-secondary/30 p-4 rounded-lg border border-border/50">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong>Continually Improving</strong> – As fake news tactics evolve, so does our model. We continuously
                update and train our AI with new data.
              </span>
            </li>
          </ul>

          <h2 className="text-center md:text-left mt-8 mb-6">Our Vision</h2>
          <p className="text-center md:text-left bg-secondary/30 p-4 rounded-lg border border-border/50">
            We believe in a world where people make informed decisions based on credible information. By leveraging AI
            and technology, we aim to reduce misinformation and create a more trustworthy digital space.
          </p>
        </div>
      </div>
    </div>
  )
}

