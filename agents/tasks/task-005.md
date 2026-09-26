# TASK-005 — Generate Lecture 05

## Goal

Generate Lecture 05 for CSE122.

Output:

`lectures/lecture-05/`

## Read First

Read and follow:

1. `AGENTS.md`
2. `course-plan.md`
3. root `index.html`
4. existing Lectures 01–04
5. existing demos

`course-plan.md` defines the exact Lecture 05 scope.

Use completed Lectures as the implementation and visual reference.

## Requirements

- Implement exactly Lecture 05 from `course-plan.md`.
- Cover all 3 periods completely.
- Do not repeat Course Home/syllabus content.
- Do not move Lecture 06 content into Lecture 05.
- Follow all global rules from `AGENTS.md`.
- Preserve the current visual design and navigation system.
- Use `/assets/`; production pages must not depend on `/agents/`.

## Demos & Teaching Notes

Apply the Runnable Demos & Teaching Notes rules from `AGENTS.md`.

Create appropriate runnable demos under:

`demos/lecture-05/`

Create:

`lectures/lecture-05/teaching-notes.md`

Link relevant slides to runnable demos.

## Integration

Update root `index.html`:
- activate Lecture 05
- link to `lectures/lecture-05/index.html`

Navigation:
- Course Home
- Previous → Lecture 04
- Next → Lecture 06 when appropriate

## Verify

Verify content, language, demos, teaching notes, official references,
navigation, responsive behavior and visual consistency.