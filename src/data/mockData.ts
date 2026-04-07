// Mock data for English Lab - Educational content for English learners

export interface Phrase {
  id: string;
  text: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  phonetic: string;
  meaning: string;
  examples: string[];
  videoId?: string;
  videoTitle?: string;
  videoTimestamp?: string;
  accuracy?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  phraseCount: number;
}

export interface VocabularyWord {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  definition: string;
  examples: string[];
  synonyms: string[];
}

export interface UserProgress {
  phrasesPracticed: number;
  averageAccuracy: number;
  sessions: number;
  currentStreak: number;
  longestStreak: number;
  weeklyGoal: number;
  weeklyProgress: number[];
  level: string;
  totalXp: number;
}

export interface Activity {
  id: string;
  phrase: string;
  date: string;
  score: number;
  category: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  completed: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

export interface DailyTip {
  id: string;
  title: string;
  content: string;
  category: 'grammar' | 'pronunciation' | 'vocabulary' | 'culture';
  icon: string;
}

export interface WordOfTheDay {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  definition: string;
  example: string;
  origin?: string;
}

export interface AIScenario {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  icon: string;
  available: boolean;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number; // 0-100
  total: number;
  current: number;
  unlocked: boolean;
}

export interface UserProfile {
  name: string;
  role: string;
  location: string;
  bio: string;
  avatar: string;
  sessionsThisMonth: number;
}

// Categories for phrases
export const categories: Category[] = [
  {
    id: 'idioms',
    name: 'Idioms',
    icon: 'MessageCircle', // 💬 -> MessageCircle
    description: 'Common English expressions and sayings',
    phraseCount: 45,
  },
  {
    id: 'phrasal-verbs',
    name: 'Phrasal Verbs',
    icon: 'Repeat2', // 🔄 -> Repeat2
    description: 'Verbs combined with prepositions',
    phraseCount: 38,
  },
  {
    id: 'business',
    name: 'Business English',
    icon: 'Briefcase', // 💼 -> Briefcase
    description: 'Professional and workplace vocabulary',
    phraseCount: 52,
  },
  {
    id: 'transitions',
    name: 'Transitions',
    icon: 'GitCommit', // ➡️ -> GitCommit (arrows/connectors)
    description: 'Connecting words and phrases',
    phraseCount: 28,
  },
  {
    id: 'slang',
    name: 'Slang',
    icon: 'Smile', // 😎 -> Smile
    description: 'Informal and colloquial expressions',
    phraseCount: 34,
  },
  {
    id: 'travel',
    name: 'Travel',
    icon: 'Plane', // ✈️ -> Plane
    description: 'Useful phrases for traveling',
    phraseCount: 41,
  },
];

// Phrases with real YouTube content
export const phrases: Phrase[] = [
  {
    id: '1',
    text: "Keep it simple",
    category: 'idioms',
    difficulty: 'beginner',
    phonetic: "/kiːp ɪt ˈsɪmpəl/",
    meaning: "To do or explain something in the easiest, most straightforward way possible.",
    examples: [
      "Let's keep it simple and just order pizza.",
      "The best designs keep it simple."
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'The Plate-to Video Res...',
    videoTimestamp: 'Y24',
    accuracy: '92%'
  },
  {
    id: '2',
    text: "Phrase simple",
    category: 'idioms',
    difficulty: 'beginner',
    phonetic: "/freɪz ˈsɪmpəl/",
    meaning: "A basic, commonly used expression in everyday conversation.",
    examples: [
      "Start with phrase simple structures before moving to complex ones.",
      "Learning phrase simple patterns helps build confidence."
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'Example Video',
    videoTimestamp: '1:24',
    accuracy: '88%'
  },
  {
    id: '3',
    text: "It's not rocket science",
    category: 'idioms',
    difficulty: 'beginner',
    phonetic: "/ɪts nɒt ˈrɒkɪt ˈsaɪəns/",
    meaning: "Something that is not difficult to understand or do.",
    examples: [
      "Come on, it's not rocket science - just follow the instructions!",
      "Learning to ride a bike isn't rocket science."
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'Example Video',
    videoTimestamp: '1:24',
    accuracy: '95%'
  },
  {
    id: '4',
    text: "Beat around the bush",
    category: 'idioms',
    difficulty: 'intermediate',
    phonetic: "/biːt əˈraʊnd ðə bʊʃ/",
    meaning: "To avoid talking about what is important; to delay getting to the point.",
    examples: [
      "Stop beating around the bush and tell me what happened!",
      "Don't beat around the bush - just say what you mean."
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'Example Video',
    videoTimestamp: '2:15',
    accuracy: '82%'
  },
  {
    id: '5',
    text: "A piece of cake",
    category: 'idioms',
    difficulty: 'beginner',
    phonetic: "/ə piːs ɒv keɪk/",
    meaning: "Something that is very easy to do.",
    examples: [
      "The test was a piece of cake!",
      "Learning to use this app is a piece of cake."
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'Example Video',
    videoTimestamp: '0:45',
    accuracy: '90%'
  },
  {
    id: '6',
    text: "Break a leg",
    category: 'idioms',
    difficulty: 'beginner',
    phonetic: "/breɪk ə leɡ/",
    meaning: "Good luck! (Used especially before a performance)",
    examples: [
      "Break a leg on your exam tomorrow!",
      "The director told the actors to break a leg before the show."
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'Example Video',
    videoTimestamp: '3:00',
    accuracy: '78%'
  },
  {
    id: '7',
    text: "Under the weather",
    category: 'idioms',
    difficulty: 'beginner',
    phonetic: "/ˈʌndə ðə ˈweðə/",
    meaning: "Feeling sick or unwell.",
    examples: [
      "I'm feeling a bit under the weather today.",
      "She's been under the weather all week."
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'Example Video',
    videoTimestamp: '1:30',
    accuracy: '90%'
  },
  {
    id: '8',
    text: "Dolly Standup",
    category: 'business',
    difficulty: 'intermediate',
    phonetic: "/ˈdɒli ˈstændʌp/",
    meaning: "A brief daily meeting where team members share progress updates.",
    examples: [
      "Let's do a quick standup before we start coding.",
      "The standup meeting should be no longer than 15 minutes."
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'Example Video',
    videoTimestamp: '2:00',
    accuracy: '85%'
  },
  {
    id: '9',
    text: "Client Negotiation",
    category: 'business',
    difficulty: 'advanced',
    phonetic: "/ˈklaɪənt nɪˌɡəʊʃiˈeɪʃən/",
    meaning: "The process of discussing terms and reaching an agreement with a client.",
    examples: [
      "Effective client negotiation requires preparation and clear communication.",
      "The client negotiation went well — we closed the deal."
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'Example Video',
    videoTimestamp: '2:30',
    accuracy: '72%'
  },
  {
    id: '10',
    text: "To make matters worse",
    category: 'transitions',
    difficulty: 'intermediate',
    phonetic: "/tuː meɪk ˈmætəz wɜːs/",
    meaning: "To make a bad situation even more difficult or unpleasant.",
    examples: [
      "It started raining, and to make matters worse, I forgot my umbrella.",
      "The car broke down, and to make matters worse, my phone died."
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'Example Video',
    videoTimestamp: '2:00',
    accuracy: '80%'
  },
  {
    id: '11',
    text: "Give up on",
    category: 'phrasal-verbs',
    difficulty: 'intermediate',
    phonetic: "/ɡɪv ʌp ɒn/",
    meaning: "To stop believing that someone can succeed or improve.",
    examples: [
      "Don't give up on your dreams!",
      "The teacher never gave up on her struggling students."
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'Example Video',
    videoTimestamp: '0:55',
    accuracy: '85%'
  },
  {
    id: '12',
    text: "Run into",
    category: 'phrasal-verbs',
    difficulty: 'beginner',
    phonetic: "/rʌn ˈɪntuː/",
    meaning: "To meet someone unexpectedly.",
    examples: [
      "I ran into my old friend at the supermarket.",
      "Guess who I ran into yesterday?"
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'Example Video',
    videoTimestamp: '1:45',
    accuracy: '88%'
  },
  {
    id: '13',
    text: "Touch base",
    category: 'business',
    difficulty: 'beginner',
    phonetic: "/tʌtʃ beɪs/",
    meaning: "To briefly contact or communicate with someone.",
    examples: [
      "Let me touch base with the team before making a decision.",
      "I'll touch base with you next week about the project."
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'Example Video',
    videoTimestamp: '2:30',
    accuracy: '92%'
  },
  {
    id: '14',
    text: "Keep me in the loop",
    category: 'business',
    difficulty: 'intermediate',
    phonetic: "/kiːp miː ɪn ðə luːp/",
    meaning: "To keep someone informed about a situation.",
    examples: [
      "Please keep me in the loop about any changes.",
      "I want to be kept in the loop on this project."
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'Example Video',
    videoTimestamp: '1:10',
    accuracy: '87%'
  },
  {
    id: '15',
    text: "Chill out",
    category: 'slang',
    difficulty: 'beginner',
    phonetic: "/tʃɪl aʊt/",
    meaning: "To relax and calm down.",
    examples: [
      "Just chill out, everything will be fine.",
      "We spent the weekend just chilling out at home."
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'Example Video',
    videoTimestamp: '0:30',
    accuracy: '93%'
  },
  {
    id: '16',
    text: "Get used to",
    category: 'phrasal-verbs',
    difficulty: 'intermediate',
    phonetic: "/ɡet juːzd tuː/",
    meaning: "To become accustomed to something.",
    examples: [
      "It took me a while to get used to the new schedule.",
      "You'll get used to it eventually."
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'Example Video',
    videoTimestamp: '2:45',
    accuracy: '79%'
  },
  {
    id: '17',
    text: "Let's keep it simple",
    category: 'idioms',
    difficulty: 'beginner',
    phonetic: "/lets kiːp ɪt ˈsɪmpəl/",
    meaning: "A suggestion to avoid overcomplicating something.",
    examples: [
      "Let's keep it simple for the presentation.",
      "We don't need fancy features — let's keep it simple."
    ],
    videoId: 'dQw4w9WgXcQ',
    videoTitle: 'The Plate-to Video Res...',
    videoTimestamp: 'Y24',
    accuracy: '91%'
  },
];

// Vocabulary words
export const vocabulary: VocabularyWord[] = [
  {
    id: '1',
    word: 'ubiquitous',
    phonetic: '/juːˈbɪkwɪtəs/',
    partOfSpeech: 'adjective',
    definition: 'Present, appearing, or found everywhere.',
    examples: [
      'Smartphones have become ubiquitous in modern society.',
      'Coffee shops are ubiquitous in this city.'
    ],
    synonyms: ['omnipresent', 'ever-present', 'universal']
  },
  {
    id: '2',
    word: 'meticulous',
    phonetic: '/məˈtɪkjʊləs/',
    partOfSpeech: 'adjective',
    definition: 'Showing great attention to detail; very careful and precise.',
    examples: [
      'She was meticulous in her research.',
      'The artist is known for his meticulous attention to detail.'
    ],
    synonyms: ['thorough', 'careful', 'precise', 'detailed']
  },
  {
    id: '3',
    word: 'serendipity',
    phonetic: '/ˌserənˈdɪpɪti/',
    partOfSpeech: 'noun',
    definition: 'The occurrence of events by chance in a happy way.',
    examples: [
      'Meeting her at the conference was pure serendipity.',
      'Many scientific discoveries happen through serendipity.'
    ],
    synonyms: ['chance', 'luck', 'fortune']
  },
];

// Word of the Day
export const wordOfTheDay: WordOfTheDay = {
  word: 'Resilient',
  phonetic: '/rɪˈzɪliənt/',
  partOfSpeech: 'adjective',
  definition: 'Able to recover quickly from difficult conditions; tough and adaptable.',
  example: '"Despite the setbacks, the team remained resilient and delivered the project on time."',
  origin: 'From Latin resiliens — "leaping back"',
};

// Daily tips for English learners
export const dailyTips: DailyTip[] = [
  {
    id: '1',
    title: 'Than vs. Then',
    content: '"Than" is for comparisons (bigger than). "Then" is for time (first this, then that). Quick trick: thAn = compArison, thEn = timE.',
    category: 'grammar',
    icon: '📝',
  },
  {
    id: '2',
    title: 'Silent Letters',
    content: 'Many English words have silent letters: kNow, wRite, lisTen, deBt, iSland. Focus on listening more than spelling to learn pronunciation.',
    category: 'pronunciation',
    icon: '🔇',
  },
  {
    id: '3',
    title: 'False Friends',
    content: '"Actually" doesn\'t mean "actualmente" (currently). It means "in fact" or "really". Watch out for false cognates between Spanish and English!',
    category: 'vocabulary',
    icon: '⚠️',
  },
];

// Quiz questions
export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'What does "Break a leg" mean?',
    options: ['Be careful', 'Good luck', 'Run fast', 'Get injured'],
    correctIndex: 1,
    explanation: '"Break a leg" is an idiom meaning "Good luck!" — commonly used before performances or big moments.',
    category: 'Idioms',
  },
  {
    id: '2',
    question: 'Which word best completes: "I need to ___ base with the team."',
    options: ['touch', 'reach', 'feel', 'grab'],
    correctIndex: 0,
    explanation: '"Touch base" is a business English phrase meaning to briefly make contact with someone.',
    category: 'Business',
  },
  {
    id: '3',
    question: '"Under the weather" means:',
    options: ['Standing outside in rain', 'Feeling sick', 'Being cold', 'Getting sunburned'],
    correctIndex: 1,
    explanation: '"Under the weather" is an idiom for feeling ill or unwell. It has nothing to do with actual weather!',
    category: 'Idioms',
  },
  {
    id: '4',
    question: 'What is the correct past tense of "run into"?',
    options: ['runned into', 'ran into', 'run intos', 'running into'],
    correctIndex: 1,
    explanation: '"Run" is an irregular verb. Its past tense is "ran", so "run into" becomes "ran into".',
    category: 'Phrasal Verbs',
  },
  {
    id: '5',
    question: 'What does "keep me in the loop" mean?',
    options: ['Trap me in a circle', 'Keep me informed', 'Make me dizzy', 'Include me in a group'],
    correctIndex: 1,
    explanation: '"Keep me in the loop" means keeping someone updated and informed about a situation or project.',
    category: 'Business',
  },
];

// AI Scenarios
export const aiScenarios: AIScenario[] = [
  {
    id: '1',
    title: 'Code Review',
    description: 'Practice discussing code changes, giving constructive feedback, and defending technical decisions in English.',
    difficulty: 'intermediate',
    icon: 'Code',
    available: false,
  },
  {
    id: '2',
    title: 'Daily Standup',
    description: 'Simulate daily standup meetings — describe what you did, what you\'re doing, and any blockers.',
    difficulty: 'beginner',
    icon: 'Calendar',
    available: false,
  },
  {
    id: '3',
    title: 'Client Negotiation',
    description: 'Practice negotiating deadlines, scope, and pricing with a simulated client. Build confidence in business discussions.',
    difficulty: 'advanced',
    icon: 'Handshake',
    available: false,
  },
  {
    id: '4',
    title: 'Job Interview',
    description: 'Practice answering common interview questions, telling stories using the STAR method, and asking good questions.',
    difficulty: 'intermediate',
    icon: 'Target',
    available: false,
  },
  {
    id: '5',
    title: 'Coffee Shop Ordering',
    description: 'Practice casual conversation and ordering at a coffee shop, including special requests and small talk.',
    difficulty: 'beginner',
    icon: 'Coffee',
    available: false,
  },
  {
    id: '6',
    title: 'Airport Check-in',
    description: 'Simulate checking in for a flight, going through security, and handling common travel situations.',
    difficulty: 'beginner',
    icon: 'Plane',
    available: false,
  },
];

// Progress milestones
export const milestones: Milestone[] = [
  {
    id: '1',
    title: 'First Steps',
    description: 'Practice your first 10 phrases',
    icon: '🌱',
    progress: 100,
    total: 10,
    current: 10,
    unlocked: true,
  },
  {
    id: '2',
    title: 'Getting Fluent',
    description: 'Practice 50 phrases',
    icon: '📖',
    progress: 100,
    total: 50,
    current: 50,
    unlocked: true,
  },
  {
    id: '3',
    title: 'Centurion',
    description: 'Practice 100 phrases',
    icon: '💯',
    progress: 100,
    total: 100,
    current: 100,
    unlocked: true,
  },
  {
    id: '4',
    title: 'Phrase Master',
    description: 'Practice 200 phrases',
    icon: '🏆',
    progress: 62,
    total: 200,
    current: 124,
    unlocked: false,
  },
  {
    id: '5',
    title: 'Streak Week',
    description: 'Maintain a 7-day streak',
    icon: '🔥',
    progress: 100,
    total: 7,
    current: 7,
    unlocked: true,
  },
  {
    id: '6',
    title: 'Accuracy King',
    description: 'Get 95%+ accuracy on 10 phrases',
    icon: '🎯',
    progress: 70,
    total: 10,
    current: 7,
    unlocked: false,
  },
];

// User profile data
export const userProfile: UserProfile = {
  name: 'Leonardo García',
  role: 'Intermediate Learner',
  location: 'Buenos Aires, AR',
  bio: 'Software developer learning English to advance my career. Focused on business English and tech vocabulary.',
  avatar: 'L',
  sessionsThisMonth: 26,
};

// User progress data
export const userProgress: UserProgress = {
  phrasesPracticed: 124,
  averageAccuracy: 88,
  sessions: 26,
  currentStreak: 7,
  longestStreak: 14,
  weeklyGoal: 15,
  weeklyProgress: [5, 8, 12, 6, 10, 3, 0],
  level: 'Intermediate',
  totalXp: 2450,
};

// Category progress for the Progress page
export const categoryProgress = [
  { category: 'Idioms', practiced: 42, total: 45, accuracy: 91 },
  { category: 'Phrasal Verbs', practiced: 28, total: 38, accuracy: 84 },
  { category: 'Business', practiced: 30, total: 52, accuracy: 89 },
  { category: 'Transitions', practiced: 12, total: 28, accuracy: 86 },
  { category: 'Slang', practiced: 8, total: 34, accuracy: 79 },
  { category: 'Travel', practiced: 4, total: 41, accuracy: 92 },
];

// Recent activities
export const recentActivities: Activity[] = [
  { id: '1', phrase: 'Keep it simple', date: 'Apr 6, 2026', score: 95, category: 'Idioms' },
  { id: '2', phrase: 'Touch base', date: 'Apr 5, 2026', score: 88, category: 'Business' },
  { id: '3', phrase: "Let's sync up", date: 'Apr 4, 2026', score: 92, category: 'Business' },
  { id: '4', phrase: 'Beat around the bush', date: 'Apr 3, 2026', score: 78, category: 'Idioms' },
  { id: '5', phrase: 'Run into', date: 'Apr 2, 2026', score: 85, category: 'Phrasal Verbs' },
  { id: '6', phrase: 'Under the weather', date: 'Apr 1, 2026', score: 90, category: 'Idioms' },
  { id: '7', phrase: 'A piece of cake', date: 'Mar 31, 2026', score: 96, category: 'Idioms' },
  { id: '8', phrase: 'Give up on', date: 'Mar 30, 2026', score: 82, category: 'Phrasal Verbs' },
];

// Daily challenge
export const dailyChallenge = {
  phrase: phrases[0],
  hint: "This idiom means something is easy to understand",
  xpReward: 50,
};

// Recommended lessons
export const lessons: Lesson[] = [
  {
    id: '1',
    title: 'Common Idioms for Beginners',
    description: 'Learn 10 essential English idioms used in everyday conversation',
    category: 'Idioms',
    difficulty: 'beginner',
    duration: '15 min',
    completed: true,
  },
  {
    id: '2',
    title: 'Business Email Vocabulary',
    description: 'Master professional vocabulary for workplace emails',
    category: 'Business',
    difficulty: 'intermediate',
    duration: '20 min',
    completed: false,
  },
  {
    id: '3',
    title: 'Phrasal Verbs with "Get"',
    description: 'Understand the many meanings of "get" in different contexts',
    category: 'Phrasal Verbs',
    difficulty: 'intermediate',
    duration: '25 min',
    completed: false,
  },
  {
    id: '4',
    title: 'Travel Expressions',
    description: 'Essential phrases for airports, hotels, and restaurants',
    category: 'Travel',
    difficulty: 'beginner',
    duration: '18 min',
    completed: true,
  },
];

// Helper function to search phrases
export const searchPhrases = (query: string): Phrase[] => {
  const lowercaseQuery = query.toLowerCase();
  return phrases.filter(
    (phrase) =>
      phrase.text.toLowerCase().includes(lowercaseQuery) ||
      phrase.meaning.toLowerCase().includes(lowercaseQuery) ||
      phrase.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Helper function to get phrases by category
export const getPhrasesByCategory = (categoryId: string): Phrase[] => {
  return phrases.filter((phrase) => phrase.category === categoryId);
};

// Helper function to get random phrase
export const getRandomPhrase = (): Phrase => {
  return phrases[Math.floor(Math.random() * phrases.length)];
};