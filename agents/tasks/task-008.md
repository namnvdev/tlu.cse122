# TASK-008 — Generate Lecture 08

## Goal

Generate Lecture 08 for CSE122.

Output:

`lectures/lecture-08/`

## Read First

Read and follow:

1. `AGENTS.md`
2. `course-plan.md`
3. root `index.html`
4. existing Lectures 01–07
5. existing demos

`course-plan.md` defines the exact Lecture 08 scope.

Use completed Lectures as implementation references.

## Requirements

- Implement exactly Lecture 08 from `course-plan.md`.
- Cover all 3 periods with sufficient teaching depth.
- Do not repeat Course Home content.
- Do not introduce Lecture 09 beyond the defined scope.
- Follow all global rules from `AGENTS.md`.
- Use accurate diagrams where relationships/execution flow need visualization.
- Preserve the established visual system.
- Use `/assets/`; production pages must not depend on `/agents/`.

## Demos & Teaching Notes

Apply the Runnable Demos & Teaching Notes rules from `AGENTS.md`.

Create appropriate runnable demos under:

`demos/lecture-08/`

Create:

`lectures/lecture-08/teaching-notes.md`

Link relevant slides to runnable demos.

## Integration

Update root `index.html`:
- activate Lecture 08
- link to `lectures/lecture-08/index.html`

Navigation:
- Course Home
- Previous → Lecture 07
- Next → Lecture 09 when appropriate

## Verify

Verify technical accuracy, content, language, diagrams, demos,
teaching notes, references, navigation and responsive behavior.