# Projeto Eunice

Projeto Eunice é uma interface open-source de text-to-speech feita com React, Vite e Tailwind CSS.

## Recursos planejados

- Landing page pastel minimalista
- Dashboard para criar áudios por texto, PDF ou link
- Voz principal Eunice e vozes fictícias adicionais
- IA de limpeza de texto via GitHub Models (`deepseek/DeepSeek-V3-0324`)
- Suporte planejado a ElevenLabs (`eleven_flash_v2_5`) e Cartesia econômica
- Player com acompanhamento de texto estilo karaoke
- Libraries para organizar áudios, textos e metadados

## Rodando localmente

```bash
npm install
npm run dev
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha as chaves necessárias quando as integrações reais forem implementadas.

```bash
cp .env.example .env
```

Nunca publique chaves de API no repositório.
