import "../styles/globals.css"

import Nav from "@/components/Nav"

export const metadata = {
  title: 'Promptopia',
  description: 'Discover and Share AI Prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"/>
          <main className="app">
            <Nav/>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

