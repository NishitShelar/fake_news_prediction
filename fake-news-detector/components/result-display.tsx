"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { AlertCircle, CheckCircle, AlertTriangle, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

interface ResultDisplayProps {
  result: {
    prediction: string
    fake_prob: number
    real_prob: number
  }
}

export default function ResultDisplay({ result }: ResultDisplayProps) {
  const [fakeProgress, setFakeProgress] = useState(0)
  const [realProgress, setRealProgress] = useState(0)

  // Convert probabilities to percentages
  const fakePercentage = Math.round(result.fake_prob * 100)
  const realPercentage = Math.round(result.real_prob * 100)

  useEffect(() => {
    // Animate progress bars
    const timer1 = setTimeout(() => setFakeProgress(fakePercentage), 100)
    const timer2 = setTimeout(() => setRealProgress(realPercentage), 100)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [fakePercentage, realPercentage])

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card
        className={cn(
          "border-2 shadow-lg",
          result.prediction === "Fake"
            ? "border-destructive/50 shadow-destructive/20"
            : "border-green-500/50 shadow-green-500/20",
        )}
      >
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
            {result.prediction === "Fake" ? (
              <>
                <AlertCircle className="h-6 w-6 text-destructive" />
                <span>Likely Fake News</span>
              </>
            ) : (
              <>
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span>Likely Real News</span>
              </>
            )}
          </CardTitle>
          <CardDescription className="text-sm md:text-base">
            Our AI analysis indicates this article is likely {result.prediction.toLowerCase()} news.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <span className="font-medium">Fake Probability</span>
                </div>
                <span className="font-bold">{fakePercentage}%</span>
              </div>
              <Progress value={fakeProgress} className="h-3 bg-muted" indicatorClassName="bg-destructive" />
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="font-medium">Real Probability</span>
                </div>
                <span className="font-bold">{realPercentage}%</span>
              </div>
              <Progress value={realProgress} className="h-3 bg-muted" indicatorClassName="bg-green-500" />
            </motion.div>
          </div>

          <motion.div
            className="rounded-md bg-secondary/50 p-4 border border-border/50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p>
                  <strong>Note:</strong> This analysis is based on AI predictions and should be used as a tool to assist
                  your judgment, not replace it. Always verify information from multiple reliable sources.
                </p>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

