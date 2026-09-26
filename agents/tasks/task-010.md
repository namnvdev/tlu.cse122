# TASK-010 — Generate Lecture 10

## Goal

Generate Lecture 10 for CSE122.

Output:

`lectures/lecture-10/`

## Read First

Read and follow:

1. `AGENTS.md`
2. `course-plan.md`
3. root `index.html`
4. existing Lectures 01–09
5. existing demos

`course-plan.md` is the source of truth for Lecture 10.

Use the established course implementation patterns.

## Requirements

- Implement exactly Lecture 10 from `course-plan.md`.
- Cover all 3 periods with sufficient teaching depth.
- Follow all global rules from `AGENTS.md`.
- Keep framework content at the survey/concept/demo level defined by `course-plan.md`.
- Do not turn Lecture 10 into a React/Vue/Angular course.
- Do not repeat Course Home/syllabus content.
- Preserve the established visual design.
- Use `/assets/`; no `/agents/` runtime dependency.

## Demos & Teaching Notes

Apply the Runnable Demos & Teaching Notes rules from `AGENTS.md`.

Create appropriate runnable demos under:

`demos/lecture-10/`

Create:

`lectures/lecture-10/teaching-notes.md`

Link relevant slides to runnable demos.

## Integration

Update root `index.html`:
- activate Lecture 10
- link to `lectures/lecture-10/index.html`

Navigation:
- Course Home
- Previous → Lecture 09
- no Next Lecture required

## Verify

Verify content, language, technical accuracy, framework scope,
demos, teaching notes, official references, navigation,
responsive layout and visual consistency.