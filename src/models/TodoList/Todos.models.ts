import { z } from "zod"

const InputSchema = z
  .string()
  .min(4, "The item should be at least 4 characters")
  .max(25, "The item should no more than 25 characters")

export type Input = z.infer<typeof InputSchema>

export { InputSchema }
