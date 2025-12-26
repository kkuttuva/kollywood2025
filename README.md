# 🎬 Kollywood Stars Quiz 2025

An interactive quiz website that tests your knowledge of prominent Kollywood (Tamil cinema) personalities who were popular in 2025.

## Features

- 🖼️ **Image-based Quiz**: Questions feature images of popular Kollywood celebrities
- 🎯 **One Question at a Time**: Clean, focused interface showing one question per page
- ✅ **Instant Feedback**: Immediate feedback on whether your answer is correct or incorrect
- 📊 **Score Tracking**: Real-time score display throughout the quiz
- 🔍 **Fuzzy Matching**: Answers allow for one character mismatch (typo-friendly)
- 🎨 **Modern UI**: Beautiful, responsive design with smooth animations
- 📱 **Mobile Friendly**: Works seamlessly on all device sizes

## How to Play

1. Click "Start Quiz" to begin
2. Look at the celebrity image
3. Type the name of the Kollywood personality
4. Click "Submit" or press Enter
5. See if your answer is correct
6. Click "Next Question" to continue
7. View your final score at the end!

## Technology Stack

- **HTML5**: Structure
- **CSS3**: Modern styling with gradients and animations
- **JavaScript (Vanilla)**: Quiz logic and fuzzy matching algorithm

## Quiz Logic

The quiz uses a fuzzy matching algorithm that:
- Normalizes answers (lowercase, trimmed, extra spaces removed)
- Allows exact matches
- Checks against alternative name variations
- Uses Levenshtein distance to allow one character mismatch
- Supports common name variations (e.g., "Vijay" or "Thalapathy Vijay")

## Setup for GitHub Pages

1. Create a new repository on GitHub
2. Push these files to the repository
3. Go to repository Settings → Pages
4. Select the branch (usually `main` or `master`)
5. Your quiz will be live at `https://yourusername.github.io/repository-name/`

## Customizing the Quiz

To add or modify quiz questions, edit the `quizData` array in `script.js`:

```javascript
const quizData = [
    {
        image: "path-to-image.jpg",  // URL or path to image
        answer: "Correct Answer",     // Main correct answer
        alternatives: ["Alt Name 1", "Alt Name 2"]  // Alternative accepted names
    },
    // Add more questions...
];
```

## Image Sources

The quiz uses a combination of:
- **Wikimedia Commons images** (freely licensed) for some celebrities
- **Local images** in the `images/` folder for others

### Adding Missing Images

Some celebrities need images to be added to the `images/` folder:
- `diwakar.jpg`
- `soubin-shahir.jpg`
- `priya-warrior.jpg`
- `sudha-kongara.jpg`
- `mari-selvaraj.jpg`
- `kaviya-maran.jpg`

See `images/README.md` for detailed instructions on finding and adding free-to-use images.

**Important**: Always ensure you have the right to use images. When in doubt:
- Use Wikimedia Commons (Creative Commons licensed images)
- Get permission from copyright holders
- Check license terms before using

## License

Feel free to use and modify this project for your own purposes!

## Contributing

Suggestions and improvements are welcome! Feel free to fork and submit pull requests.

---

Made with ❤️ for Kollywood fans!

