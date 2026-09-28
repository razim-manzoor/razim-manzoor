# Agent Memory & Second Brain Protocol

This project uses an Obsidian-backed external memory layer located at `.brain/` (linked to `$AGENT_VAULT/projects/thaklis/`).

### Before Starting Any Task
1. Read `.brain/state.md` to identify the active objective, branch, and blockers.
2. Respect the 2-tier context law: DO NOT scan the entire `.brain/` folder. Only read files linked under `Active References`.
3. Check code state with `git status`.

### When Pausing, Hitting Token/Rate Limits, or Finishing
1. Update `.brain/state.md` with checked-off items and new immediate actions.
2. If pausing or handing off to another agent, generate a handoff note in `.brain/handoffs/YYYY-MM-DD_<task_slug>.md`.
3. Set `current_driver: "None"` in `state.md`.

### Architecture Rules
- Architectural decisions in `.brain/adr/` are permanent. Do not change architectural patterns without explicit user consent.

