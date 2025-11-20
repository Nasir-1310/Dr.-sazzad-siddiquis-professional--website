// lib/env.ts
const requiredEnvVars = [
  'DATABASE_URL',
  'NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME',
] as const

const optionalEnvVars = [
  'CLOUDINARY_API_KEY',
  'CLOUDINARY_API_SECRET',
  'NEXT_PUBLIC_APP_URL',
] as const

export function validateEnv() {
  const missing = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  )

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
      'Please check your .env file.'
    )
  }
}

export const env = {
  DATABASE_URL: process.env.DATABASE_URL!,
  CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
}