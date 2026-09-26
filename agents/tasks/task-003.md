# TASK-003 — Generate Lecture 03

## Goal

Generate Lecture 03 for CSE122.

Output:

`lectures/lecture-03/`

## Read First

Before implementation, read and follow:

1. `AGENTS.md`
2. `course-plan.md`
3. root `index.html`
4. existing Lectures 01–02
5. existing demos

`course-plan.md` is the source of truth for Lecture 03 content.

Use completed Lectures as the implementation and visual reference.

## Requirements

- Implement exactly the Lecture 03 scope defined in `course-plan.md`.
- Cover all 3 periods with sufficient teaching depth.
- Do not repeat Course Home/syllabus content.
- Do not move Lecture 04 content into Lecture 03.
- Follow all language, teaching, slide, visual and reference rules from `AGENTS.md`.
- Preserve the established visual design and slide system.
- Use production assets from `/assets/`.
- Production pages must not depend on `/agents/`.

## Demos & Teaching Notes

Apply the Runnable Demos & Teaching Notes rules from `AGENTS.md`.

Create appropriate runnable demos under:

`demos/lecture-03/`

Create:

`lectures/lecture-03/teaching-notes.md`

Link relevant student-facing slides to runnable demos.

## Integration

Update root `index.html`:
- activate Lecture 03
- link to `lectures/lecture-03/index.html`

Navigation:
- Course identity/logo → Course Home
- Previous → Lecture 02
- Next → Lecture 04 when appropriate

## Verify

Verify:
- complete Lecture 03 coverage
- Vietnamese-first content
- student-facing slide wording
- runnable demos and teaching notes
- official reference links
- relative paths and navigation
- responsive layout
- visual consistency
- no `/agents/` runtime dependency