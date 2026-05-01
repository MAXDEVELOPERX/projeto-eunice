import fs from "node:fs";
import path from "node:path";

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID ?? process.env.CloudflareIDAccount;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN ?? process.env.CloudflareAPIToken;
const model = "@cf/bytedance/stable-diffusion-xl-lightning";

const args = process.argv.slice(2);
const outputIndex = args.indexOf("--output");
const promptIndex = args.indexOf("--prompt");

const output = outputIndex >= 0 ? args[outputIndex + 1] : "public/eunice-hero.jpg";
const prompt = promptIndex >= 0
  ? args[promptIndex + 1]
  : "Minimal pastel 3D illustration of a friendly text to speech web app interface, soft cream background, lavender and mint audio waves, rounded glass cards, elegant product design, no text, clean composition, high quality";

function startSpinner(mensagem = "Gerando imagem") {
  const frames = ["/", "-", "\\", "|"];
  let i = 0;
  return setInterval(() => {
    process.stdout.write(`\r${frames[i % frames.length]} ${mensagem}...`);
    i++;
  }, 100);
}

function stopSpinner(spinner) {
  clearInterval(spinner);
  process.stdout.write("\r");
}

async function generateImage() {
  if (!ACCOUNT_ID || !API_TOKEN) {
    throw new Error("Defina CLOUDFLARE_ACCOUNT_ID e CLOUDFLARE_API_TOKEN antes de gerar imagens.");
  }

  const spinner = startSpinner("Gerando imagem");

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/${model}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        negative_prompt: "text, watermark, logo, blurry, distorted, bad anatomy, low quality, noisy, harsh neon, dark cyberpunk",
        num_steps: 20,
        guidance: 7.5,
        width: 1024,
        height: 1024,
      }),
    }
  );

  stopSpinner(spinner);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro da API: ${response.status} ${errorText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, buffer);
  console.log(`✅ Imagem salva como ${output}`);
}

generateImage().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
