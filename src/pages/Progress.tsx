import React, { useMemo } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { userProgress, categoryProgress, milestones } from '../data/mockData';
import { TrendingUp, Target, Flame, Award, Check } from 'lucide-react';
import { getIcon } from '../utils/iconMap';

export const Progress: React.FC = () => {
  const maxVal = useMemo(() => Math.max(...userProgress.weeklyProgress, 1), []);
  const weekTotal = useMemo(() => userProgress.weeklyProgress.reduce((a, b) => a + b, 0), []);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const todayIdx = (() => { const d = new Date().getDay(); return d === 0 ? 6 : d - 1; })();

  return (
    <div className="progress-page">
      <div className="progress-page__header">
        <h1>Progress</h1>
        <p>Track your learning journey and see how far you've come.</p>
      </div>

      <div className="progress-page__stats">
        {[
          { icon: TrendingUp, value: userProgress.phrasesPracticed, label: 'Phrases practiced', color: '#5B9BD5' },
          { icon: Target, value: `${userProgress.averageAccuracy}%`, label: 'Avg. accuracy', color: '#7FBFA0' },
          { icon: Flame, value: userProgress.currentStreak, label: 'Day streak', color: '#F97316' },
          { icon: Award, value: userProgress.totalXp, label: 'Total XP', color: '#A855F7' },
        ].map((s, i) => (
          <Card key={i} className="progress-page__stat-card">
            <div className="stat-icon" style={{ backgroundColor: `${s.color}15`, color: s.color }}>
              <s.icon size={20} />
            </div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </Card>
        ))}
      </div>

      <Card className="progress-page__weekly">
        <div className="weekly-header">
          <h3>This Week</h3>
          <span className="weekly-total">{weekTotal} phrases total</span>
        </div>
        <div className="weekly-chart">
          <div className="weekly-grid">
            {[0, 25, 50, 75, 100].map(p => (
              <div key={p} className="grid-line" style={{ bottom: `${p}%` }}>
                <span className="grid-label">{Math.round(maxVal * p / 100)}</span>
              </div>
            ))}
          </div>
          <div className="weekly-bars">
            {days.map((day, i) => {
              const v = userProgress.weeklyProgress[i];
              const h = (v / maxVal) * 100;
              return (
                <div key={day} className={`weekly-bar ${i === todayIdx ? 'today' : ''}`}>
                  <div className="bar-value">{v}</div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ height: `${Math.max(h, 3)}%` }} />
                  </div>
                  <span className="bar-label">{day}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      <div className="progress-page__section">
        <h3>Category Breakdown</h3>
        <div className="progress-page__categories">
          {categoryProgress.map((cat) => {
            const pct = Math.round((cat.practiced / cat.total) * 100);
            return (
              <Card key={cat.category} className="progress-page__category-row">
                <div className="category-info">
                  <div className="category-name">{cat.category}</div>
                  <div className="category-count">{cat.practiced}/{cat.total} phrases</div>
                </div>
                <div className="category-bar-wrapper">
                  <div className="category-bar">
                    <div className="category-bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
                <div className="category-pct">{pct}%</div>
                <Badge variant="success">{cat.accuracy}%</Badge>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="progress-page__section">
        <h3>Milestones</h3>
        <div className="progress-page__milestones">
          {milestones.map((m) => {
            const Icon = getIcon(m.icon);
            return (
              <Card key={m.id} className={`progress-page__milestone ${m.unlocked ? 'unlocked' : 'locked'}`}>
                <div className={`milestone-icon-wrapper ${m.unlocked ? 'milestone-icon-wrapper--done' : ''}`}>
                  {Icon ? <Icon size={22} /> : null}
                  {m.unlocked && <div className="milestone-check"><Check size={10} /></div>}
                </div>
                <div className="milestone-info">
                  <div className="milestone-title">{m.title}</div>
                  <div className="milestone-desc">{m.description}</div>
                  <div className="milestone-progress-row">
                    <div className="milestone-bar">
                      <div className="milestone-bar-fill" style={{ width: `${m.progress}%` }} />
                    </div>
                    <span className="milestone-count">{m.current}/{m.total}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
