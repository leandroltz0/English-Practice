import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';

export const Settings: React.FC = () => {
  const [difficulty, setDifficulty] = useState('Intermediate');
  const [practiceReminders, setPracticeReminders] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="settings">
      <div className="settings__header">
        <h1>Settings</h1>
        <p>Manage your preferences and account</p>
      </div>

      <div className="settings__layout">
        {/* Left Column */}
        <div className="settings__left">
          {/* Account */}
          <div className="settings__section">
            <h3>ACCOUNT</h3>
            <Card>
              <div className="settings__row">
                <div className="settings__field-info">
                  <div className="label">Email</div>
                  <div className="value">leonardo@example.com</div>
                </div>
                <button className="action-link">edit</button>
              </div>
              <div className="settings__row">
                <div className="settings__field-info">
                  <div className="label">Password</div>
                  <div className="value">••••••••</div>
                </div>
                <button className="action-link">edit</button>
              </div>
              <div className="settings__row">
                <div className="settings__field-info">
                  <div className="label">Language</div>
                  <div className="value">Spanish</div>
                </div>
                <button className="action-link">edit</button>
              </div>
            </Card>
          </div>

          {/* Notifications */}
          <div className="settings__section">
            <h3>NOTIFICATIONS</h3>
            <Card>
              <div className="settings__row">
                <div className="settings__field-info">
                  <div className="label">Practice Reminders</div>
                </div>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={practiceReminders}
                    onChange={() => setPracticeReminders(!practiceReminders)}
                  />
                  <span className="toggle__slider" />
                </label>
              </div>
              <div className="settings__row">
                <div className="settings__field-info">
                  <div className="label">Weekly Report</div>
                </div>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={weeklyReport}
                    onChange={() => setWeeklyReport(!weeklyReport)}
                  />
                  <span className="toggle__slider" />
                </label>
              </div>
            </Card>
          </div>

          {/* Settings link (placeholder) */}
          <div className="settings__section">
            <h3>SETTINGS</h3>
            <Card>
              <div className="settings__row">
                <div className="settings__field-info">
                  <div className="label">Export Data</div>
                  <div className="value">Download your learning history</div>
                </div>
                <button className="action-link">export</button>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column */}
        <div className="settings__right">
          {/* Preferences */}
          <div className="settings__section">
            <h3>PREFERENCES</h3>
            <Card>
              <div className="settings__field-group">
                <div className="label">Difficulty</div>
                <div className="settings__difficulty-pills">
                  {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                    <button
                      key={level}
                      className={`difficulty-pill ${difficulty === level ? 'active' : ''}`}
                      onClick={() => setDifficulty(level)}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div className="settings__field-group">
                <div className="label">Focus Areas</div>
                <div className="settings__checkboxes">
                  <label className="checkbox-item">
                    <input type="checkbox" defaultChecked /> Beginner
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" /> Intermediate
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" defaultChecked /> 2x2
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" /> 2x2
                  </label>
                </div>
              </div>

              <div className="settings__field-group">
                <div className="label">Microphone</div>
                <select className="settings__select">
                  <option>Microphone</option>
                  <option>Default Microphone</option>
                  <option>External Mic</option>
                </select>
              </div>
            </Card>
          </div>

          {/* Danger Zone */}
          <div className="settings__danger-zone">
            <h3>DANGER ZONE</h3>
            <button className="danger-link" onClick={() => setShowDeleteConfirm(true)}>
              Delete account
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="settings__bottom">
        <a href="#" className="settings__discord-link">Discord</a>
        <Button>Save Preferences</Button>
      </div>

      {showDeleteConfirm && (
        <Modal onClose={() => setShowDeleteConfirm(false)}>
          <div className="settings__modal">
            <h3>Are you sure?</h3>
            <p>This action cannot be undone. All your progress, XP, and learning history will be permanently deleted.</p>
            <div className="settings__modal-actions">
              <Button variant="outline" onClick={() => setShowDeleteConfirm(false)}>
                Cancel
              </Button>
              <Button className="button--danger">
                Yes, delete my account
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};