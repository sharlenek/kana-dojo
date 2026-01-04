---
description: how to commit code changes
---

After completing any code changes, automatically commit them using git.

## Git Commit Rules

// turbo-all

> [!CAUTION]
> **NON-CUMULATIVE COMMITS ONLY:** Before committing, run `git status` to see what files are currently modified/unadded. Your commit message must ONLY describe those specific changes - NOT a summary of everything done in the conversation session. If this workflow is called multiple times in one session, each commit should be independent and describe only the changes since the last commit.

1. **Check status first:** Always run `git status` to see what's changed

2. **Stage and commit:** Run git commands separately to avoid PowerShell parsing issues:

   ```powershell
   git add -A
   git commit -m "<type>(<scope>): <description>" -m "<body line 1>" -m "<body line 2>"
   ```

3. **Conventional Commit Types:**
   - `feat`: New feature
   - `fix`: Bug fix
   - `docs`: Documentation changes
   - `style`: Code style changes (formatting, semicolons, etc.)
   - `refactor`: Code refactoring without feature changes
   - `perf`: Performance improvements
   - `test`: Adding or updating tests
   - `chore`: Maintenance tasks, dependencies, configs

4. **Example:**

   ```powershell
   git add -A
   git commit -m "feat(kana): add dakuon character support" -m "Added new dakuon characters to hiragana set" -m "Updated KanaCards component to display dakuon"
   ```

5. **Scope examples:** kana, kanji, vocabulary, progress, preferences, ui, i18n, a11y
