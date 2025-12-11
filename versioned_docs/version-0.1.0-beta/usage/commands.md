---
sidebar_position: 1
---

# Commands

Genius plugin commands

## Basic Commands

### `/ask`

**Alias:** `/g`

**Description:** Ask Genius a question

**Permission:** `genius.ask`

**Usage:**

```minecraft
/ask <prompt>
```

**Arguments:**

- `<prompt>` - Prompt to send Genius

**Example:**

```minecraft
/ask How do I craft a chest?
/g What's the best level for mining diamonds?
```

## Admin commands

### `/genius clear`

**Description:** Clear conversation context. Clears context for all players if no player is specified

**Permission:** `genius.manage`

**Usage:**

```minecraft
/genius clear [player]
```

**Arguments:**

- `[player]` - Player to clear conversation context for

**Example:**

```minecraft
/genius clear fletchly
/genius clear
```
