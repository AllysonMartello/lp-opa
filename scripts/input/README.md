# scripts/input/

Coloque aqui os arquivos **originais** das imagens (qualidade máxima, qualquer formato que o sharp aceite: JPG, PNG, WebP, TIFF).

O script `optimize-images.mjs` lê esta pasta e gera as variantes otimizadas (AVIF + WebP + JPG, em múltiplos tamanhos) na pasta correta de produção.

## Lista esperada de arquivos

Os nomes precisam bater **exatamente** com o que está abaixo. Se você nomeou diferente, renomeie antes de rodar.

### Hero (LCP — prioridade máxima)
- `hero.jpg` — foto do hero, idealmente já em **resolução 1920×1080 ou maior**

### Zoom Parallax (7 imagens)
- `efeito-1.jpg`
- `efeito-2.jpg`
- `efeito-3.jpg`
- `efeito-4.jpg`
- `efeito-5.jpg`
- `efeito-6.jpg`
- `efeito-7.jpg`

### Bento Gallery "A Casa" (7 imagens)
- `vista-mar.jpg`
- `area-externa.jpg`
- `ambientes-integrados.jpg`
- `luz-natural.jpg`
- `piscina-deck.jpg`
- `pavimento-2.jpg`
- `estrutura.jpg`

### Experience (3 imagens)
- `manha.jpg`
- `tarde.jpg`
- `noite.jpg`

### Location (acordeon, 7 imagens — 1 versão só)
- `viana.jpg`
- `siriuba.jpg`
- `siriuba-drone.jpg`
- `armacao.jpg`
- `bl3.jpg`
- `vila.jpg`
- `vila-opa.jpg`

### Singles
- `tour-preview.jpg` — thumbnail do tour Matterport (1280×720 ideal)
- `map-static.jpg` — screenshot/render do Google Maps (1280×1600)
- `marco.jpg` — foto do Marco Henrique (400×400, quadrada)
- `og-image.jpg` — imagem para compartilhamento social (**1200×630 obrigatório**)

## Como rodar

```bash
# Dry run (mostra o que faria, não escreve nada)
npm run optimize-images:dry

# Rodar de verdade (skip se já otimizou)
npm run optimize-images

# Force (reprocessa tudo)
npm run optimize-images:force

# Só um grupo
node scripts/optimize-images.mjs --only=hero
node scripts/optimize-images.mjs --only=efeito
node scripts/optimize-images.mjs --only=bento
node scripts/optimize-images.mjs --only=experience
node scripts/optimize-images.mjs --only=location
node scripts/optimize-images.mjs --only=single
```

## Quality settings

Editáveis no topo do `optimize-images.mjs`:

- **AVIF**: quality 50 (excelente para foto)
- **WebP**: quality 75
- **JPG**: quality 80, mozjpeg, progressive

## Output

```
siriuba-2/public/assets/siriuba-2/
├── hero-mobile.{avif,webp,jpg}      ← 640px
├── hero-tablet.{avif,webp,jpg}      ← 1024px
├── hero-desktop.{avif,webp,jpg}     ← 1920px
├── efeito-1-mobile.{avif,webp,jpg}  ← 640px
├── efeito-1-desktop.{avif,webp,jpg} ← 1280px
├── ...
├── viana.{avif,webp,jpg}            ← 1280px (sem sufixo, 1 versão só)
└── ...
```
