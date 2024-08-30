import { GoogleGenerativeAI } from "@google/generative-ai";

// const API_KEY = "AIzaSyD8P3sgaJEzGGsi6Y-rAtm8gobDETLWjKU";
const API_KEY = "AIzaSyDutIptXVtQwUDkJKnZjI4ImyoA1wXueXc";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig,

  history: [],
});
