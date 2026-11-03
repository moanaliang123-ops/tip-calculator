# Reflection — Getting to Know Cursor: Tip Calculator

## Which tool for which task?

- **Fixing a typo → Tab.** It's the fastest way. I just move the cursor there and press Tab to accept the fix. Opening a chat panel for one wrong letter would be overkill.

- **Renaming a variable in one function → Inline edit (Ctrl + K).** I can select the function, type something like "rename bill to billAmount", and check the diff before accepting. It's quick and I can see exactly what changed.

- **Understanding someone else's code → Ask mode.** I only want an explanation, not changes. So I ask questions with @file and just read the answer, and nothing gets edited by accident.

- **Adding a whole new feature → Agent.** A new feature usually touches more than one file, so I let the Agent plan and do the steps, then I review the changes and test them myself.

## One thing the AI did that I had to check or correct

When the AI redesigned the page, it changed the tip dropdown into buttons, but it forgot to update script.js. The script was still looking for the old dropdown, so the Calculate button did nothing at all. The page looked fine, but it was actually broken.

I only noticed because I tested it by hand. I typed in bill 80, tip 15%, 3 people, clicked Calculate, and nothing happened. After I told the AI "clicking Calculate does nothing", it fixed the buttons and I tested again: tip 12.00, total 92.00, 30.67 each. I also tried an empty bill and 0 people, and the error messages showed up correctly.

What I learned: just because the AI says it's done doesn't mean it actually works. Always test it yourself.
