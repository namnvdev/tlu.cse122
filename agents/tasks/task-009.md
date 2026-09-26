# TASK-009 — Generate Lecture 09

## Goal

Generate Lecture 09 for CSE122.

Output:

`lectures/lecture-09/`

## Read First

Read and follow:

1. `AGENTS.md`
2. `course-plan.md`
3. root `index.html`
4. existing Lectures 01–08
5. existing demos

`course-plan.md` defines Lecture 09 content and Official References.

Use completed Lectures as implementation references.

## Requirements

- Implement exactly Lecture 09 from `course-plan.md`.
- Cover all 3 periods completely.
- Do not repeat Course Home content.
- Do not move Lecture 10 content into Lecture 09.
- Follow all global rules from `AGENTS.md`.
- Keep async/API examples technically correct.
- Never expose secrets or API keys in demos.
- Preserve the existing UI.
- Use `/assets/`; no `/agents/` runtime dependency.

## Demos & Teaching Notes

Apply the Runnable Demos & Teaching Notes rules from `AGENTS.md`.

Create appropriate runnable demos under:

`demos/lecture-09/`

Create:

`lectures/lecture-09/teaching-notes.md`

Link relevant slides to runnable demos.

## Integration

Update root `index.html`:
- activate Lecture 09
- link to `lectures/lecture-09/index.html`

Navigation:
- Course Home
- Previous → Lecture 08
- Next → Lecture 10

## Verify

Verify content, technical correctness, Vietnamese-first content,
runnable demos, teaching notes, official references, navigation
and responsive layout.