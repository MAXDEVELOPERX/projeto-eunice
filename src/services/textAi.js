export const TEXT_AI_PROVIDER = {
  name: 'GitHub Models',
  model: 'openai/gpt-5-nano',
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
