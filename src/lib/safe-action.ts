import { createSafeActionClient } from 'next-safe-action'

export const safeClient = createSafeActionClient({
  async handleServerError(error) {
    console.log({ error: error.message })
  },
})
