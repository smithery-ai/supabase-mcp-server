# Supabase MCP Server
[![smithery badge](https://smithery.ai/badge/@joshuarileydev/supabase-mcp-server)](https://smithery.ai/server/@joshuarileydev/supabase-mcp-server)

A Model Context Protocol (MCP) server that provides programmatic access to the Supabase Management API. This server allows AI models and other clients to manage Supabase projects and organizations through a standardized interface.

## Features

### Project Management
- List all projects
- Get project details
- Create new projects
- Delete projects
- Retrieve project API keys

### Organization Management
- List all organizations
- Get organization details
- Create new organizations

## Installation

### Installing via Smithery

To install Supabase Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@joshuarileydev/supabase-mcp-server):

```bash
npx -y @smithery/cli install @joshuarileydev/supabase-mcp-server --client claude
```

### Manual Installation
Add the following to your Claude Config JSON file
```
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": [
        "y",
        "@joshuarileydev/supabase-mcp-server"
      ],
      "env": {
        "SUPABASE_API_KEY": "API_KEY_HERE"
      }
    }
  }
}
```