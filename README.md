# 🎮 Genshin Codex

Aplicação web para visualização de informações de jogadores de Genshin Impact.

> ⚠️ **Status:** Projeto em desenvolvimento inicial - Interface visual pronta, integração com API em progresso.

## 📸 Preview

### Tela de Login
- Fundo animado com estrelas piscantes usando Canvas
- Campo para inserção de UID
- Design responsivo com glass morphism

### Tela Home (Dashboard)
- Layout com sidebar lateral
- Card de perfil do jogador
- Estatísticas (Conquistas, Abismo, Showcase)
- Grid de personagens em destaque
- Menu de acesso rápido

## 🚀 Tecnologias

- **Next.js 14+** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **CSS Modules** - Estilização componentizada e escopada
- **HTML Canvas** - Animações de background

## 📋 Pré-requisitos

- Node.js 18+
- npm, yarn, ou pnpm

## 🔧 Instalação e Execução

1. **Clone o repositório:**
```bash
https://github.com/lourencolia/genshin-codex.git
cd genshin-codex
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Abra no navegador:**
```
http://localhost:3000
```

## ✨ Funcionalidades Atuais

- ✅ Tela de login com animação de estrelas
- ✅ Dashboard com layout responsivo
- ✅ Sidebar de navegação
- ✅ Cards de estatísticas (dados mockados)
- ✅ Grid de personagens (dados mockados)
- ✅ Design adaptável para mobile e desktop

## 🚧 Em Desenvolvimento

- ⏳ Integração com API do Genshin Impact
- ⏳ Sistema de autenticação
- ⏳ Busca de jogadores por UID
- ⏳ Exibição de dados reais dos personagens
- ⏳ Detalhes de builds e artefatos
- ⏳ Páginas adicionais (Personagens, Builds, Artefatos, Mapa)

## 🛠️ Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento (localhost:3000)
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa o linter
```

## 🎨 Design

O projeto utiliza:
- **Glass morphism** nos cards
- **Background animado** com Canvas API
- **Gradientes escuros** para tema gaming
- **CSS Modules** para isolamento de estilos
- **Responsividade** mobile-first

## 📝 Roadmap

### Fase 1 (Atual) - Interface ✅
- [x] Tela de login
- [x] Dashboard principal
- [x] Componentes visuais básicos

### Fase 2 - Integração
- [ ] Conectar com API Enka.Network ou HoYoLab
- [ ] Buscar dados reais por UID
- [ ] Exibir informações do perfil

### Fase 3 - Funcionalidades
- [ ] Página de personagens detalhada
- [ ] Sistema de builds recomendadas
- [ ] Histórico de Abismo Espiral

### Fase 4 - Extras
- [ ] Sistema de favoritos

## 🤝 Contribuindo

Este é um projeto pessoal em desenvolvimento, mas contribuições são bem-vindas!

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é open source para fins educacionais.

## 📧 Contato

Caso tenha dúvidas ou sugestões, abra uma issue no GitHub!

---

⭐ Se você gostou do projeto, deixe uma estrela no repositório!