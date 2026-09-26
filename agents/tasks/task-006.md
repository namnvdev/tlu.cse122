# TASK-006 — Generate Lecture 06

## Goal

Generate Lecture 06 for CSE122.

Output:

`lectures/lecture-06/`

## Read First

Read and follow:

1. `AGENTS.md`
2. `course-plan.md`
3. root `index.html`
4. existing Lectures 01–05
5. existing demos

`course-plan.md` is the source of truth for Lecture 06 content.

Use completed Lectures as implementation references.

## Requirements

- Implement exactly Lecture 06 from `course-plan.md`.
- Cover all 3 periods with sufficient depth.
- Do not repeat Course Home content.
- Do not introduce Lecture 07 content early.
- Follow all global rules from `AGENTS.md`.
- Keep code examples correct, focused and projector-readable.
- Preserve the established design.
- Use `/assets/`; never depend on `/agents/` at runtime.

## Demos & Teaching Notes

Apply the Runnable Demos & Teaching Notes rules from `AGENTS.md`.

Create appropriate runnable examples under:

`demos/lecture-06/`

Create:

`lectures/lecture-06/teaching-notes.md`

Link relevant slides to runnable demos.

## Integration

Update root `index.html`:
- activate Lecture 06
- link to `lectures/lecture-06/index.html`

Navigation:
- Course Home
- Previous → Lecture 05
- Next → Lecture 07 when appropriate

## Verify

Verify curriculum coverage, Vietnamese-first content, code correctness,
demos, teaching notes, references, navigation and responsiveness.