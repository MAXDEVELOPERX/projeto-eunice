export const TTS_PROVIDERS = {
  elevenlabs: {
    name: 'ElevenLabs',
    defaultModel: 'eleven_flash_v2_5',
    supportsAlignment: true,
  },
  cartesia: {
    name: 'Cartesia',
    defaultModel: 'economy',
    supportsAlignment: true,
  },
}

export function normalizeAlignment(words = []) {
  return words.map((item, index) => ({
    id: `${item.word}-${index}`,
    word: item.word,
    start: item.start,
    end: item.end,
  }))
}
