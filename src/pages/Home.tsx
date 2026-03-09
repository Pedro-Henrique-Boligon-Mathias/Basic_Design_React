export default function Home() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto", lineHeight: "1.6" }}>
      <h1>01 - Base Vite + React</h1>

      <p>
        Este projeto é uma base inicial criada com React e Vite para servir como
        estrutura padrão de novos projetos.
      </p>

      <h2 style={{ marginTop: "2rem" }}>O que foi configurado</h2>

      <ul style={{ marginTop: "0.5rem", paddingLeft: "1.5rem" }}>
        <li>Projeto inicial com React + Vite</li>
        <li>Estrutura básica de pastas</li>
        <li>CSS global reset + styled-components</li>
        <li>Configuração completa de favicon</li>
        <li>Manifest para PWA</li>
      </ul>

      <h2 style={{ marginTop: "2rem" }}>Estrutura de pastas</h2>

      <pre style={{ marginTop: "0.5rem", padding: "1rem", background: "#f5f5f5", borderRadius: "6px" }}>
{`src
 ├ assets
 ├ components
 ├ layout
 ├ pages
 ├ router
 ├ styles
 ├ theme
 ├ App.tsx
 └ main.tsx`}
      </pre>

      <h2 style={{ marginTop: "2rem" }}>Onde alterar as principais configurações</h2>

      <h3 style={{ marginTop: "1.5rem" }}>Nome do projeto</h3>

      <p>
        O nome do projeto pode ser alterado no arquivo:
      </p>

      <pre style={{ padding: "0.5rem 1rem", background: "#f5f5f5", borderRadius: "6px" }}>
index.html
      </pre>

      <p>
        Altere a tag:
      </p>

      <pre style={{ padding: "0.5rem 1rem", background: "#f5f5f5", borderRadius: "6px" }}>
{`<title>Basic Project React</title>`}
      </pre>

      <h3 style={{ marginTop: "1.5rem" }}>Fonte global do projeto</h3>

      <p>
        A fonte padrão pode ser alterada no arquivo:
      </p>

      <pre style={{ padding: "0.5rem 1rem", background: "#f5f5f5", borderRadius: "6px" }}>
src/styles/global.css
      </pre>

      <h3 style={{ marginTop: "1.5rem" }}>Ícones e favicon</h3>

      <p>
        Todos os ícones ficam na pasta:
      </p>

      <pre style={{ padding: "0.5rem 1rem", background: "#f5f5f5", borderRadius: "6px" }}>
public/
      </pre>

      <p>Arquivos principais:</p>

      <ul style={{ paddingLeft: "1.5rem" }}>
        <li>favicon-16x16.png</li>
        <li>favicon-32x32.png</li>
        <li>apple-touch-icon.png</li>
        <li>android-chrome-192x192.png</li>
        <li>android-chrome-512x512.png</li>
      </ul>

      <p style={{ marginTop: "0.5rem" }}>
        Para trocar os ícones do projeto basta substituir essas imagens mantendo
        os mesmos nomes.
      </p>

      <p>
        Site utilizado para criação dos favicons:{" "}
        <a href="https://favicon.io/" target="_blank" rel="noopener noreferrer">
          Acesse aqui
        </a>
      </p>

      <h3 style={{ marginTop: "1.5rem" }}>Configuração do manifest</h3>

      <p>
        O arquivo responsável pelas configurações do aplicativo é:
      </p>

      <pre style={{ padding: "0.5rem 1rem", background: "#f5f5f5", borderRadius: "6px" }}>
public/site.webmanifest
      </pre>

      <p>Nele você pode alterar:</p>

      <ul style={{ paddingLeft: "1.5rem" }}>
        <li>nome do aplicativo</li>
        <li>cores do tema</li>
        <li>ícones do PWA</li>
      </ul>

      <h2 style={{ marginTop: "2rem" }}>Próximo módulo</h2>

      <p>
        No módulo <strong>02-design-tokens-theme</strong> será criado o sistema
        de tokens para cores, tipografia, espaçamento e breakpoints.
      </p>
    </main>
  )
}