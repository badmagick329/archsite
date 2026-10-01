<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Response Discipline

Keep answers tightly scoped to the user's actual question.

- Do not add extra framing, justification, or side commentary unless it directly answers the request.
- Do not introduce cautions, alternatives, or edge-case advice unless the user asked for them or they are necessary to avoid a meaningful mistake.
- Prefer short prose over bullets when the question is simple.
- Do not pad responses with reasons why something is good, bad, or sensible unless the user explicitly asks for evaluation.
- Optimize for directness: answer first, stop when the user's question has been satisfied.
