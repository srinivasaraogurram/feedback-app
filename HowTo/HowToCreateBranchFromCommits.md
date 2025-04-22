Perfect — if you want to **create a new branch from a specific commit on a specific branch**, and you're starting from any branch, you can just use the commit hash directly — no need to specify the branch name separately, **as the commit hash already implies the history**.

### Example:
```bash
git branch <new-branch-name> <commit-hash>
```

If you specifically want to say "create from commit on this branch" (maybe for clarity), you can look up the commit hash from that branch like this:

```bash
git log <source-branch>
```

Then create your new branch from that commit:
```bash
git branch <new-branch-name> <commit-hash-from-source-branch>
```

### One-liner if you want the **latest commit** of a branch:
```bash
git branch <new-branch-name> origin/<source-branch>
```

#### Example:
```bash
git branch hotfix/something origin/release
```

That uses the latest commit on `origin/release` as the source.

Let me know if you want a script-style version or to wrap it in an alias.