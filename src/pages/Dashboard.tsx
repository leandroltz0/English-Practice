import React, { useState, useMemo, useCallback } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PlaySquare, Sparkles, BookOpen, Lightbulb, HelpCircle, CheckCircle, XCircle, Trophy, Zap } from 'lucide-react';
import { getIcon } from '../utils/iconMap';
import type { TabType } from '../components/layout/Sidebar';
import { phrases, wordOfTheDay, dailyTips, quizQuestions } from '../data/mockData';

interface DashboardProps {
  onNavigate: (tab: TabType) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = quizQuestions[currentQuizIndex];
  const currentTip = dailyTips[0];
  const TipIcon = useMemo(() => getIcon(currentTip.icon), [currentTip.icon]);
  const recentPhrases = useMemo(() => phrases.slice(0, 5), []);

  const handleQuizAnswer = useCallback((index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === currentQuestion.correctIndex) {
      setQuizScore((s) => s + 1);
    }
  }, [selectedAnswer, currentQuestion.correctIndex]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuizIndex < quizQuestions.length - 1) {
      setCurrentQuizIndex((i) => i + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
    }
  }, [currentQuizIndex]);

  const handleRestartQuiz = useCallback(() => {
    setQuizStarted(false);
    setCurrentQuizIndex(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizFinished(false);
  }, []);

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard__header">
        <h1>Welcome back.</h1>
        <p>Practice the phrases that define your career.</p>
      </div>

      {/* Feature Cards Grid */}
      <div className="dashboard__grid">
        <Card className="dashboard__feature-card" onClick={() => onNavigate('phrase')}>
          <div>
            <div className="feature-icon">
              <PlaySquare />
            </div>
            <div className="feature-label">VIDEO CONTEXT</div>
            <h2>Phrase Finder</h2>
            <p>Discover real phrases from videos and practice with native speakers.</p>
          </div>
          <Button style={{ marginTop: '16px' }} onClick={(e) => { e.stopPropagation(); onNavigate('phrase'); }}>
            Start practicing
          </Button>
        </Card>

        <Card className="dashboard__feature-card dashboard__feature-card--disabled">
          <div>
            <Badge variant="neutral" className="coming-soon-badge">COMING SOON</Badge>
            <div className="feature-icon" style={{ color: '#6B7280' }}>
              <Sparkles />
            </div>
            <h2>AI Scenarios</h2>
            <p>Practice real-world professional conversations powered by artificial intelligence.</p>
            <ul>
              <li>Code Review</li>
              <li>Daily Standup</li>
              <li>Client Negotiation</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Word of the Day */}
      <div className="dashboard__section">
        <div className="section-header">
          <BookOpen size={20} />
          <h2>Word of the Day</h2>
        </div>
        <Card className="dashboard__wotd-card">
          <div className="wotd-word">{wordOfTheDay.word}</div>
          <div className="wotd-phonetic">{wordOfTheDay.phonetic}</div>
          <Badge variant="neutral">{wordOfTheDay.partOfSpeech}</Badge>
          <p className="wotd-definition">{wordOfTheDay.definition}</p>
          <div className="wotd-example">{wordOfTheDay.example}</div>
          {wordOfTheDay.origin && (
            <div className="wotd-origin">
              <em>Origin: {wordOfTheDay.origin}</em>
            </div>
          )}
        </Card>
      </div>

      {/* Daily Tip */}
      <div className="dashboard__section">
        <div className="section-header">
          <Lightbulb size={20} />
          <h2>Daily Tip</h2>
        </div>
        <Card className="dashboard__tip-card">
          <div className="tip-header">
            <span className="tip-icon">{TipIcon ? <TipIcon size={20} /> : null}</span>
            <h3>{currentTip.title}</h3>
            <Badge variant="neutral">{currentTip.category}</Badge>
          </div>
          <p className="tip-content">{currentTip.content}</p>
        </Card>
      </div>

      {/* Quick Quiz */}
      <div className="dashboard__section">
        <div className="section-header">
          <HelpCircle size={20} />
          <h2>Quick Quiz</h2>
        </div>
        <Card className="dashboard__quiz-card">
          {!quizStarted ? (
            <div className="quiz-start">
              <p>Test your knowledge with {quizQuestions.length} quick questions about idioms, phrasal verbs, and business English.</p>
              <Button onClick={() => setQuizStarted(true)}>Start Quiz</Button>
            </div>
          ) : quizFinished ? (
            <div className="quiz-finished">
              <div className="quiz-score">{quizScore}/{quizQuestions.length}</div>
              <p>
                {quizScore === quizQuestions.length
                  ? <><Trophy size={16} className="inline-icon" /> Perfect score!</>
                  : quizScore >= quizQuestions.length * 0.6
                  ? <><Zap size={16} className="inline-icon" /> Great job! Keep practicing!</>
                  : <><BookOpen size={16} className="inline-icon" /> Keep learning — you'll get better!</>}
              </p>
              <Button variant="outline" onClick={handleRestartQuiz}>Try Again</Button>
            </div>
          ) : (
            <div className="quiz-active">
              <div className="quiz-progress">
                Question {currentQuizIndex + 1} of {quizQuestions.length}
              </div>
              <h3 className="quiz-question">{currentQuestion.question}</h3>
              <div className="quiz-options">
                {currentQuestion.options.map((option, idx) => {
                  let optionClass = 'quiz-option';
                  if (selectedAnswer !== null) {
                    if (idx === currentQuestion.correctIndex) optionClass += ' correct';
                    else if (idx === selectedAnswer) optionClass += ' incorrect';
                  }
                  return (
                    <button key={idx} className={optionClass} onClick={() => handleQuizAnswer(idx)} disabled={selectedAnswer !== null}>
                      <span>{option}</span>
                      {selectedAnswer !== null && idx === currentQuestion.correctIndex && <CheckCircle size={18} />}
                      {selectedAnswer !== null && idx === selectedAnswer && idx !== currentQuestion.correctIndex && <XCircle size={18} />}
                    </button>
                  );
                })}
              </div>
              {selectedAnswer !== null && (
                <div className="quiz-explanation">
                  <p>{currentQuestion.explanation}</p>
                  <Button onClick={handleNextQuestion}>
                    {currentQuizIndex < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                  </Button>
                </div>
              )}
            </div>
          )}
        </Card>
      </div>

      {/* Recent Phrases */}
      <div className="dashboard__recent">
        <h2>Recent Phrases</h2>
        <div className="dashboard__scroll-row">
          {recentPhrases.map((phrase) => (
            <Card key={phrase.id} className="dashboard__phrase-card" onClick={() => onNavigate('phrase')}>
              <h3>{phrase.text}</h3>
              <div className="phrase-meta">
                <span>Category</span>
                <Badge variant="success">{phrase.accuracy || 'Accuracy'}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};