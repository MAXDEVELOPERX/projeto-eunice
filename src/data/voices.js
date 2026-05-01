export const providers = [
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    model: 'eleven_flash_v2_5',
    description: 'Rápido, natural e ideal para a voz principal Eunice.',
  },
  {
    id: 'cartesia',
    name: 'Cartesia',
    model: 'economy',
    description: 'Opção econômica para gerações longas e testes frequentes.',
  },
]

export const voices = [
  { id: 'eunice', name: 'Eunice', tone: 'Suave e acolhedora', provider: 'elevenlabs' },
  { id: 'aurora', name: 'Aurora', tone: 'Calma para leituras longas', provider: 'elevenlabs' },
  { id: 'lia', name: 'Lia', tone: 'Jovem, leve e natural', provider: 'cartesia' },
  { id: 'helena', name: 'Helena', tone: 'Elegante, pausada e firme', provider: 'elevenlabs' },
  { id: 'cora', name: 'Cora', tone: 'Narrativa para histórias', provider: 'cartesia' },
  { id: 'milo', name: 'Milo', tone: 'Masculina suave e amigável', provider: 'cartesia' },
  { id: 'noah', name: 'Noah', tone: 'Neutra e profissional', provider: 'elevenlabs' },
  { id: 'theo', name: 'Theo', tone: 'Didática para estudos', provider: 'cartesia' },
]

export const narrationStyles = ['Natural', 'Calmo', 'Didático', 'Narrativo', 'Profissional']
