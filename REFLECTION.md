# Reflection — Getting to Know Cursor: Tip Calculator

## Which tool for which task?

- **Fixing a typo → Tab.** Just press Tab to accept the fix. It's the fastest way.
- **Renaming a variable in one function → Inline edit (Ctrl + K).** Select the code, type what I want, check the diff, accept.
- **Understanding someone else's code → Ask mode.** I only want an answer, not changes, so I ask with @file and nothing gets edited.
- **Adding a whole new feature → Agent.** It can do many steps across files, and then I review and test the result.

## One thing the AI did that I had to check or correct

The AI changed the tip dropdown into buttons, but forgot to update script.js. So the Calculate button did nothing. The page looked fine, but it was actually broken.

I found this by testing it myself. I typed 80, 15%, 3 people and clicked Calculate — nothing happened. I told the AI, it fixed the buttons, and then it worked: tip 12.00, total 92.00, 30.67 each. Empty bill and 0 people also showed error messages correctly.

Lesson: don't just trust "done". Always test it yourself.
