import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "Fake News Detector | About",
  description: "Learn about our fake news detection technology",
}

export default function AboutPage() {
  return <AboutPageClient />
}

