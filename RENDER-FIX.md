# ⚠️ SOLUÇÃO PARA ERRO NO RENDER

## Problema Identificado

O Render está executando `npm run dev` (servidor de desenvolvimento) ao invés de servir os arquivos estáticos buildados.

**Erro:** "Blocked request. This host is not allowed"

## ✅ Solução Aplicada

### Correções Feitas no Projeto:

1. **Removido `+page.server.ts` da raiz** - A página inicial agora é totalmente estática
2. **Criado `+page.ts` na raiz** - Garante pré-renderização da página inicial
3. **Build gera corretamente:**
   - `build/index.html` - Página de seleção de jogos ✅
   - `build/memoria.html` - Jogo da Memória ✅
   - `build/puzzle.html` - Quebra-Cabeça ✅

## 🚀 Deploy no Render (Correto)

### Passo 1: Deletar o Serviço Atual (se criou errado)

1. Vá para o Dashboard do Render
2. Selecione o serviço `jogo-memoria-autores`
3. Vá em **Settings** → **Danger Zone**
4. Clique em **Delete Service**

### Passo 2: Criar Novo Static Site

1. Faça commit e push das alterações:
```bash
git add .
git commit -m "Fix: Página inicial estática para Render"
git push origin feature/quebra-cabeca-jogo
```

2. No Dashboard do Render, clique em **"New +"**
3. **IMPORTANTE:** Selecione **"Static Site"** (NÃO "Web Service")
4. Conecte o repositório GitHub: **jogo-memoria-autores**
5. Configure EXATAMENTE assim:

```
Name: jogo-memoria-autores
Branch: feature/quebra-cabeca-jogo
Root Directory: (deixe em branco)
Build Command: npm ci && npm run build
Publish Directory: build
Auto-Deploy: Yes
```

6. Clique em **"Create Static Site"**

### Passo 3: Aguardar Build

- O build vai executar `npm ci && npm run build`
- Vai gerar os arquivos na pasta `build/`
- O Render vai servir esses arquivos estáticos
- **NÃO** vai executar `npm run dev`

## 🎯 Diferença entre Web Service e Static Site

### ❌ Web Service (O QUE FOI CRIADO - ERRADO)
- Executa um servidor Node.js
- Roda `npm run dev` ou `npm start`
- Precisa de um processo rodando constantemente
- Causa o erro "host not allowed"

### ✅ Static Site (O QUE DEVE SER - CORRETO)
- Serve arquivos HTML/CSS/JS estáticos
- Não executa nenhum comando após o build
- Apenas serve a pasta `build/` via CDN
- Funciona perfeitamente com SvelteKit + adapter-static

## 📋 Checklist

Antes de criar o Static Site, confirme:
- [ ] Tem o arquivo `svelte.config.js` usando `adapter-static`
- [ ] Tem a pasta `static/_redirects` com `/* /index.html 200`
- [ ] O `package.json` tem o script `build`
- [ ] Vai criar **Static Site**, não Web Service

## 🔍 Como Verificar se Está Correto

Após criar, no painel do Render você deve ver:
- **Type:** Static Site (não Web Service)
- **Build logs:** Mostra `npm ci && npm run build`
- **Deploy status:** "Your site is live" (não "Your service is live")
- **URL funciona:** Sem erros de host

## 💡 Observação

O arquivo `render.yaml` pode ser ignorado por enquanto. A configuração manual via interface do Render é mais confiável para Static Sites.
