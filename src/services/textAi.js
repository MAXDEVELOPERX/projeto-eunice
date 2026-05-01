export const TEXT_AI_PROVIDER = {
  name: 'GitHub Models',
  model: 'deepseek/DeepSeek-V3-0324',
}

export async function cleanTextForNarration(text) {
  const normalized = text
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.!?;:])/g, '$1')
    .trim()

  return {
    text: normalized,
    provider: TEXT_AI_PROVIDER.name,
    model: TEXT_AI_PROVIDER.model,
  }
}

export async function generateAudioTitle(text) {
  const clean = text.replace(/\s+/g, ' ').trim()
  const firstSentence = clean.split(/[.!?]/).find(Boolean) ?? clean
  const words = firstSentence.split(' ').filter(Boolean).slice(0, 8)
  const title = words.join(' ').replace(/[,;:]$/g, '')

  return {
    title: title || 'Nova leitura com Eunice',
    provider: TEXT_AI_PROVIDER.name,
    model: TEXT_AI_PROVIDER.model,
  }
}
