import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { MapPin } from 'lucide-react';
import { userProfile, userProgress, recentActivities } from '../data/mockData';

export const Profile: React.FC = () => {
  const getScoreVariant = (score: number): 'success' | 'neutral' => {
    return score >= 70 ? 'success' : 'neutral';
  };

  return (
    <div className="profile">
      <h1>Profile</h1>

      {/* Hero Card — matches reference */}
      <Card className="profile__hero">
        <div className="profile__user-info">
          <div className="profile__avatar">{userProfile.avatar}</div>
          <div className="profile__details">
            <h2>{userProfile.name}</h2>
            <div className="profile__meta">
              <Badge variant="neutral">{userProfile.role}</Badge>
              <span className="profile__location">
                <MapPin size={14} />
                {userProfile.location}
              </span>
            </div>
            <p className="profile__bio">{userProfile.bio}</p>
          </div>
        </div>
        <Button>Edit profile</Button>
      </Card>

      {/* Stats Row — matches reference */}
      <h2>Stats</h2>
      <div className="profile__stats">
        <Card className="profile__stat-card">
          <div className="stat-value">{userProgress.phrasesPracticed}</div>
          <div className="stat-label">Phrases practiced</div>
        </Card>
        <Card className="profile__stat-card">
          <div className="stat-value">{userProgress.averageAccuracy}%</div>
          <div className="stat-label">Avg. accuracy</div>
        </Card>
        <Card className="profile__stat-card">
          <div className="stat-value">{userProfile.sessionsThisMonth}</div>
          <div className="stat-label">Sessions this month</div>
        </Card>
      </div>

      {/* Recent Activity Table — matches reference */}
      <div className="profile__activity">
        <h2>Recent Activity</h2>
        <Card>
          <div className="profile__activity-table">
            <div className="activity-header-row">
              <span>Phrase</span>
              <span>Category</span>
              <span>Date</span>
              <span>Score</span>
            </div>
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-row">
                <span className="activity-phrase">{activity.phrase}</span>
                <span className="activity-category">{activity.category}</span>
                <span className="activity-date">{activity.date}</span>
                <Badge variant={getScoreVariant(activity.score)}>{activity.score}%</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};