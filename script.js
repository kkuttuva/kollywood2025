// Quiz data - Kollywood personalities popular in 2025
// All images are sourced from the images/ folder
const quizData = [
    {
        image: "images/diwakar.jpg",
        answer: "Diwakar",
        alternatives: ["Diwakar"],
        hint: "The popular 'Watermelon Star' and Big Boss fame!",
        fullImage: true
    },
    {
        image: "images/rukmini.jpg",
        answer: "Rukmini Vasanth",
        alternatives: ["Rukmini Vasanth", "Rukmini"],
        hint: "Pan India crush of 2025!",
        fullImage: true
    },
    {
        image: "images/soubin-shahir.jpg",
        answer: "Soubin Shahir",
        alternatives: ["Soubin Shahir", "Soubin"],
        hint: "Yeah, the famous Coolie Villain!",
        cropImage: true
    },
    {
        image: "images/upendra.jpg",
        answer: "Upendra",
        alternatives: ["Upendra", "Upendra Rao"],
        hint: "Hard.. popular Cameo role in Coolie",
        fullImage: true
    },
    {
        image: "images/priya-varrier.jpg",
        answer: "Priya Prakash Varrier",
        alternatives: ["Priya Warrior", "Priya"],
        hint: "Re-Ignited 'Thottu Thottu Pesum Sultana' fans...",
        fullImage: true
    },
    {
        image: "images/sudha-kongara.jpg",
        answer: "Sudha Kongara",
        alternatives: ["Sudha Kongara", "Sudha"],
        hint: "Iruthisutru fame... wait for Parasakthi",
        fullImage: true
    },
    {
        image: "images/mari-selvaraj.jpg",
        answer: "Mari Selvaraj",
        alternatives: ["Mari Selvaraj", "Mari"],
        hint: "Easy guess... Bison director",
        fullImage: true
    },
    {
        image: "images/kaviya-maran.jpg",
        answer: "Kaviya Maran",
        alternatives: ["Kaviya Maran", "Kaviya"],
        hint: "Yeah.. Anirudh's latest crush...",
        fullImage: true
    },
    {
        image: "images/mrunal.jpg",
        answer: "Mrunal Thakur",
        alternatives: ["Mrunal Thakur", "Mrunal"],
        hint: "Will give heart break to Rajinikanth soon, if the rumors are true..",
        fullImage: true
    },
    {
        image: "images/arjun.jpg",
        answer: "Arjun Das",
        alternatives: ["Arjun Das", "Arjun"],
        hint: "The Good Bad Ugly dude",
        fullImage: true
    }
];

let currentQuestion = 0;
let score = 0;
let shuffledQuestions = [];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const answerInput = document.getElementById('answer-input');
const celebrityImage = document.getElementById('celebrity-image');
const feedback = document.getElementById('feedback');
const feedbackMessage = document.getElementById('feedback-message');
const feedbackAnswer = document.getElementById('feedback-answer');
const feedbackHint = document.getElementById('feedback-hint');
const scoreDisplay = document.getElementById('score');
const totalQuestions = document.getElementById('total-questions');
const currentQuestionNum = document.getElementById('current-question-num');
const totalQuestionNum = document.getElementById('total-question-num');
const progressFill = document.getElementById('progress');
const finalScore = document.getElementById('final-score');
const finalTotal = document.getElementById('final-total');
const percentage = document.getElementById('percentage');
const resultMessage = document.getElementById('result-message');

// Fuzzy matching function - allows one character mismatch
function fuzzyMatch(userAnswer, correctAnswer) {
    // Normalize both strings: lowercase, trim, remove extra spaces
    const normalized = (str) => str.toLowerCase().trim().replace(/\s+/g, ' ');
    const user = normalized(userAnswer);
    const correct = normalized(correctAnswer);
    
    // Exact match
    if (user === correct) {
        return true;
    }
    
    // Check if answer matches any alternative
    const question = shuffledQuestions[currentQuestion];
    for (let alt of question.alternatives) {
        if (user === normalized(alt)) {
            return true;
        }
    }
    
    // Calculate Levenshtein distance
    const distance = levenshteinDistance(user, correct);
    const maxLength = Math.max(user.length, correct.length);
    
    // Allow one character difference (including one character mismatch)
    if (maxLength > 0 && distance <= 1) {
        return true;
    }
    
    // Also check against alternatives with fuzzy matching
    for (let alt of question.alternatives) {
        const altNormalized = normalized(alt);
        const altDistance = levenshteinDistance(user, altNormalized);
        const altMaxLength = Math.max(user.length, altNormalized.length);
        if (altMaxLength > 0 && altDistance <= 1) {
            return true;
        }
    }
    
    return false;
}

// Levenshtein distance calculation
function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,      // deletion
                    dp[i][j - 1] + 1,      // insertion
                    dp[i - 1][j - 1] + 1   // substitution
                );
            }
        }
    }
    
    return dp[m][n];
}

// Start quiz
function startQuiz() {
    shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    score = 0;
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
}

// Load question
function loadQuestion() {
    if (currentQuestion >= shuffledQuestions.length) {
        showResults();
        return;
    }
    
    const question = shuffledQuestions[currentQuestion];
    celebrityImage.src = question.image;
    celebrityImage.alt = question.answer;
    
    // Apply crop-image class for Soubin (default is full image)
    if (question.cropImage) {
        celebrityImage.classList.add('crop-image');
    } else {
        celebrityImage.classList.remove('crop-image');
    }
    
    // Handle image load errors with a fallback
    celebrityImage.onerror = function() {
        this.src = "https://via.placeholder.com/400x400/667eea/ffffff?text=" + encodeURIComponent(question.answer);
        this.alt = question.answer + " (Image not available)";
    };
    
    // Reset UI
    answerInput.value = '';
    answerInput.disabled = false;
    submitBtn.disabled = false;
    feedback.classList.add('hidden');
    nextBtn.classList.add('hidden');
    feedbackHint.innerHTML = '';
    answerInput.focus();
    
    // Update question number and progress
    currentQuestionNum.textContent = currentQuestion + 1;
    totalQuestionNum.textContent = shuffledQuestions.length;
    totalQuestions.textContent = shuffledQuestions.length;
    scoreDisplay.textContent = score;
    
    const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
    progressFill.style.width = progress + '%';
}

// Submit answer
function submitAnswer() {
    const userAnswer = answerInput.value.trim();
    
    if (!userAnswer) {
        alert('Please enter an answer!');
        return;
    }
    
    const question = shuffledQuestions[currentQuestion];
    const isCorrect = fuzzyMatch(userAnswer, question.answer);
    
    // Disable input and submit button
    answerInput.disabled = true;
    submitBtn.disabled = true;
    
    // Show feedback
    feedback.classList.remove('hidden');
    feedback.classList.remove('correct', 'incorrect');
    
    if (isCorrect) {
        score++;
        feedback.classList.add('correct');
        feedbackMessage.textContent = '✓ Correct!';
        feedbackAnswer.innerHTML = `Great job! The answer is <strong>${question.answer}</strong>.`;
    } else {
        feedback.classList.add('incorrect');
        feedbackMessage.textContent = '✗ Incorrect';
        feedbackAnswer.innerHTML = `The correct answer is <strong>${question.answer}</strong>.`;
    }
    
    // Show hint
    if (question.hint) {
        feedbackHint.innerHTML = `<div class="hint-title">💡 Why they were in the limelight in 2025:</div><div class="hint-text">${question.hint}</div>`;
    }
    
    // Update score
    scoreDisplay.textContent = score;
    
    // Show next button
    nextBtn.classList.remove('hidden');
}

// Next question
function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

// Show results
function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    finalScore.textContent = score;
    finalTotal.textContent = shuffledQuestions.length;
    
    const percent = Math.round((score / shuffledQuestions.length) * 100);
    percentage.textContent = percent + '%';
    
    // Result message based on score
    if (score <= 5) {
        resultMessage.textContent = 'Ignorance is not bliss, here! Level up in 2026.';
    } else if (percent === 100) {
        resultMessage.textContent = 'Impressive, You are a true Kollywood fan!';
    } else if (percent >= 80) {
        resultMessage.textContent = 'Excellent! You know your Kollywood stars well! 👏';
    } else if (percent >= 60) {
        resultMessage.textContent = 'Good job! Keep watching more movies! 🎬';
    } else if (percent >= 40) {
        resultMessage.textContent = 'Not bad! Try again to improve your score! 💪';
    } else {
        resultMessage.textContent = 'Keep learning about Kollywood! Watch more movies! 📺';
    }
}

// Restart quiz
function restartQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', submitAnswer);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Allow Enter key to submit
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !answerInput.disabled) {
        submitAnswer();
    }
});

// Initialize
totalQuestions.textContent = quizData.length;

