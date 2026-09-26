# CSE122 — AGENTS.md

## 1. Mission

Build the complete teaching package for:

- Course: CSE122 — Phát triển ứng dụng Web cơ bản
- English: Basic Web Application Development
- Institution: Trường Đại học Thủy Lợi (TLU)
- Teaching model: coherent lecture + instructor demo + dedicated practice/lab + Q&A
- Primary language: Vietnamese
- Technical terms and code: English

The course must be practical, visual, concise, and suitable for undergraduate students learning modern frontend Web development.

---

## 2. Source of Truth

Always read these files before generating or modifying course content:

1. `agents/inputs/CSE122_Phat trien ung dung Co ban.docx`
   - Official syllabus.
   - Defines course scope, topics, CLOs, assessment, and required content.
   - Never silently remove required syllabus topics.

2. `agents/design/references/cse122-slide-theme-reference.png`
   - Visual contract for all lecture slides/pages.
   - Match its visual language, layout hierarchy, navigation, spacing, and overall density.

3. `agents/inputs/branding/tlu-logo.png`
   - Official TLU branding asset.
   - Use the supplied image directly.
   - Never redraw, approximate, or generate another TLU logo.

If generated content conflicts with the syllabus, the syllabus wins.

---

## 3. Course Structure

Official syllabus:

- 3 credits
- 45 periods total
- 30 lecture periods
- 15 practice/lab periods

Teaching organization:

- 1 period = 55 minutes
- 1 session = 3 periods = 165 minutes
- 15 sessions = 45 periods

Plan teaching at PERIOD level, not only session level.

Lecture and Practice are organized as separate sessions:

- 10 Lecture sessions × 3 periods
- 5 Practice sessions × 3 periods

Do not mix Lecture and Practice periods within one generated session.

Do not interpret "25–30 minutes lecture" as the duration of an entire 3-period session.

---

## 4. Teaching Method

Teach each period as a coherent learning flow.

For each concept:

concept → visual explanation → example/demo

A concept should normally include:

- a clear definition or core idea
- an appropriate image, diagram, or visual explanation
- concise explanation of how and why it works
- a concrete example or demonstration when useful

Keep related concepts together. Do not interrupt the lecture repeatedly with
questions, predictions, exercises, or small activities.

Demo and live coding should support the current concept and remain part of the
teaching flow rather than becoming separate activities after every topic.

Practice periods are used for substantial hands-on work, exercises, debugging,
and implementation.

---

## 5. Course Progression

Follow the syllabus progression:

1. Web development foundations
2. Semantic HTML, forms, accessibility
3. CSS foundations
4. Layout, responsive design, Bootstrap 5
5. JavaScript foundations
6. DOM, events, forms, browser storage
7. Asynchronous JavaScript
8. REST API and Fetch API
9. Component thinking and Frontend project integration

Do not introduce frameworks as the main development model before students understand HTML, CSS, JavaScript and DOM.

React/Vue/Angular are survey/component-thinking topics near the end of the course.

---

## 6. Lecture Content

Slides are teaching aids, not textbooks.

Keep text concise.

Prefer:

- diagrams
- browser screenshots
- UI examples
- code snippets
- before/after comparisons
- process flows
- DevTools demonstrations
- real Web examples

Avoid:

- paragraph-heavy slides
- unnecessary definitions
- duplicated explanations
- decorative slides with little teaching value
- excessive bullet lists

One slide should normally communicate one main idea.

A concept requiring significant explanation should be split across slides rather than compressed.

Do not impose a fixed number of slides per period. Use as many slides as needed to explain the content clearly within the 55-minute period.

Lecture slides should support the instructor's explanation; they must not assume students are simultaneously coding.

---

## 7. Code Examples

Code must be:

- small
- readable
- runnable
- directly related to the current concept
- suitable for live coding

Prefer progressive examples when they improve understanding:

simple → explain → demonstrate → extend

Debugging-oriented examples may use:

observe → identify → fix → verify

Do not force every example through an artificial activity sequence.

Do not introduce unnecessary architecture or abstraction.

Use modern browser-supported HTML, CSS and JavaScript.

When appropriate, show both:

- source code
- visible browser result

---

## 8. Demo and Practice

Lecture classrooms do not guarantee that every student has a laptop.

### Lecture periods

Lecture periods must remain fully understandable without individual student computers.

Use:

- instructor-led live demos
- projected browser/code examples
- diagrams and visual comparisons
- short code walkthroughs
- DevTools demonstrations when useful

Students may observe, discuss, answer, or reason from projected material, but do not design the lecture around mandatory student coding.

Keep the teaching flow coherent. Do not interrupt each concept with predictions, quizzes, or mini-exercises.

### Practice/lab periods

Practice/lab periods are the primary time for student hands-on work.

Use them for:

- coding exercises
- building or extending Web pages/features
- DevTools and debugging
- responsive testing
- DOM and JavaScript exercises
- API integration
- project development

Practice should normally reuse and extend concepts/examples already introduced in lecture.

Prefer one coherent practical task over many disconnected mini-exercises.

Exercises must be feasible on normal student laptops and should not depend on paid tools or unusually heavy local environments.

---

## 9. Slide Visual Contract

Use `cse122-slide-theme-reference.png` as the visual baseline.

Preserve the recognizable design system:

- light/white background
- TLU blue as primary visual language
- strong dark-blue headings
- blue accent typography
- generous whitespace
- rounded cards/panels
- thin blue borders/dividers
- clean technical illustrations
- clear hierarchy
- restrained visual density

Header should communicate:

- TLU logo
- CSE122
- Web Development
- Lecture number/title
- Period
- slide progress
- navigation

Footer should communicate:

- CSE122 / Web Development
- current chapter/topic breadcrumb
- slide progress

Do not redesign each lecture independently.

All lectures belong to one visual system.

---

## 10. Images and Visuals

Use visuals when they improve understanding.

Prefer visuals for:

- Web architecture
- client/server interaction
- HTTP
- DOM
- CSS layout
- responsive behavior
- event flow
- async/event loop
- API interaction
- component relationships

Do not use meaningless stock images or decorative visuals that compete with the teaching content.

Prefer purpose-built diagrams, screenshots, browser/UI examples, and technical illustrations that directly explain the concept.

Technical diagrams must be accurate, legible from a classroom projector, and easy to understand.

Do not generate or modify the official TLU logo.

---

## 11. Project-Based Continuity

CSE122 includes a continuing Frontend project.

Whenever practical, demos and exercises should progressively contribute skills that students can reuse in that project.

The final project should progressively integrate:

HTML → CSS/responsive UI → JavaScript → DOM/events/forms → storage → async → REST API → Git → deployment

Avoid treating every lecture as an isolated mini-course.

---

## 12. File Organization

Use this project structure:

04_webfoundation/
├── AGENTS.md
├── course-plan.md
│
├── agents/
│   ├── inputs/
│   │   ├── CSE122_Phat trien ung dung Co ban.docx
│   │   └── branding/
│   │       └── tlu-logo.png
│   │
│   ├── design/
│   │   └── references/
│   │       └── cse122-slide-theme-reference.png
│   │
│   └── tasks/
│
├── lectures/
├── demos/
├── exercises/
└── assets/

Do not duplicate source assets unnecessarily.

---

## 13. Workflow

Before creating teaching materials:

1. Read `AGENTS.md`.
2. Read `course-plan.md`.
3. Read the relevant task.
4. Check the official syllabus for that topic and its LT/TH allocation.
5. Check the slide visual reference when producing UI/slides.
6. Reuse existing demos/assets when appropriate.
7. Generate only the requested scope.
8. Verify content, navigation, terminology, code, and visual consistency.

Do not regenerate unrelated lectures or files.

Do not expand scope without a clear teaching reason.

When uncertain, prefer the simplest solution that satisfies the syllabus and teaching objective.

---

## 14. Runnable Demo Rule & Teaching Notes

For every Lecture, identify concepts that benefit from observable
browser/runtime behavior.

When appropriate, create focused runnable demos under:

`demos/lecture-XX/`

A demo is an actual runnable example, not a slide describing what the
instructor should do.

Use runnable demos where appropriate for:
- HTML/forms/validation
- CSS/layout/responsive behavior
- JavaScript execution
- DOM manipulation
- Events
- Browser Storage
- Async behavior
- REST API / Fetch
- UI/component behavior

Student-facing slides should explain:
- what is being demonstrated;
- the important concept/code;
- what students should observe;
- a link/button to open the demo when appropriate.

Do NOT put instructor operational instructions on student-facing slides.

Wrong:
`Giảng viên mở DevTools và thay đổi...`

Correct:
`Demo: Quan sát Box Model bằng DevTools`

Instructor-only content belongs in:

`lectures/lecture-XX/teaching-notes.md`

This includes:
- demo procedure;
- talking points;
- suggested explanation;
- expected observations;
- questions to ask;
- troubleshooting;
- optional extensions.

Runnable demos should:
- be small and focused;
- directly support the current concept;
- run locally;
- use production assets where appropriate;
- not depend on `/agents/`;
- provide a clear way back to the corresponding Lecture.

Do not create demos just to satisfy a quota.
Create them when actual execution or browser behavior improves learning.

---

## 15. Student-Facing Slide Rule — Strict Rule

ALL projected Lecture slides are student-facing.

Never include instructor-facing language on slides.

Forbidden slide content includes:
- instructions telling the instructor what to do;
- "Giảng viên thực hiện...";
- "Giảng viên mở...";
- "Giảng viên trình bày...";
- "Giảng viên giải thích...";
- "Giảng viên demo...";
- "Giảng viên hỏi sinh viên...";
- teaching procedures;
- speaking instructions;
- timing instructions;
- classroom management instructions.

This rule also applies to Demo slides.

A Demo slide must describe the demonstration from the student's
point of view:

- what is being demonstrated;
- what process students will observe;
- what behavior/result students should notice;
- the relevant runnable demo link when available.

Example:

Wrong:
"Giảng viên mở DevTools và thay đổi CSS."

Correct:
"Demo: Quan sát CSS thay đổi trực tiếp bằng DevTools."

Wrong:
"Giảng viên thực hiện từ đầu đến cuối."

Correct:
"Demo: Quy trình từ tạo trang Web đến GitHub."

ALL instructor procedures belong exclusively in:

`lectures/lecture-XX/teaching-notes.md`

Before completing a Lecture, scan ALL slide text and remove any
instructor-facing instructions.

-------------------------------------------------------------------

## 16. Period Structure & Checkpoints

Each Lecture contains 3 periods.

### Period Opening

Start each period with a concise student-facing overview slide showing:
- what will be covered in this period;
- the main concepts/topics;
- what students should understand afterward.

Its purpose is to give students a mental map before teaching begins.

### Period Checkpoint

End each period with one checkpoint/summary slide.

The checkpoint should:
- summarize what was learned;
- highlight the key ideas students should remember;
- include 2–4 short review questions when useful.

Do not scatter checkpoints throughout individual concepts.

### Lecture Summary

End each Lecture with a concise summary connecting all three periods:
- what students learned;
- the most important concepts;
- how the three periods connect;
- what comes next.

Avoid simply repeating slide titles.
-----------------------------------------------------------
## 17. File Encoding

All project text files must use UTF-8.

Preserve Vietnamese Unicode text exactly as written.

Never read, convert or rewrite project text using:
- ANSI;
- Windows-1252;
- legacy Windows code pages;
- Latin-1.

Do not perform encoding conversion on existing files.

HTML documents must declare:

`<meta charset="utf-8">`

When modifying an existing file, preserve its UTF-8 encoding.

Before completing a task, verify generated/modified files for common
Vietnamese mojibake indicators such as corrupted sequences beginning
with `Ã`, `Â` or `Ä`.

If encoding corruption is detected, stop and report the affected file
instead of attempting automatic encoding repair.
