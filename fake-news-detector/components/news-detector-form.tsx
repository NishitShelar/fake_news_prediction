"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ResultDisplay from "@/components/result-display"

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  text: z.string().min(20, {
    message: "News content must be at least 20 characters.",
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function NewsDetectorForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{
    prediction: string
    fake_prob: number
    real_prob: number
  } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      text: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setIsLoading(true)
    setError(null)

    try {
      const response = await axios.post("https://fake-news-prediction-qizw.onrender.com/predict", {
        title: values.title,
        text: values.text,
      })

      setResult(response.data)
    } catch (err) {
      console.error("Error submitting news:", err)
      setError("An error occurred while analyzing the news. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="bg-secondary/50 rounded-lg border p-4 md:p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">News Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the headline of the news article"
                        {...field}
                        className="text-base md:text-lg"
                      />
                    </FormControl>
                    <FormDescription className="text-xs md:text-sm">
                      Enter the complete title of the news article you want to verify.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">News Content</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste the full text of the news article here"
                        className="min-h-[150px] md:min-h-[200px] resize-none text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-xs md:text-sm">
                      Paste the complete text of the news article for better accuracy.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-center md:justify-start">
              <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze News"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>

      {error && (
        <motion.div
          className="p-4 bg-destructive/10 border border-destructive rounded-md text-destructive text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.div>
      )}

      {result && <ResultDisplay result={result} />}
    </motion.div>
  )
}

