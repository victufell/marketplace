import { z } from "zod"

export const metricSchema = z.object({
  value: z.number(),
  label: z.string(),
  icon: z.string()
})

export const visitorDataSchema = z.object({
  date: z.string(),
  visitors: z.number()
})

export type MetricData = z.infer<typeof metricSchema>
export type VisitorData = z.infer<typeof visitorDataSchema>

export const productSchema = z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    description: z.string(),
    status: z.enum(["available", "sold"]),
    image: z.string(),
  })
  
  export type Product = z.infer<typeof productSchema>