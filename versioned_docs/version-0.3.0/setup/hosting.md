---
sidebar_postition: 3
---

# Hosting

Choose a hosting strategy for Genius

## Choosing a Hosting Strategy

Genius uses the [Ollama chat API](https://docs.ollama.com/api/introduction), giving you two hosting options:

- **Cloud hosting on ollama.com (recommended)** - Free with generous usage limits, no server performance impact
- **Self-hosting** - Requires dedicated infrastructure; running Ollama on your Minecraft server can have significant performance impacts

**Recommendation:** Use cloud hosting unless you have dedicated infrastructure for self-hosting.

## Setup Instructions

### Cloud Hosting (ollama.com)

1. **Get your API key:**

   - Go to [ollama.com](https://ollama.com/) and sign in or create an account
   - Navigate to [Profile > Settings > Keys](https://ollama.com/settings/keys)
   - Click "Add API Key", enter a name, and copy the generated key

2. **Configure the plugin:**

   - Open `plugins/Genius/config.yml` on your server
   - Set [`ollama.base-url`](configuration/genius-conf.md#ollamabase-url) to `https://ollama.com/`
   - Set [`ollama.api-key`](configuration/genius-conf.md#ollamaapi-key) to your API key from step 1
   - _(Optional)_ Change [`ollama.model`](configuration/genius-conf.md#ollamamodel) to a different [cloud model](https://docs.ollama.com/cloud#cloud-models) (default is `deepseek-v3.1:671b`)

3. **Restart your server** to apply the changes

### Self-Hosting

1. **Install Ollama:**

   - Follow the [official quickstart guide](https://docs.ollama.com/quickstart) to install Ollama on your machine
   - Pull the model you want to use (Genius does not pull models automatically)

2. **Configure the plugin:**

   - Open `plugins/Genius/config.yml` on your server
   - Verify [`ollama.base-url`](configuration/genius-conf.md#ollamabase-url) matches your Ollama instance URL
   - Set [`ollama.model`](configuration/genius-conf.md#ollamamodel) to the model you pulled

3. **Restart your server** to apply the changes
