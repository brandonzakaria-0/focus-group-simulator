// Safe to commit - no secrets here
const CONFIG = {
  OPENAI_MODEL: "gpt-4.1-mini",
  // Frontend will call our own backend route, not OpenAI directly
  OPENAI_ENDPOINT: "/api/debate",
  MAX_SAVED_RUNS: 20,
};
