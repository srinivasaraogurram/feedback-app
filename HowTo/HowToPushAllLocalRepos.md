To push **all local branches** to their **respective remote branches** with a single command in Git, you can use:

```bash
git push --all
```

### Explanation:
- `git push --all` pushes **all your local branches** to the remote you specify (default is `origin` if you don't specify one).
- This will **create and/or update matching branches** on the remote side.

If you want to be explicit about the remote (which is often a good habit), use:

```bash
git push --all origin
```

---

### Bonus – Set upstream too (optional):
If you're doing this for the **first time**, and want to set the upstream for each branch as well, you could use a loop like:

```bash
for branch in $(git for-each-ref --format='%(refname:short)' refs/heads/); do
  git push -u origin "$branch"
done
```

Let me know if you want to push only **some** branches or use a different remote!