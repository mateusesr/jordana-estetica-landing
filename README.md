# Jordana — Make-up & Estética Avançada
## Site completo v2.0

---

## 🗂 Estrutura do Projeto

```
jordana/
├── index.html          ← Página principal (abrir no navegador)
├── sitemap.xml         ← Mapa do site (para o Google)
├── robots.txt          ← Permissões de indexação
├── assets/
│   ├── css/
│   │   ├── custom.css  ← Cores, fontes, espaçamentos (design tokens)
│   │   └── style.css   ← Todo o CSS do site
│   ├── js/             ← (scripts inline no index.html)
│   └── img/            ← TODAS as imagens do site
└── data/
    └── content.json    ← Textos editáveis (WhatsApp, Instagram...)
```

---

## 🖼 Guia de Imagens (onde cada foto está)

| Arquivo                    | Foto original             | Usado em                      |
|---------------------------|---------------------------|-------------------------------|
| `hero.jpg`                | AMfotos-15.jpg            | Banner principal (hero)       |
| `profissional.jpg`        | AMfotos-11.jpg            | Seção Caminho Profissional    |
| `manifesto.jpg`           | AMfotos-2.jpg             | Fundo sutil Manifesto         |
| `cta-bg.jpg`              | AMfotos-42.jpg            | Fundo CTA final               |
| `og-image.jpg`            | AMfotos-33.jpg            | Preview redes sociais/SEO     |
| `solucoes-1.jpg`          | AMfotos-6.jpg             | Solução: Botox (Xeomin)       |
| `solucoes-2.jpg`          | AMfotos-14.jpg            | Solução: Bioestimuladores     |
| `solucoes-3.jpg`          | AMfotos-9.jpg             | Solução: Preenchimento        |
| `solucoes-4.jpg`          | AMfotos-3.jpg             | Solução: Fios de PDO          |
| `solucoes-5.jpg`          | AMfotos-18.jpg            | Solução: Saúde da Pele        |
| `cursos-bg.jpg`           | AMfotos-26.jpg            | Fundo sutil Cursos            |
| `lifestyle-1.jpg`         | AMfotos-25.jpg            | Photo strip decorativo        |
| `lifestyle-2.jpg`         | AMfotos-27.jpg            | Photo strip decorativo        |
| `lifestyle-3.jpg`         | AMfotos-28.jpg            | Photo strip decorativo        |
| `lifestyle-4.jpg`         | AMfotos-32.jpg            | Photo strip decorativo        |
| `galeria-1-antes/depois`  | Antes e Depois (zip)      | Galeria resultado 1           |
| `galeria-2-antes/depois`  | Antes e Depois (zip)      | Galeria resultado 2           |
| `galeria-3-antes/depois`  | Antes e Depois (zip)      | Galeria resultado 3           |
| `galeria-4-antes/depois`  | Antes e Depois (zip)      | Galeria resultado 4           |
| `galeria-5-antes/depois`  | Antes e Depois (zip)      | Galeria resultado 5           |
| `clinica-1.jpg`           | IMG_0220.JPG (zip)        | (disponível para uso)         |
| `clinica-2.jpg`           | IMG_1230.JPG (zip)        | (disponível para uso)         |

---

## ⚙️ Personalizar (obrigatório antes de publicar)

### 1. WhatsApp
Abra `index.html` e localize:
```javascript
const WA = '54981341048';
```
Substitua pelo número completo com DDD, ex: `'5547991234567'`

### 2. Instagram
Na mesma área de scripts:
```javascript
el.href = 'https://www.instagram.com/estetajormakeup/';
```
Altere o arroba pelo correto.

### 3. URL do site (SEO)
Substitua `https://esteticajordana.com.br/` pelo domínio real em:
- `<link rel="canonical">` (linha ~15)
- `og:url` (linha ~25)
- `sitemap.xml`
- `robots.txt`
- Os JSON-LD de Structured Data

### 4. Cidade/localidade (SEO local)
Adicione a cidade da Jordana nos JSON-LD de estrutura (BeautySalon > address).

---

## 🚀 Como rodar localmente

```bash
cd jordana/
python3 -m http.server 8080
# Abrir: http://localhost:8080
```

Ou simplesmente abra `index.html` no navegador (funciona para ver, mas módulos JS podem ter limitações).

---

## 🌐 Deploy

**Netlify (recomendado — grátis):**
1. Acesse app.netlify.com
2. Arraste a pasta `jordana/` inteira
3. Pronto — URL automática em segundos

**GitHub Pages:**
1. Suba a pasta para um repositório GitHub
2. Settings → Pages → Branch: main / root

**FTP/Hospedagem tradicional:**
- Suba todo o conteúdo da pasta para `public_html/`

---

## ✅ O que já está implementado (v2.0)

- ✅ Fotos reais da Jordana em todas as seções
- ✅ 5 pares antes/depois reais na galeria
- ✅ FAQ com 6 perguntas + accordion JS + schema FAQPage (rich snippets)
- ✅ JSON-LD BeautySalon + Person + FAQPage
- ✅ Seção FAQ com schema para rich snippets no Google
- ✅ sitemap.xml + robots.txt
- ✅ Meta title e description com keywords de procedimentos
- ✅ Open Graph e Twitter Card
- ✅ WhatsApp FAB fixo (botão flutuante)
- ✅ Nav fixa com scroll state
- ✅ Photo strip decorativa com fotos reais
- ✅ Scroll animations (fade-up com IntersectionObserver)
- ✅ Lazy loading de imagens
- ✅ width/height em todas as imagens (anti-CLS)
- ✅ fetchpriority="high" no hero
- ✅ Mobile-first, responsivo até 1200px
- ✅ Accessibility: ARIA roles, labels, focus-visible

