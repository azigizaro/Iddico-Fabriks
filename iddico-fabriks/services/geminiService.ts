
import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are Iddico, the intelligent virtual assistant for "Iddico Fabriks". 
Your tone is elegant, professional, and extremely helpful. 
You are an expert in all things textiles, including:
1. Fabric types (Silk, Cotton, Linen, Wool, African Prints, etc.)
2. Fabric care and maintenance.
3. Fashion design advice (choosing the right fabric for a specific garment).
4. Interior design advice (curtains, upholstery).
5. Information about Iddico Fabriks (we pride ourselves on premium quality and ethical sourcing).

If a customer asks about specific products, refer to our categories: Silk, Egyptian Cotton, Belgian Linen, and authentic Ankara Prints.
Always keep responses concise and tailored to fabric enthusiasts.
`;

export class GeminiService {
  private ai: GoogleGenAI;
  private chat: Chat;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    this.chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const response = await this.chat.sendMessage({ message });
      return response.text || "I'm sorry, I couldn't process that. Could you try again?";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm currently having a bit of a snag with my connections. Please try again in a moment.";
    }
  }
}

export const geminiService = new GeminiService();
