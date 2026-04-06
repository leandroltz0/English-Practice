import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { userProgress, categoryProgress, milestones } from '../data/mockData';
import { TrendingUp, Target, Flame, Award } from 'lucide-react';

export const Progress: React.FC = () => {
  return (
    <div className="progress-page">
      <div className="progress-page__header">
        <h1>Progress</h1>
        <p>Track your learning journey and see how far you've come.</p>
      </div>

      {/* Overview Stats */}
      <div className="progress-page__stats">
        <Card className="progress-page__stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(91, 155, 213, 0.12)', color: '#5B9BD5' }}>
            <TrendingUp size={20} />
          </div>
          <div className="stat-value">{userProgress.phrasesPracticed}</div>
          <div className="stat-label">Phrases practiced</div>
        </Card>
        <Card className="progress-page__stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(127, 191, 160, 0.12)', color: '#7FBFA0' }}>
            <Target size={20} />
          </div>
          <div className="stat-value">{userProgress.averageAccuracy}%</div>
          <div className="stat-label">Avg. accuracy</div>
        </Card>
        <Card className="progress-page__stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(249, 115, 22, 0.12)', color: '#F97316' }}>
            <Flame size={20} />
          </div>
          <div className="stat-value">{userProgress.currentStreak}</div>
          <div className="stat-label">Day streak</div>
        </Card>
        <Card className="progress-page__stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(168, 85, 247, 0.12)', color: '#A855F7' }}>
            <Award size={20} />
          </div>
          <div className="stat-value">{userProgress.totalXp}</div>
          <div className="stat-label">Total XP</div>
        </Card>
      </div>

      {/* Weekly Progress */}
      <Card className="progress-page__weekly">
        <h3>This Week</h3>
        <div className="weekly-bars">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
            const maxPhrases = Math.max(...userProgress.weeklyProgress, 1);
            const height = (userProgress.weeklyProgress[index] / maxPhrases) * 100;
            const isToday = index === 6;
            return (
              <div key={day} className={`weekly-bar ${isToday ? 'today' : ''}`}>
                <div className="bar-fill" style={{ height: `${height}%` }} />
                <span className="bar-label">{day}</span>
                <span className="bar-value">{userProgress.weeklyProgress[index]}</span>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Category Breakdown */}
      <div className="progress-page__section">
        <h3>Category Breakdown</h3>
        <div className="progress-page__categories">
          {categoryProgress.map((cat) => (
            <Card key={cat.category} className="progress-page__category-row">
              <div className="category-info">
                <div className="category-name">{cat.category}</div>
                <div className="category-count">{cat.practiced}/{cat.total} phrases</div>
              </div>
              <div className="category-bar-wrapper">
                <div className="category-bar">
                  <div
                    className="category-bar-fill"
                    style={{ width: `${(cat.practiced / cat.total) * 100}%` }}
                  />
                </div>
              </div>
              <Badge variant="success">{cat.accuracy}%</Badge>
            </Card>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="progress-page__section">
        <h3>Milestones</h3>
        <div className="progress-page__milestones">
          {milestones.map((milestone) => (
            <Card
              key={milestone.id}
              className={`progress-page__milestone ${milestone.unlocked ? 'unlocked' : 'locked'}`}
            >
              <div className="milestone-icon">{milestone.icon}</div>
              <div className="milestone-info">
                <div className="milestone-title">{milestone.title}</div>
                <div className="milestone-desc">{milestone.description}</div>
                <div className="milestone-bar">
                  <div
                    className="milestone-bar-fill"
                    style={{ width: `${milestone.progress}%` }}
                  />
                </div>
                <div className="milestone-count">{milestone.current}/{milestone.total}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
