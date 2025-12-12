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

### `/genius clear`

**Description:** Clear conversation context. If no player/selector is given, the command will clear the conversation context for the player sending the command.

**Permissions:**

- `genius.manage.clear.self` - Clear own conversation history
- `genius.manage.clear.any` - Clear converation for any player

**Usage:**

```minecraft
/genius clear [player]
```

**Arguments:**

- `[player]` - Player/selector to clear conversation context for.

**Example:**

```minecraft
/genius clear fletchly
/genius clear
/genius clear @a
```

### `/genius info`

**Description:** Get information on Genius. Displays the agent name, model, and (if executed by player) current context used

**Permission:** `genius.manage.info`

**Usage:**

```minecraft
/genius info
```
