import Link from "next/link"
import { Newspaper } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/20">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-2">
          <Newspaper className="h-5 w-5" />
          <p className="text-center text-sm leading-loose text-muted-foreground">
            &copy; {new Date().getFullYear()} Fake News Detector. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
        </div>
      </div>
    </footer>
  )
}

