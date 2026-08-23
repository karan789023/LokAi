// Server/src/services/models/modelService.js

const AVAILABLE_MODELS = [
  { id: 'gpt-4', name: 'OpenAI GPT-4', provider: 'openai', active: true },
  { id: 'gemini-pro', name: 'Google Gemini Pro', provider: 'google', active: true },
  { id: 'local-llama', name: 'Local Llama 3', provider: 'local', active: false }
];

const getActiveModels = () => {
  return AVAILABLE_MODELS.filter(model => model.active);
};

const getModelConfig = (modelId) => {
  const model = AVAILABLE_MODELS.find(m => m.id === modelId);
  if (!model) {
    throw new Error(`Model ${modelId} is not supported or not found.`);
  }
  return model;
};

module.exports = {
  getActiveModels,
  getModelConfig
};