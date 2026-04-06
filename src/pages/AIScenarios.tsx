import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { aiScenarios } from '../data/mockData';
import { Sparkles } from 'lucide-react';

export const AIScenarios: React.FC = () => {
  return (
    <div className="ai-scenarios">
      <div className="ai-scenarios__header">
        <div className="ai-scenarios__header-icon">
          <Sparkles size={24} />
        </div>
        <div>
          <h1>AI Scenarios</h1>
          <p>Practice real-world conversations with AI-powered role-playing scenarios.</p>
        </div>
        <Badge variant="neutral" className="ai-scenarios__badge">COMING SOON</Badge>
      </div>

      <div className="ai-scenarios__grid">
        {aiScenarios.map((scenario) => (
          <Card key={scenario.id} className="ai-scenarios__card">
            <div className="scenario-icon">{scenario.icon}</div>
            <div className="scenario-info">
              <h3>{scenario.title}</h3>
              <p>{scenario.description}</p>
              <div className="scenario-meta">
                <Badge variant="neutral">{scenario.difficulty}</Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="ai-scenarios__cta">
        <div className="cta-content">
          <h3>Want to be notified when AI Scenarios launches?</h3>
          <p>We're building AI-powered conversation practice for real-world professional situations. Join the waitlist to be the first to try it.</p>
          <div className="cta-email">
            <input type="email" placeholder="your@email.com" className="input" />
            <button className="button button--primary">Notify me</button>
          </div>
        </div>
      </Card>
    </div>
  );
};
