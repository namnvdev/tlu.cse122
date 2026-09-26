# TASK-004 — Generate Lecture 04

## Goal

Generate Lecture 04 for CSE122.

Output:

`lectures/lecture-04/`

## Read First

Read and follow:

1. `AGENTS.md`
2. `course-plan.md`
3. root `index.html`
4. existing Lectures 01–03
5. existing demos

`course-plan.md` is the source of truth for Lecture 04 content.

Use completed Lectures as the implementation and visual reference.

## Requirements

- Implement exactly the Lecture 04 scope defined in `course-plan.md`.
- Cover all 3 periods with sufficient teaching depth.
- Do not repeat Course Home content.
- Do not introduce Lecture 05 content early.
- Follow all global rules from `AGENTS.md`.
- Preserve the established UI and slide system.
- Use `/assets/`; no production dependency on `/agents/`.

## Demos & Teaching Notes

Apply the Runnable Demos & Teaching Notes rules from `AGENTS.md`.

Create appropriate runnable demos under:

`demos/lecture-04/`

Create:

`lectures/lecture-04/teaching-notes.md`

Link relevant slides to runnable demos.

## Integration

Update root `index.html`:
- activate Lecture 04
- link to `lectures/lecture-04/index.html`

Navigation:
- Course Home
- Previous → Lecture 03
- Next → Lecture 05 when appropriate

## Verify

Verify content coverage, Vietnamese-first content, demos,
teaching notes, references, navigation, responsive layout,
visual consistency and no `/agents/` runtime dependency.