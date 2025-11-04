# Jogo da Memória - Autores Brasileiros

Jogo educativo interativo com dois mini-games: Jogo da Memória e Quebra-Cabeça, focado em autores brasileiros.

## 🎮 Funcionalidades

- **Jogo da Memória**: Encontre os pares de cartas com autores brasileiros
- **Quebra-Cabeça**: Monte a imagem arrastando as peças (grade 3x3)
- Interface responsiva e animada
- Design moderno com Tailwind CSS v4

## 🚀 Deploy no Render

### Opção 1: Deploy Automático (Recomendado)

1. Faça login no [Render](https://render.com)
2. Clique em "New +" e selecione "Static Site"
3. Conecte seu repositório GitHub
4. O Render vai detectar automaticamente as configurações do `render.yaml`
5. Clique em "Create Static Site"

### Opção 2: Configuração Manual

Se preferir configurar manualmente:

- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `build`
- **Node Version**: 20

### Variáveis de Ambiente

Nenhuma variável de ambiente é necessária para este projeto.

## 💻 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 🛠️ Tecnologias

- **SvelteKit**: Framework principal
- **TypeScript**: Tipagem estática
- **Tailwind CSS v4**: Estilização
- **Vite**: Build tool
- **adapter-static**: Deploy estático

## 📁 Estrutura do Projeto

```
src/
  ├── routes/
  │   ├── +page.svelte          # Menu principal
  │   ├── memoria/              # Jogo da Memória
  │   └── puzzle/               # Quebra-Cabeça
  ├── lib/
  │   ├── components/           # Componentes reutilizáveis
  │   └── utils/                # Utilitários
  └── static/                   # Assets estáticos
```

## 🔧 Configuração do Render

O projeto inclui um arquivo `render.yaml` com todas as configurações necessárias:

- Cache de 1 hora para assets estáticos
- Fallback para `index.html` (SPA routing)
- Preview de Pull Requests habilitado

## 📝 Notas

- O projeto usa `adapter-static` do SvelteKit
- Todas as rotas são pre-renderizadas durante o build
- Compatível com qualquer plataforma de hosting estático (Netlify, Vercel, Render, etc.)

