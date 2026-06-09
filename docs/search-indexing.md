# Search Indexing

Este projeto está preparado para indexação em mecanismos de busca com metadata global, sitemap, robots e RSS Feed.

## URLs

- Site: `https://thiagosoares.dev`
- Sitemap: `https://thiagosoares.dev/sitemap.xml`
- RSS Feed: `https://thiagosoares.dev/rss.xml`

## Google Search Console

1. Acesse o Google Search Console e adicione uma nova propriedade para `thiagosoares.dev`.
2. Prefira a verificação por domínio quando possível.
3. Para DNS verification, crie o registro TXT informado pelo Google no provedor DNS do domínio.
4. Para meta tag verification, copie o conteúdo da meta tag e configure `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
5. Faça o deploy com a variável de ambiente configurada.
6. No Search Console, confirme a verificação.
7. Envie o sitemap `https://thiagosoares.dev/sitemap.xml`.

## Bing Webmaster Tools

1. Acesse o Bing Webmaster Tools e adicione o site `https://thiagosoares.dev`.
2. Prefira importar a propriedade do Google Search Console se ela já estiver verificada.
3. Para DNS verification, crie o registro TXT informado pelo Bing no provedor DNS do domínio.
4. Para meta tag verification, copie o valor de `msvalidate.01` e configure `NEXT_PUBLIC_BING_SITE_VERIFICATION`.
5. Faça o deploy com a variável de ambiente configurada.
6. No Bing Webmaster Tools, confirme a verificação.
7. Envie o sitemap `https://thiagosoares.dev/sitemap.xml`.

## Variáveis De Ambiente

Use `.env.example` como referência:

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=""
NEXT_PUBLIC_BING_SITE_VERIFICATION=""
```

As variáveis não devem receber valores fixos no código. O deploy precisa injetar os tokens reais.

## Métodos De Verificação

DNS verification valida a propriedade do domínio inteiro por meio de registros DNS. É o método mais robusto para cobrir variações como `www`, subdomínios e protocolos.

Meta tag verification valida uma URL específica usando tags renderizadas no HTML. Este projeto injeta as tags pela Metadata API do Next.js quando as variáveis públicas estão configuradas.

Sitemap submission informa aos mecanismos de busca quais URLs devem ser rastreadas. O sitemap inclui a home, a página do blog, o RSS Feed e todos os posts MDX publicados.
