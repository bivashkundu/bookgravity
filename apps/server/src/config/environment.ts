import dotenv from 'dotenv';
import { z } from 'zod';

// Load environmental variables from .env file
dotenv.config();

const environmentSchema = z.object({
  PORT: z
    .string()
    .transform((val) => parseInt(val, 10))
    .default('5000'),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  MONGODB_URI: z.string().refine(
    (val) => val.startsWith('mongodb://') || val.startsWith('mongodb+srv://'),
    { message: 'MONGODB_URI must start with mongodb:// or mongodb+srv://' }
  ),
  JWT_SECRET: z.string().min(1, 'JWT_SECRET is required'),
});

const envResult = environmentSchema.safeParse(process.env);

if (!envResult.success) {
  console.error('❌ Invalid environment variables:', envResult.error.format());
  process.exit(1);
}

export const environment = envResult.data;
export type TEnvironment = z.infer<typeof environmentSchema>;
