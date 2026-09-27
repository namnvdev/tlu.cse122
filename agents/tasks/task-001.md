# TASK — Generate Lecture 01

## Goal

Generate Lecture 01 for the existing CSE122 course website.

Do not regenerate or redesign the existing Course Home.

## Read First

Read and follow:

1. `AGENTS.md`
2. `course-plan.md`
3. existing root `index.html`
4. official syllabus and design/branding references required by `AGENTS.md`

`AGENTS.md` defines the global production rules.

`course-plan.md` is the source of truth for Lecture 01 scope,
period allocation and teaching content.

Preserve the existing Course Home and established visual system.

## Requirements

Create:

`lectures/lecture-01/`

Generate one coherent slide presentation containing all three periods
assigned to Lecture 01 in `course-plan.md`.

Follow the Lecture structure and production rules defined in `AGENTS.md`.

Do not repeat Course Home content unnecessarily.

All projected slide content must be student-facing.

Do not introduce content assigned to later Lectures.

## Demos & Teaching Notes

Apply the Runnable Demo and Teaching Notes rules from `AGENTS.md`.

Create focused runnable demos under:

`demos/lecture-01/`

when actual browser/runtime behavior improves learning.

Create:

`lectures/lecture-01/teaching-notes.md`

Keep instructor procedures and talking points there, not on projected
slides.

Link relevant runnable demos from the corresponding student slides.

## Integration

Use shared production assets under `/assets/`.

Production pages must not depend on `/agents/`.

Preserve the existing root `index.html`.

Only update Course Home when necessary to activate or correct the
Lecture 01 link. Do not redesign or regenerate Course Home content.

Ensure:
- Course Home → Lecture 01 works;
- Lecture 01 → Course Home works;
- course identity/logo links back to Course Home;
- navigation and visual design remain consistent with the existing site.

## Verify

Before finishing, verify:

- Lecture 01 covers exactly its assigned three periods;
- content follows `course-plan.md`;
- Period Overview, Period Checkpoint and Lecture Summary follow `AGENTS.md`;
- all projected slide text is student-facing;
- instructor procedures are in `teaching-notes.md`;
- runnable demos work locally;
- navigation and asset paths work;
- existing Course Home design/content is preserved;
- Vietnamese text is preserved correctly;
- generated/modified text files remain UTF-8;
- no mojibake is present.

If encoding corruption is detected, stop and report the affected file.

Do not attempt automatic encoding repair.