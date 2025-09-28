# Cloudflare Pages Setup

## Configurações do Build

- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Node.js Version**: 22.16.0 (especificado no .nvmrc)

## Arquivos de Configuração Criados

1. `_headers` - Headers de segurança e cache
2. `_redirects` - Redirecionamento para SPA
3. `wrangler.toml` - Configuração do Cloudflare Workers
4. `.nvmrc` - Versão do Node.js
5. `.env.example` - Variáveis de ambiente de exemplo

## Dependências

O projeto usa npm com `--legacy-peer-deps` para resolver conflitos de versão do React.

## Build Local

Para testar o build localmente:

```bash
npm install --legacy-peer-deps
npm run build
```

## Deploy

1. Conecte o repositório ao Cloudflare Pages
2. Configure:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: 22.16.0
3. Deploy automático será feito a cada push na branch principal
