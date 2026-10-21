---
name: RFP Generator
description: Create a requirement package by collecting details from the user, then generate a `__rfp/<name>/` folder containing `requirements.md` and `test-cases.md`
---

# RFP Generator

Turn a user's rough idea into a structured requirement package. You collect the
requirements by interviewing the user, then generate the files.

## When to use

Use this skill when the user asks to:

- create an RFP / requirement folder or package,
- start a new requirement, feature, or task,
- write `requirements.md` and test cases for an idea.

## Workflow

1. **Gather requirements from the user.** Do not guess. Ask the interview
   questions in [Interview questions](#interview-questions) below. Keep asking
   follow-up questions until you have enough to write unambiguous files.
2. **Propose the folder name.** Derive a short kebab-case slug from the
   requirement, for example `user-login`, `payment-refund`, `csv-export`.
   Confirm the slug with the user before creating anything.
3. **Create the folder.** Create `__rfp/<slug>/` relative to the current
   working directory.
4. **Write `requirements.md`.** Use `references/requirements-template.md`.
5. **Write `test-cases.md`.** Use `references/test-cases-template.md`.
6. **Report back.** Tell the user the folder and files you created and
   summarize what was captured. Highlight any open questions.

## Interview questions

Ask these, in order, and adapt as the user answers. Do not ask all at once if
the user has already answered some.

- What is this requirement for? (the problem or goal, in one or two sentences)
- Who is it for? (roles, users, or systems)
- What must it do? (the core functionality)
- What are the inputs and outputs? (data, formats, endpoints)
- Are there constraints or non-functional requirements? (performance, security,
  compatibility, scale)
- What are the acceptance criteria? (how will we know it is done and correct)
- What is explicitly out of scope?
- Any dependencies, assumptions, or risks?
- What environments or platforms must it support?

If the user says "keep it simple" or does not know a detail, record it as an
open question instead of inventing an answer.

## File templates

Read these files and fill in their sections. Keep the structure; replace or
remove sections that do not apply.

- `references/requirements-template.md` -> `requirements.md`
- `references/test-cases-template.md` -> `test-cases.md`

## Naming rules

- Folder name: lowercase kebab-case, 2-6 words, e.g. `rfp/user-auth-flow` is
  fine, but prefer the top-level form `__rfp/user-auth-flow/`.
- File names: exactly `requirements.md` and `test-cases.md`.
- Do not overwrite an existing folder without asking the user first. If the
  slug already exists, suggest a variant.

## Output summary

After generating the files, show the user:

- the created paths,
- the requirement title and summary,
- the number of functional requirements and test cases,
- any open questions that still need answers.
