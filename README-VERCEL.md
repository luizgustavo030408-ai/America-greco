# Academia América Greco — pacote GitHub + Vercel

Este pacote foi preparado para a configuração de saída `public` da Vercel. O build executa `npm run build`, recria a pasta `public` e só então a Vercel publica o site. O arquivo `index.html` também fica na raiz para facilitar a conferência.

## Importante: envie para um repositório limpo

1. Extraia este ZIP.
2. Crie um repositório GitHub vazio ou apague os arquivos do pacote anterior.
3. Envie **todos os arquivos que estão dentro desta pasta**, e não a pasta contêiner, para a raiz do repositório.
4. A raiz do GitHub precisa conter diretamente: `package.json`, `vercel.json`, `build.mjs`, `index.html`, `assets/` e `api/`.
5. Importe esse repositório na Vercel.
6. Se a Vercel já tiver um projeto criado, confirme em Settings > Build and Deployment:
   - Build Command: `npm run build`
   - Output Directory: `public`
   - Root Directory: `./`
7. Cadastre `DATABASE_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD` e `SESSION_SECRET` nas variáveis da Vercel.
8. Faça um novo deploy sem usar o cache do build anterior.

Após o deploy, teste `/`, `/robots.txt`, `/sitemap.xml`, `/admin` e `/api/healthz`.

O WhatsApp presente na interface continua provisório e não foi incluído no schema SEO. Substitua-o antes da divulgação pública.
