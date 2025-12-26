# GitHub Setup Instructions

Follow these steps to host your Kollywood Quiz on GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it (e.g., "kollywood-quiz" or "kollywood-stars-quiz-2025")
5. Make it **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Initialize Git and Push to GitHub

Open terminal in the `kollywood-quiz` directory and run:

```bash
cd /Users/krishna/kollywood-quiz

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Kollywood Stars Quiz 2025"

# Add your GitHub repository as remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"

## Step 4: Access Your Live Website

After a few minutes, your quiz will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## Important Notes

⚠️ **Images**: The quiz currently uses placeholder images from Unsplash. You should:
- Replace them with actual celebrity photos
- Ensure you have rights to use the images
- Update the `image` URLs in `script.js` in the `quizData` array

To update images, you can:
1. Host images in the repository (create an `images/` folder)
2. Use image URLs from a CDN
3. Use image URLs from publicly accessible sources

## Updating the Quiz

After making changes:

```bash
git add .
git commit -m "Update quiz content"
git push
```

Changes will be live on GitHub Pages within a few minutes!

