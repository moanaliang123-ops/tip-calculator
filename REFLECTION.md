# Reflection — Getting to Know Cursor: Tip Calculator

## Which tool for which task?

Of the four Cursor tools, I would match them to tasks like this:

- **Fixing a typo → Tab autocomplete.** A typo is a tiny, local change. Tab already predicts the corrected text as I move the cursor there, so accepting (Tab) or rejecting (Esc) is the fastest path — opening a panel for a one-character fix would be slower than the fix itself.

- **Renaming a variable in one function → Inline edit (Ctrl/Cmd + K).** The change is confined to a selection I can highlight, and I can state the intent in one sentence ("rename `bill` to `billAmount`"). The diff view lets me verify that every occurrence — and only those occurrences — changed before I accept.

- **Understanding someone else's code → Ask mode (with @file / @folder).** When I only want an explanation, I don't want the AI to touch anything. Ask mode reads the code and answers questions without producing edits, and @-mentions let me point it at exactly the files I care about.

- **Adding a whole new feature → Agent.** A real feature spans multiple files and steps: planning, creating new files, wiring them together, and running commands. The Agent handles that multi-step flow, and the checkpoint system means I can roll the whole thing back if the result is wrong.

In short: the bigger and more multi-file the change, the more autonomy I give the tool — Tab for keystrokes, inline edit for one selection, Ask for questions, Agent for features.

## One thing the AI did that I had to check or correct

When the Agent redesigned the page, it replaced the tip-percentage dropdown with a row of buttons — but it never updated `script.js`, which was still reading the old `<select id="tip">` element. The result: clicking **Calculate** silently threw an error and nothing happened at all. The page *looked* finished, but the core feature was completely broken.

I caught this only because I tested by hand instead of trusting the diff. I described the symptom back in plain words ("clicking Calculate does nothing"), and the fix required wiring up the new buttons, making the result area visible again, and re-testing every case: `bill 80, tip 15%, 3 people → tip 12.00, total 92.00, 30.67 each`, plus the edge cases (empty bill, negative bill, zero people, non-integer people).

Lesson learned: an AI-generated diff that looks clean can still be functionally broken — especially when one file's change depends on another file being updated too. Always run the happy path *and* the edge cases before calling it done.
