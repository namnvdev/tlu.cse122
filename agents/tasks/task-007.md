# TASK-007 — Generate Lecture 07

## Goal

Generate Lecture 07 for CSE122.

Output:

`lectures/lecture-07/`

## Read First

Read and follow:

1. `AGENTS.md`
2. `course-plan.md`
3. root `index.html`
4. existing Lectures 01–06
5. existing demos

`course-plan.md` is the source of truth for Lecture 07.

Use completed Lectures as implementation references.

## Requirements

- Implement exactly Lecture 07 from `course-plan.md`.
- Cover all 3 periods completely.
- Do not repeat Course Home content.
- Do not move Lecture 08 content into Lecture 07.
- Follow all global rules from `AGENTS.md`.
- Keep code examples technically correct and readable.
- Preserve the existing design and slide system.
- Use `/assets/`; no `/agents/` runtime dependency.

## Demos & Teaching Notes

Apply the Runnable Demos & Teaching Notes rules from `AGENTS.md`.

Create appropriate runnable demos under:

`demos/lecture-07/`

Create:

`lectures/lecture-07/teaching-notes.md`

Link relevant student-facing slides to runnable demos.

## Integration

Update root `index.html`:
- activate Lecture 07
- link to `lectures/lecture-07/index.html`

Navigation:
- Course Home
- Previous → Lecture 06
- Next → Lecture 08 when appropriate

## Verify

Verify content, language, code, demos, teaching notes,
official references, navigation, responsiveness and consistency.