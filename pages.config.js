export default {
  platform: "node",
  build: {
    command: "npm run build",
    output: "dist",
  },
  headers: {
    "/*": {
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()"
    },
    "/assets/*": {
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  }
}
