import React, { useState, useCallback } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { useToast } from '../contexts/ToastContext';

const validateEmail = (email: string): string | null => {
  if (!email.trim()) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address';
  return null;
};

export const Settings: React.FC = () => {
  const toast = useToast();
  const [difficulty, setDifficulty] = useState('Intermediate');
  const [practiceReminders, setPracticeReminders] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [saving, setSaving] = useState(false);

  // Email editing with validation
  const [email, setEmail] = useState('leonardo@example.com');
  const [editingEmail, setEditingEmail] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleEmailSave = useCallback(() => {
    const error = validateEmail(email);
    if (error) { setEmailError(error); return; }
    setEmailError(null);
    setEditingEmail(false);
    toast.success('Email updated', 'Your email has been changed successfully.');
  }, [email, toast]);

  const handleSavePreferences = useCallback(async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
    toast.success('Preferences saved', 'Your settings have been updated.');
  }, [toast]);

  const handleDeleteAccount = useCallback(() => {
    setShowDeleteConfirm(false);
    toast.error('Account deleted', 'Your account has been permanently removed.');
  }, [toast]);

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
                  {editingEmail ? (
                    <div className="settings__edit-field">
                      <input
                        type="email"
                        className={`input ${emailError ? 'input--error' : ''}`}
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(null); }}
                        onKeyDown={(e) => e.key === 'Enter' && handleEmailSave()}
                        aria-invalid={!!emailError}
                        aria-describedby={emailError ? 'email-error' : undefined}
                        autoFocus
                      />
                      {emailError && <span id="email-error" className="field-error" role="alert">{emailError}</span>}
                    </div>
                  ) : (
                    <div className="value">{email}</div>
                  )}
                </div>
                {editingEmail ? (
                  <div className="settings__edit-actions">
                    <button className="action-link" onClick={handleEmailSave}>save</button>
                    <button className="action-link" onClick={() => { setEditingEmail(false); setEmailError(null); }}>cancel</button>
                  </div>
                ) : (
                  <button className="action-link" onClick={() => setEditingEmail(true)}>edit</button>
                )}
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
                  <input type="checkbox" checked={practiceReminders} onChange={() => setPracticeReminders(!practiceReminders)} />
                  <span className="toggle__slider" />
                </label>
              </div>
              <div className="settings__row">
                <div className="settings__field-info">
                  <div className="label">Weekly Report</div>
                </div>
                <label className="toggle">
                  <input type="checkbox" checked={weeklyReport} onChange={() => setWeeklyReport(!weeklyReport)} />
                  <span className="toggle__slider" />
                </label>
              </div>
            </Card>
          </div>

          {/* Settings link */}
          <div className="settings__section">
            <h3>SETTINGS</h3>
            <Card>
              <div className="settings__row">
                <div className="settings__field-info">
                  <div className="label">Export Data</div>
                  <div className="value">Download your learning history</div>
                </div>
                <button className="action-link" onClick={() => toast.info('Export started', 'Your data is being prepared for download.')}>export</button>
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
                    <input type="checkbox" defaultChecked /> Idioms
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" /> Phrasal Verbs
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" defaultChecked /> Business English
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" /> Slang & Informal
                  </label>
                </div>
              </div>

              <div className="settings__field-group">
                <div className="label">Microphone</div>
                <select className="settings__select">
                  <option>Default Microphone</option>
                  <option>External Mic</option>
                  <option>Headset Mic</option>
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
        <Button loading={saving} onClick={handleSavePreferences}>Save Preferences</Button>
      </div>

      {showDeleteConfirm && (
        <Modal onClose={() => setShowDeleteConfirm(false)} title="Delete account confirmation">
          <div className="settings__modal">
            <h3>Are you sure?</h3>
            <p>This action cannot be undone. All your progress, XP, and learning history will be permanently deleted.</p>
            <div className="settings__modal-actions">
              <Button variant="outline" onClick={() => setShowDeleteConfirm(false)}>Cancel</Button>
              <Button className="button--danger" onClick={handleDeleteAccount}>Yes, delete my account</Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};