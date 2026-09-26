# TASK-002 — Generate Lecture 02

## Goal

Generate Lecture 02 for CSE122.

Output:

`lectures/lecture-02/`

## Read First

Before implementation, read and follow:

1. `AGENTS.md`
2. `course-plan.md`
3. root `index.html`
4. `lectures/lecture-01/`

`course-plan.md` is the source of truth for Lecture 02 content.

## Requirements

- Implement exactly the Lecture 02 scope defined in `course-plan.md`.
- Cover all 3 periods with sufficient teaching depth.
- Vietnamese is the primary teaching language.
- Keep English only for standard technical concepts, keywords, HTML elements/attributes, code, syntax, APIs and official tool names.
- Do not repeat syllabus, CLOs, assessment, learning path or lecturer information from Course Home.
- Follow the teaching approach defined in `AGENTS.md`.
- There is no fixed slide count.
- Use diagrams, HTML examples, browser results and instructor demos where appropriate.
- Use the Official References defined for Lecture 02.
- Reference links must be clickable.

## Visual & Implementation

Reuse Lecture 01 as the implementation and visual reference.

Do not redesign:
- layout
- colors
- typography
- slide system
- header/footer
- navigation
- responsive behavior

Use production assets from `/assets/`.

Production HTML must not reference files under `/agents/`.

## Integration

Update root `index.html`:
- Lecture 02 → `lectures/lecture-02/index.html`
- remove its `Planned` state

Navigation:
- Course identity/logo → Course Home
- Previous → Lecture 01
- Next → Lecture 03 when appropriate

## Verify

Before finishing verify:
- complete Lecture 02 coverage
- Vietnamese-first content
- technical terminology
- official reference links
- relative paths
- slide navigation
- responsive layout
- Course Home link
- Previous/Next navigation
- no `/agents/` runtime dependency

## Demos

Identify concepts in this Lecture that benefit from live browser behavior.

Create focused runnable demos under:

demos/lecture-XX/

Do not replace runnable demos with slides that merely describe instructor
actions.

Student-facing slides explain what is being demonstrated and what students
should observe.

Instructor procedures and talking points belong in:

lectures/lecture-XX/teaching-notes.md