import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Worlds 2024 • Banner Generator</title>
        <meta
          name="description"
          content="Generate your free custom banner and show who you are rooting for in the finals!"
        />
        <link rel="stylesheet" href="/styles.css" />
        {/* Open Graph pour les réseaux sociaux */}
        <meta property="og:title" content="Worlds 2024 • Banner Generator" />
        <meta
          property="og:description"
          content="Generate your free custom banner and show who you are rooting for in the finals!"
        />
        <meta property="og:image" content="/worlds-2024_banner_demo.png" />
        <meta property="og:url" content="https://worlds.ewanescence.com" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Worlds 2024 • Banner Generator" />
        <meta
          name="twitter:description"
          content="Generate your free custom banner and show who you are rooting for in the finals!"
        />
        <meta name="twitter:image" content="/worlds-2024_banner_demo.png" />
        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png "
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
