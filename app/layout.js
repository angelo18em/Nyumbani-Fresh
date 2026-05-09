import './globals.css'

export const metadata = {
  title: 'Nyumbani Fresh Blends | Authentic Kenyan Spices',
  description: 'The heart of Kenyan flavors delivered to your kitchen.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-900">{children}</body>
    </html>
  )
}
