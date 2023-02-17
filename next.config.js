/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:['images.unsplash.com', 'hydeparkwinterwonderland.com', 'wembleypark.com'],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/pivo',
        destination: 'http://localhost:3000/api/event-category' // Proxy to Backend
      }
    ]
  }
}

module.exports = nextConfig
