# Quick Guide to Push to GitHub

Your local repository is ready! All files have been committed. Follow these steps to push to GitHub:

## Step 1: Create a GitHub Repository

1. Go to https://github.com and sign in
2. Click the "+" icon → "New repository"
3. Name it (e.g., "kollywood-quiz" or "kollywood-stars-quiz-2025")
4. Make it **Public** (required for free GitHub Pages)
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click "Create repository"

## Step 2: Connect and Push

After creating the repository, GitHub will show you commands. Use these:

```bash
cd /Users/krishna/kollywood-quiz

# Add your GitHub repository as remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:**
If your username is `john` and repo name is `kollywood-quiz`, the command would be:
```bash
git remote add origin https://github.com/john/kollywood-quiz.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 4: Your Quiz is Live! 🎉

After a few minutes, your quiz will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## Current Status

✅ Git repository initialized
✅ All files committed
✅ Ready to push to GitHub

Just follow Step 1-2 above to connect to GitHub and push!

