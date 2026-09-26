# inova

Site institucional da Inova — Inteligência em Gestão Pública: https://www.inovaigp.com.br

Next.js 14 (app router), uma página só. Deploy na Vercel a cada push na `main`.

## Rodar local

```
npm install
npm run dev
```

## Onde mexer

- `app/site-data.ts`: textos das frentes de atuação, missão/visão/valores, email, CNPJ e créditos das fotos
- `app/page.tsx`: estrutura da página
- `app/globals.css`: estilos
- `app/icon.svg`, `app/apple-icon.png`, `app/opengraph-image.png`: favicon e imagem de compartilhamento (o Next gera as tags sozinho)
- `public/fotos/`: fotos do Wikimedia Commons. As CC BY exigem crédito, que está no rodapé. Se trocar foto, atualize `photoCredits`.
