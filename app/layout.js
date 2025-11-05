export const metadata = {
  title: 'Melhor Horário para Dormir - Baseado em Ciência',
  description: 'Descubra qual é o melhor horário para dormir de acordo com a ciência do sono',
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
