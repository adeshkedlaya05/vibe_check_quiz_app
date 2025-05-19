import React, { useState, useEffect } from "react";
import './App.css';


const dailyQuestions = {
  Sunday: [
    {
      question: "How do you feel this Sunday morning?",
      options: [
        { text: "Calm and relaxed", vibe: "Chill" },
        { text: "Ready to take on the world", vibe: "Energetic" },
        { text: "Inspired and imaginative", vibe: "Creative" },
        { text: "Focused and determined", vibe: "Focused" },
      ],
    },
    {
      question: "What’s your Sunday ideal plan?",
      options: [
        { text: "Chill with a book", vibe: "Chill" },
        { text: "Go hiking", vibe: "Energetic" },
        { text: "Start a new art project", vibe: "Creative" },
        { text: "Plan the week ahead", vibe: "Focused" },
      ],
    },
    {
      question: "Choose your Sunday morning drink:",
      options: [
        { text: "Herbal tea", vibe: "Chill" },
        { text: "Fresh juice", vibe: "Energetic" },
        { text: "Smoothie bowl", vibe: "Creative" },
        { text: "Black coffee", vibe: "Focused" },
      ],
    },
    {
      question: "Your Sunday playlist is mostly:",
      options: [
        { text: "Soft acoustic", vibe: "Chill" },
        { text: "Upbeat pop", vibe: "Energetic" },
        { text: "Indie and alternative", vibe: "Creative" },
        { text: "Instrumental or classical", vibe: "Focused" },
      ],
    },
    {
      question: "Sunday evening vibes:",
      options: [
        { text: "Netflix and relax", vibe: "Chill" },
        { text: "Dance party", vibe: "Energetic" },
        { text: "Writing or painting", vibe: "Creative" },
        { text: "Organizing your week", vibe: "Focused" },
      ],
    },
  ],
  Monday: [
    {
      question: "What's your ideal activity this Monday?",
      options: [
        { text: "Listening to soft music", vibe: "Chill" },
        { text: "Going for a run", vibe: "Energetic" },
        { text: "Painting or writing", vibe: "Creative" },
        { text: "Planning your schedule", vibe: "Focused" },
      ],
    },
    {
      question: "Monday morning mood:",
      options: [
        { text: "Slow and easy", vibe: "Chill" },
        { text: "Ready to work hard", vibe: "Energetic" },
        { text: "Brainstorming ideas", vibe: "Creative" },
        { text: "Focused on tasks", vibe: "Focused" },
      ],
    },
    {
      question: "Lunch break plan:",
      options: [
        { text: "Casual cafe", vibe: "Chill" },
        { text: "Quick and energizing snack", vibe: "Energetic" },
        { text: "Try a new recipe", vibe: "Creative" },
        { text: "Meal prepping", vibe: "Focused" },
      ],
    },
    {
      question: "Monday evening feels like:",
      options: [
        { text: "Relaxing with coworkers", vibe: "Chill" },
        { text: "Powering through tasks", vibe: "Energetic" },
        { text: "Brainstorming new projects", vibe: "Creative" },
        { text: "Deep concentration", vibe: "Focused" },
      ],
    },
    {
      question: "End of Monday, you:",
      options: [
        { text: "Watch a show", vibe: "Chill" },
        { text: "Hit the gym", vibe: "Energetic" },
        { text: "Work on a hobby", vibe: "Creative" },
        { text: "Review tomorrow's agenda", vibe: "Focused" },
      ],
    },
  ],
  Tuesday: [
    {
      question: "Your favorite Tuesday environment?",
      options: [
        { text: "Quiet and peaceful", vibe: "Chill" },
        { text: "Loud and lively", vibe: "Energetic" },
        { text: "Artistic and colorful", vibe: "Creative" },
        { text: "Organized and clean", vibe: "Focused" },
      ],
    },
    {
      question: "Tuesday breakfast choice:",
      options: [
        { text: "Smooth oatmeal", vibe: "Chill" },
        { text: "Protein shake", vibe: "Energetic" },
        { text: "Avocado toast with toppings", vibe: "Creative" },
        { text: "Quick black coffee", vibe: "Focused" },
      ],
    },
    {
      question: "Ideal Tuesday meeting style:",
      options: [
        { text: "Casual and relaxed", vibe: "Chill" },
        { text: "Energetic and engaging", vibe: "Energetic" },
        { text: "Innovative and brainstorming", vibe: "Creative" },
        { text: "Efficient and goal-oriented", vibe: "Focused" },
      ],
    },
    {
      question: "Tuesday afternoon energy booster:",
      options: [
        { text: "Meditation", vibe: "Chill" },
        { text: "Quick workout", vibe: "Energetic" },
        { text: "Creative sketching", vibe: "Creative" },
        { text: "Prioritize tasks", vibe: "Focused" },
      ],
    },
    {
      question: "Tuesday evening unwind:",
      options: [
        { text: "Reading a book", vibe: "Chill" },
        { text: "Go out with friends", vibe: "Energetic" },
        { text: "Work on personal projects", vibe: "Creative" },
        { text: "Plan next day’s schedule", vibe: "Focused" },
      ],
    },
  ],
  Wednesday: [
    {
      question: "Choose a snack this Wednesday:",
      options: [
        { text: "Herbal tea", vibe: "Chill" },
        { text: "Energy bar", vibe: "Energetic" },
        { text: "Fruit smoothie", vibe: "Creative" },
        { text: "Protein shake", vibe: "Focused" },
      ],
    },
    {
      question: "Wednesday workout style:",
      options: [
        { text: "Gentle yoga", vibe: "Chill" },
        { text: "High-intensity training", vibe: "Energetic" },
        { text: "Dance class", vibe: "Creative" },
        { text: "Focused strength training", vibe: "Focused" },
      ],
    },
    {
      question: "Wednesday lunch preference:",
      options: [
        { text: "Light salad", vibe: "Chill" },
        { text: "Protein-packed meal", vibe: "Energetic" },
        { text: "Try a new cuisine", vibe: "Creative" },
        { text: "Meal prep with goals", vibe: "Focused" },
      ],
    },
    {
      question: "Midweek motivation:",
      options: [
        { text: "Take it easy", vibe: "Chill" },
        { text: "Push your limits", vibe: "Energetic" },
        { text: "Try something new", vibe: "Creative" },
        { text: "Stay on track", vibe: "Focused" },
      ],
    },
    {
      question: "Wednesday evening plans:",
      options: [
        { text: "Relax with music", vibe: "Chill" },
        { text: "Go for a run", vibe: "Energetic" },
        { text: "Creative writing", vibe: "Creative" },
        { text: "Organize your workspace", vibe: "Focused" },
      ],
    },
  ],
  Thursday: [
    {
      question: "Your Thursday  plan?",
      options: [
        { text: "Relax at home", vibe: "Chill" },
        { text: "Outdoor adventure", vibe: "Energetic" },
        { text: "Try a new hobby", vibe: "Creative" },
        { text: "Catch up on work", vibe: "Focused" },
      ],
    },
    {
      question: "Thursday morning energy level:",
      options: [
        { text: "Calm and steady", vibe: "Chill" },
        { text: "Full of energy", vibe: "Energetic" },
        { text: "Bursting with ideas", vibe: "Creative" },
        { text: "Ready to focus", vibe: "Focused" },
      ],
    },
    {
      question: "Preferred Thursday lunch:",
      options: [
        { text: "Soup and bread", vibe: "Chill" },
        { text: "Protein and veggies", vibe: "Energetic" },
        { text: "Exotic dishes", vibe: "Creative" },
        { text: "Meal plan with goals", vibe: "Focused" },
      ],
    },
    {
      question: "Thursday evening activity:",
      options: [
        { text: "Meditation or rest", vibe: "Chill" },
        { text: "Quick workout", vibe: "Energetic" },
        { text: "Creative brainstorming", vibe: "Creative" },
        { text: "Work on important tasks", vibe: "Focused" },
      ],
    },
    {
      question: "End od thrusday vibe:",
      options: [
        { text: "Watch a movie", vibe: "Chill" },
        { text: "Go out with friends", vibe: "Energetic" },
        { text: "Try a new recipe", vibe: "Creative" },
        { text: "Prepare for Friday", vibe: "Focused" },
      ],
    },
  ],
  Friday: [
    {
      question: "Pick a music genre for Friday:",
      options: [
        { text: "Jazz", vibe: "Chill" },
        { text: "Rock", vibe: "Energetic" },
        { text: "Indie", vibe: "Creative" },
        { text: "Classical", vibe: "Focused" },
      ],
    },
    {
      question: "Friday afternoon energy:",
      options: [
        { text: "Laid back and chill", vibe: "Chill" },
        { text: "Excited and pumped", vibe: "Energetic" },
        { text: "Creative and inspired", vibe: "Creative" },
        { text: "Focused and productive", vibe: "Focused" },
      ],
    },
    {
      question: "Friday night plans:",
      options: [
        { text: "Relax at home", vibe: "Chill" },
        { text: "Go to a party", vibe: "Energetic" },
        { text: "Work on a personal project", vibe: "Creative" },
        { text: "Prepare for the weekend", vibe: "Focused" },
      ],
    },
    {
      question: "Favorite Friday snack:",
      options: [
        { text: "Popcorn", vibe: "Chill" },
        { text: "Energy drink", vibe: "Energetic" },
        { text: "Fruit bowl", vibe: "Creative" },
        { text: "Protein bar", vibe: "Focused" },
      ],
    },
    {
      question: "Friday mood in one word:",
      options: [
        { text: "Relaxed", vibe: "Chill" },
        { text: "Energetic", vibe: "Energetic" },
        { text: "Inventive", vibe: "Creative" },
        { text: "Determined", vibe: "Focused" },
      ],
    },
  ],
  Saturday: [
    {
      question: "How do you like to spend your Saturday night?",
      options: [
        { text: "Watching movies", vibe: "Chill" },
        { text: "Going out dancing", vibe: "Energetic" },
        { text: "Trying new recipes", vibe: "Creative" },
        { text: "Reading or studying", vibe: "Focused" },
      ],
    },
    {
      question: "Saturday morning vibe:",
      options: [
        { text: "Slow and easy", vibe: "Chill" },
        { text: "Ready for adventure", vibe: "Energetic" },
        { text: "Creative brainstorm", vibe: "Creative" },
        { text: "Planning the day", vibe: "Focused" },
      ],
    },
    {
      question: "Ideal Saturday lunch:",
      options: [
        { text: "Picnic in the park", vibe: "Chill" },
        { text: "High-energy meal", vibe: "Energetic" },
        { text: "Try cooking something new", vibe: "Creative" },
        { text: "Meal prep for the week", vibe: "Focused" },
      ],
    },
    {
      question: "Saturday afternoon activity:",
      options: [
        { text: "Reading a novel", vibe: "Chill" },
        { text: "Sports with friends", vibe: "Energetic" },
        { text: "Crafting or DIY", vibe: "Creative" },
        { text: "Organizing your space", vibe: "Focused" },
      ],
    },
    {
      question: "Saturday evening unwind:",
      options: [
        { text: "Listening to calm music", vibe: "Chill" },
        { text: "Night out dancing", vibe: "Energetic" },
        { text: "Journaling or sketching", vibe: "Creative" },
        { text: "Preparing for Sunday", vibe: "Focused" },
      ],
    },
  ],
};

function getCurrentDayName() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todayIndex = new Date().getDay();
  return days[todayIndex];
}

function App() {
  const [name, setName] = useState("");
  const [nameEntered, setNameEntered] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [scores, setScores] = useState({
    Chill: 0,
    Energetic: 0,
    Creative: 0,
    Focused: 0,
  });
  const [vibeResult, setVibeResult] = useState(null);
  const [day, setDay] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (nameEntered) {
      const today = getCurrentDayName();
      setDay(today);
      setQuestions(dailyQuestions[today] || []);
    }
  }, [nameEntered]);

  function handleAnswer(vibe) {
    setScores((prev) => ({ ...prev, [vibe]: prev[vibe] + 1 }));
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      const finalScores = { ...scores, [vibe]: scores[vibe] + 1 };
      const finalMaxVibe = Object.keys(finalScores).reduce((a, b) =>
        finalScores[a] > finalScores[b] ? a : b
      );
      setVibeResult(finalMaxVibe);
    }
  }

  function restart() {
    setScores({ Chill: 0, Energetic: 0, Creative: 0, Focused: 0 });
    setCurrentQIndex(0);
    setVibeResult(null);
    setNameEntered(false);
    setName("");
    setDay(null);
    setQuestions([]);
  }

  if (!nameEntered) {
    return (
      <div className="App">
        <div className="quiz-container">
          <h1>Welcome to the Daily Vibe Check</h1>
          <p>Please enter your name to start:</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="input-name"
          />
          <button
            onClick={() => {
              if (name.trim()) setNameEntered(true);
            }}
            className="btn"
          >
            Start
          </button>
          <p style={{ marginTop: 20, fontStyle: "italic" }}>
            Discover your vibe today to set the perfect mood!
          </p>
        </div>
      </div>
    );
  }

  if (vibeResult) {
    return (
      <div className="App">
        <div className="quiz-container">
          <h2>Thanks for taking the quiz, {name}!</h2>
          <h3>Your vibe for {day} is: {vibeResult}</h3>
          <p>
           {vibeResult === "Chill" &&
  "You are calm and relaxed, ready to take it easy today. 😌🌿🛋️"}
{vibeResult === "Energetic" &&
  "You're full of energy and ready to conquer anything. ⚡🔥💪"}
{vibeResult === "Creative" &&
  "Your imagination is running wild; embrace your creativity! 🎨✨💡"}
{vibeResult === "Focused" &&
  "You're sharp and concentrated, perfect for getting things done. 🎯📚🧠"}

          </p>
          <button onClick={restart} className="btn">
            Restart
          </button>
        </div>
      </div>
    );
  }

  // Quiz questions screen
  const currentQuestion = questions[currentQIndex];

if (!currentQuestion) {
  return (
    <div className="App">
      <div className="quiz-container">
        <p>Loading questions...</p>
      </div>
    </div>
  );
}


  return (
    
    <div className="App">
        <div className="stars"></div>
      <div className="quiz-container">
        <h2>Hello {name}, here's your vibe check for {day}!</h2>
        <h3>{currentQuestion.question}</h3>
        <div className="options">
          {currentQuestion.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(opt.vibe)}
              className="btn option-btn"
            >
              {opt.text}
            </button>
          ))}
        </div>
        <p>
          Question {currentQIndex + 1} of {questions.length}
        </p>
      </div>
    </div>
  );
}

export default App;
