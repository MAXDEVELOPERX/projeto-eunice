import fs from "node:fs";

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const model = "@cf/bytedance/stable-diffusion-xl-lightning";

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
  const spinner = startSpinner("Gerando imagem");

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/${model}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json", // ✅ JSON aqui
      },
      body: JSON.stringify({ // ✅ JSON.stringify, não FormData
        prompt: "Ultra realistic photo of a futuristic sneaker on a glass table, premium studio lighting, dark minimalist background, product advertisement style, high quality",
        negative_prompt: "blurry, distorted, bad anatomy, low quality, watermark, text",
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
    console.error("❌ Erro da API:", response.status, errorText);
    return;
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync("imagem-cloudflare.jpg", buffer);
  console.log("✅ Imagem salva como imagem-cloudflare.jpg");
}

generateImage().catch(console.error);