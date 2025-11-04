# 🚀 Guia de Deploy no Render

## Passo a Passo

### 1. Preparar o Repositório

Certifique-se de que todas as alterações estão commitadas:

```bash
git add .
git commit -m "Configuração para deploy no Render"
git push origin feature/quebra-cabeca-jogo
```

### 2. Acessar o Render

1. Acesse [https://render.com](https://render.com)
2. Faça login ou crie uma conta gratuita
3. Conecte sua conta do GitHub

### 3. Criar o Static Site

1. No Dashboard do Render, clique em **"New +"**
2. Selecione **"Static Site"**
3. Escolha o repositório: **jogo-memoria-autores**
4. Configure:
   - **Name**: `jogo-memoria-autores` (ou o nome que preferir)
   - **Branch**: `feature/quebra-cabeca-jogo` (ou `main` após merge)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
   - **Auto-Deploy**: Yes (recomendado)

5. Clique em **"Create Static Site"**

### 4. Configuração Automática (Opcional)

Se você criou o arquivo `render.yaml` na raiz do projeto, o Render detectará automaticamente as configurações. Neste caso:

1. Clique em **"New +"**
2. Selecione **"Blueprint"**
3. Escolha o repositório
4. O Render lerá o `render.yaml` e configurará tudo automaticamente

### 5. Aguardar o Deploy

- O primeiro deploy pode levar 2-5 minutos
- Você verá os logs em tempo real
- Quando terminar, receberá uma URL como: `https://jogo-memoria-autores.onrender.com`

## ✅ Verificações Pós-Deploy

Após o deploy bem-sucedido, teste:

1. **Página inicial**: Menu de seleção dos jogos
2. **Jogo da Memória**: `/memoria` - Todas as cartas carregando
3. **Quebra-Cabeça**: `/puzzle` - Peças embaralhando e encaixando
4. **Navegação**: Voltar para o menu funciona
5. **Responsividade**: Teste em mobile e desktop

## 🔧 Troubleshooting

### Erro de Build

Se o build falhar:
```bash
# Teste localmente primeiro
npm run build

# Verifique se todos os arquivos estão commitados
git status
```

### Página 404

Se aparecer erro 404 ao navegar:
- Verifique se o arquivo `static/_redirects` existe
- Confirme que contém: `/*    /index.html   200`

### Assets não carregam

Se imagens/SVGs não aparecerem:
- Verifique a pasta `static/` no repositório
- Confirme que os caminhos em `src` estão corretos (começando com `/`)

## 🎯 URLs Importantes

Após o deploy, você terá:
- **URL do Site**: `https://seu-projeto.onrender.com`
- **Dashboard**: Para ver logs e configurações
- **Auto-deploy**: Cada push na branch configurada fará deploy automático

## 💡 Dicas

1. **Branch de Produção**: Após aprovação, faça merge para `main` e configure o Render para usar essa branch
2. **Custom Domain**: No Render, você pode adicionar um domínio personalizado gratuitamente
3. **HTTPS**: O Render fornece HTTPS automaticamente
4. **Cache**: O `render.yaml` já está configurado com cache de 1 hora para assets

## 📊 Monitoramento

No Dashboard do Render você pode:
- Ver logs de build e runtime
- Acompanhar uso de recursos
- Configurar notificações
- Ver histórico de deploys
