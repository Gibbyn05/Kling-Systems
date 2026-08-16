---
name: autoae
description: Use AutoAE when the user wants to find or customize a video template for an animated segment—such as an intro, outro, transition, title, lower third, logo animation, or product showcase—using their own text, images, or videos; or wants to preview, render, download, inspect Credits, or report feedback in an existing AutoAE workflow.
---

# AutoAE

Use the exact Skill-compatible CLI. Node.js 24 or newer is required.

```sh
npx --yes @autoae/cli@0.2.0 --help
```

The user authorizes AutoAE in their browser. Never ask for, read, list, copy, print, or modify
passwords, Web cookies, access/refresh tokens, signed URLs, or credential storage; use the CLI
`auth` commands only.

This Skill is not for ordinary full-video editing or generation, and not for stock-footage
searches.

Treat “motion graphics” only as auxiliary wording for the animated template segments described
above; it does not broaden AutoAE into a full-video creation tool.

Fetch the current remote body from this environment, then route to the smallest relevant branch:

```text
https://autoae.online/.well-known/agent-skills/body.md
```

Before any mutating submission, load the relevant current branch and follow its one-submit and
ambiguous-response safety rules. Do not invent commands that AutoAE does not document.
