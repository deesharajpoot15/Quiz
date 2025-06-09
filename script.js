const allQuestions = {
    dsa: [
        {
            question: "What is the time complexity of binary search?",
            options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
            answer: 1,
            explanation: "Binary search divides the array in half each time, so its time complexity is O(log n)."
        },
        {
            question: "Which data structure uses FIFO order?",
            options: ["Stack", "Queue", "Tree", "Graph"],
            answer: 1,
            explanation: "Queue stands for First-In-First-Out, meaning the first element added is the first to be removed."
        },
        {
            question: "Which sorting algorithm is NOT comparison-based?",
            options: ["Merge Sort", "Quick Sort", "Counting Sort", "Heap Sort"],
            answer: 2,
            explanation: "Counting Sort is not comparison-based; it uses keys as indexes to count occurrences."
        },
        {
            question: "What does DFS stand for in graph traversal?",
            options: ["Depth First Search", "Direct File System", "Data Flow Structure", "Dynamic Function Search"],
            answer: 0,
            explanation: "DFS stands for Depth First Search, a graph traversal algorithm."
        },
        {
            question: "Which data structure is used for recursion?",
            options: ["Queue", "Stack", "Heap", "Tree"],
            answer: 1,
            explanation: "Stack is used for recursion as it follows LIFO order."
        },
        {
            question: "Which traversal gives sorted order in BST?",
            options: ["Preorder", "Inorder", "Postorder", "Level order"],
            answer: 1,
            explanation: "Inorder traversal of a Binary Search Tree gives nodes in sorted order."
        },
        {
            question: "Which is not a linear data structure?",
            options: ["Array", "Linked List", "Tree", "Stack"],
            answer: 2,
            explanation: "Tree is a hierarchical (non-linear) data structure."
        },
        {
            question: "Which algorithm is used to find shortest path in a graph?",
            options: ["DFS", "BFS", "Dijkstra's", "Kruskal's"],
            answer: 2,
            explanation: "Dijkstra's algorithm is used to find the shortest path in a weighted graph."
        },
        {
            question: "Which of the following is a self-balancing BST?",
            options: ["AVL Tree", "Binary Heap", "Trie", "B-Tree"],
            answer: 0,
            explanation: "AVL Tree is a self-balancing Binary Search Tree."
        },
        {
            question: "What is the worst-case time for searching in a hash table?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 2,
            explanation: "In the worst case (all keys collide), searching in a hash table is O(n)."
        },
        {
            question: "Which data structure is used for BFS?",
            options: ["Stack", "Queue", "Priority Queue", "Set"],
            answer: 1,
            explanation: "Queue is used for Breadth First Search (BFS) traversal."
        }
    ],
    fullstack: [
        {
            question: "Which HTTP method is idempotent?",
            options: ["POST", "GET", "PATCH", "CONNECT"],
            answer: 1,
            explanation: "GET is idempotent, meaning multiple identical requests have the same effect as a single one."
        },
        {
            question: "Which of the following is a NoSQL database?",
            options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
            answer: 2,
            explanation: "MongoDB is a popular NoSQL database."
        },
        {
            question: "What does REST stand for?",
            options: ["Representational State Transfer", "Remote Execution Standard Technique", "Random Event Synchronous Transfer", "Relational State Table"],
            answer: 0,
            explanation: "REST stands for Representational State Transfer, an architectural style for APIs."
        },
        {
            question: "Which tag is used to include JavaScript in HTML?",
            options: ["<js>", "<javascript>", "<script>", "<code>"],
            answer: 2,
            explanation: "<script> is the correct tag to include JavaScript in HTML."
        },
        {
            question: "Which of the following is a frontend framework?",
            options: ["Django", "React", "Flask", "Laravel"],
            answer: 1,
            explanation: "React is a popular frontend JavaScript framework."
        },
        {
            question: "Which command is used to initialize a new Node.js project?",
            options: ["node init", "npm start", "npm init", "node start"],
            answer: 2,
            explanation: "npm init initializes a new Node.js project."
        },
        {
            question: "Which protocol is used to serve web pages?",
            options: ["FTP", "SMTP", "HTTP", "SSH"],
            answer: 2,
            explanation: "HTTP (HyperText Transfer Protocol) is used to serve web pages."
        },
        {
            question: "Which CSS property is used for layout grid?",
            options: ["display", "position", "grid-template", "float"],
            answer: 2,
            explanation: "grid-template is used to define grid columns and rows in CSS Grid layout."
        },
        {
            question: "Which of these is a backend language?",
            options: ["HTML", "CSS", "Python", "React"],
            answer: 2,
            explanation: "Python is commonly used for backend development."
        },
        {
            question: "Which HTTP status code means 'Not Found'?",
            options: ["200", "301", "404", "500"],
            answer: 2,
            explanation: "404 is the HTTP status code for 'Not Found'."
        },
        {
            question: "Which tool is used for version control?",
            options: ["Docker", "Git", "Nginx", "Jenkins"],
            answer: 1,
            explanation: "Git is a distributed version control system."
        }
    ],
    aiml: [
        {
            question: "What does AI stand for?",
            options: ["Artificial Intelligence", "Automated Input", "Advanced Internet", "Applied Informatics"],
            answer: 0,
            explanation: "AI stands for Artificial Intelligence."
        },
        {
            question: "Which algorithm is used for classification?",
            options: ["K-Means", "Linear Regression", "Decision Tree", "Apriori"],
            answer: 2,
            explanation: "Decision Tree is commonly used for classification tasks."
        },
        {
            question: "What is supervised learning?",
            options: ["Learning with labeled data", "Learning without data", "Learning with unlabeled data", "Learning by reinforcement"],
            answer: 0,
            explanation: "Supervised learning uses labeled data to train models."
        },
        {
            question: "Which library is popular for deep learning?",
            options: ["NumPy", "TensorFlow", "Pandas", "Matplotlib"],
            answer: 1,
            explanation: "TensorFlow is a popular deep learning library."
        },
        {
            question: "What does NLP stand for?",
            options: ["Natural Language Processing", "Neural Learning Process", "Network Layer Protocol", "None"],
            answer: 0,
            explanation: "NLP stands for Natural Language Processing."
        },
        {
            question: "Which is a clustering algorithm?",
            options: ["K-Means", "Linear Regression", "SVM", "Naive Bayes"],
            answer: 0,
            explanation: "K-Means is a popular clustering algorithm."
        },
        {
            question: "Which is NOT a type of neural network?",
            options: ["CNN", "RNN", "SVM", "GAN"],
            answer: 2,
            explanation: "SVM (Support Vector Machine) is not a neural network."
        },
        {
            question: "Which metric is used for regression?",
            options: ["Accuracy", "Recall", "Mean Squared Error", "F1 Score"],
            answer: 2,
            explanation: "Mean Squared Error (MSE) is used for regression tasks."
        },
        {
            question: "What is overfitting?",
            options: ["Model fits training data too well", "Model fits test data only", "Model is too simple", "Model is always accurate"],
            answer: 0,
            explanation: "Overfitting means the model fits the training data too well and may not generalize."
        },
        {
            question: "Which is a dimensionality reduction technique?",
            options: ["PCA", "CNN", "RNN", "GAN"],
            answer: 0,
            explanation: "PCA (Principal Component Analysis) is used for dimensionality reduction."
        },
        {
            question: "Which is a reinforcement learning algorithm?",
            options: ["Q-Learning", "KNN", "Naive Bayes", "Logistic Regression"],
            answer: 0,
            explanation: "Q-Learning is a reinforcement learning algorithm."
        }
    ]
};

let selectedQuizType = 'dsa';
let questions = [];
let currentQuestion = 0;
let score = 0;
let explanations = [];

const quizDiv = document.getElementById('quiz');
const startBtn = document.getElementById('start-btn');
const scoreSection = document.getElementById('score-section');
const scoreSpan = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');
const quizTypeSelect = document.getElementById('quiz-type');
const explanationsDiv = document.getElementById('explanations');

quizTypeSelect.addEventListener('change', (e) => {
    selectedQuizType = e.target.value;
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showQuestion() {
    const q = questions[currentQuestion];
    quizDiv.innerHTML = `
        <div class="question">Q${currentQuestion + 1}. ${q.question}</div>
        <div class="options">
            ${q.options.map((opt, i) => `<button class="option-btn" data-index="${i}">${opt}</button>`).join('')}
        </div>
        <button id="next-btn" class="hidden">Next</button>
    `;
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', selectOption);
    });
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
}

function selectOption(e) {
    const selected = parseInt(e.target.getAttribute('data-index'));
    const q = questions[currentQuestion];
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.answer) {
            btn.classList.add('correct');
        }
        if (i === selected && i !== q.answer) {
            btn.classList.add('wrong');
        }
        if (i === selected) {
            btn.classList.add('selected');
        }
    });
    if (selected === q.answer) {
        score++;
    }
    explanations.push({
        question: q.question,
        correct: q.options[q.answer],
        yourAnswer: q.options[selected],
        explanation: q.explanation,
        isCorrect: selected === q.answer
    });
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function startQuiz() {
    // Pick 10 random questions from the selected quiz type
    questions = shuffle([...allQuestions[selectedQuizType]]).slice(0, 10);
    currentQuestion = 0;
    score = 0;
    explanations = [];
    scoreSection.classList.add('hidden');
    showQuestion();
}

function endQuiz() {
    quizDiv.innerHTML = '';
    scoreSpan.textContent = `${score} / ${questions.length}`;
    explanationsDiv.innerHTML = explanations.map((ex, idx) => `
        <div class="explanation-block">
            <strong>Q${idx + 1}:</strong> ${ex.question}<br>
            <span style="color:${ex.isCorrect ? '#10b981' : '#ef4444'}">Your answer: ${ex.yourAnswer || 'No answer'}</span><br>
            <span style="color:#2563eb">Correct answer: ${ex.correct}</span><br>
            <em>${ex.explanation}</em>
        </div>
        <hr>
    `).join('');
    scoreSection.classList.remove('hidden');
}

function restartQuiz() {
    // Show quiz selection again
    quizDiv.innerHTML = document.getElementById('quiz-selection').outerHTML;
    document.getElementById('start-btn').addEventListener('click', startQuiz);
    document.getElementById('quiz-type').addEventListener('change', (e) => {
        selectedQuizType = e.target.value;
    });
    scoreSection.classList.add('hidden');
}

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz); 