---
sidebar_position: 1
---

# genius.conf

Global configuration options for Genius

<details>

<summary>Default genius.conf</summary>

```hocon title="/plugins/Genius/genius.conf"
# *****************************************
# *         Genius Configuration          *
# *****************************************
# For reference, see https://fletchly.github.io/genius-wiki/docs/setup/configuration/genius-conf

# Properties for the agent's appearance and behavior
display {
  # The name used when displaying messages from the agent in chat
  agent-name=Genius
  # The prefix used when displaying messages from the agent in chat
  agent-prefix="💡"
  # The prefix used when displaying messages from players in chat
  player-prefix="👤"
}
# Ollama client configuration
ollama {
  # The base URL for the Ollama API. For more info, see https://fletchly.github.io/genius-wiki/docs/setup/hosting
  base-url="https://ollama.com"
  # Your key for the Ollama cloud API. This only needs to be set if you are using an Ollama cloud model.
  api-key=""
  # The name of the model to use for response generation.
  model="deepseek-v3.1:671b"
  # Controls how random or deterministic the output is.
  temperature=0.5
  # Restricts sampling to the K most probable next tokens, making output more focused (low values) or more creative (high values).
  top-k=40
  # Limits sampling to the smallest group of likely next tokens that together reach probability P, for more focused (low P) or creative (high P) output.
  top-p=0.85
  # Sets the maximum number of tokens the model can generate in its response (higher values allow longer outputs; lower values keep them shorter)
  num-predict=400
}
# Context store configuration
context {
  # Maximum number of messages per player to store at one time
  max-player-messages=20
}
# Don't change this. Doing so could overwrite existing config
version=0
```

</details>

## display

Properties for the agent's appearance and behavior

### `display.agent-name`

The name used when displaying messages from the agent in chat

- **Type:** `string`
- **Default:** `Genius`

### `display.agent-prefix`

The prefix used when displaying messages from the agent in chat

- **Type:** `string`
- **Default:** `💡`

### `display.player-prefix`

The prefix used when displaying messages from the agent in chat

- **Type:** `string`
- **Default:** `👤`

## ollama

Ollama client configuration

### `ollama.base-url`

The base URL for the Ollama API. If using a cloud model, this should be set to `https://ollama.com/`. Defaults to the Ollama API's default listening location. For more info, see [the hosting guide](../hosting.md#choosing-a-hosting-strategy)

- **Type:** `string`
- **Default:** `http://localhost:11434/`

### `ollama.api-key`

Your key for the Ollama cloud API. This only needs to be set if you are using an Ollama cloud model. For more info, see [the hosting guide](../hosting.md#choosing-a-hosting-strategy)

- **Type:** `string`
- **Default:** `(blank)`

### `ollama.model`

The name of the model to use for response generation. If you are using Ollama cloud, the model _must_ be an [ollama cloud model](https://docs.ollama.com/cloud#cloud-models)

- **Type:** `string`
- **Default:** `deepseek-v3.1:671b`

### `ollama.temperature`

Controls how random or deterministic Genius's output is. Lower values make responses more predictable and precise, while higher values make them more creative and varied.

- **Type:** `number`
- **Default:** `0.5`

### `ollama.top-k`

Top-K sampling limits the model’s next-token choices to the K most likely options, filtering out all others. This reduces randomness while still allowing some creativity compared to always picking the single most probable token.

- **Type:** `integer`
- **Default:** `40`

### `ollama.top-p`

Top-P controls how many likely tokens the model considers when generating text. Lower values make output more focused and predictable, while higher values allow more randomness and creativity.

- **Type:** `number`
- **Default:** `0.85`

### `ollama.num-predict`

The number of predictions (max output tokens) controls how much text the model is allowed to generate. A lower limit keeps responses short and concise, while a higher limit allows longer, more detailed answers.

- **Type:** `integer`
- **Default:** `400`

## context

Context store configuration

### `context.max-player-messages`

Maximum number of messages to store per player. A higher limit will allow players to continue conversations for longer, however this could cause performance impacts with high player counts.

- **Type:** `integer`
- **Default:** `20`

## version

Config version used internally by Genius.

**Do not change this value.** Any changes will likely result in your config getting overwritten/not updating correctly in the future.
