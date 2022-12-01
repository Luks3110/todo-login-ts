import { z } from "zod"

const EmailSchema = z
  .string()
  .email()
  .max(50, "The email address should be no more than 50 characters long")

const PasswordSchema = z
  .string()
  .min(4, "The password should be at least 4 characters")
  .max(16, "The password should no more than 16 characters")

const UserSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
})

export type User = z.infer<typeof UserSchema>

export { EmailSchema, PasswordSchema, UserSchema }
