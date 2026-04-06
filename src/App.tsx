import { useState, useCallback } from 'react';
import { Layout } from './components/layout/Layout';
import { LoadingScreen } from './components/LoadingScreen';
import type { TabType } from './components/layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { PhraseFinder } from './pages/PhraseFinder';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { Progress } from './pages/Progress';
import { AIScenarios } from './pages/AIScenarios';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const handleLoadingFinished = useCallback(() => {
    setLoading(false);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard onNavigate={setActiveTab} />;
      case 'phrase':
        return <PhraseFinder />;
      case 'scenarios':
        return <AIScenarios />;
      case 'progress':
        return <Progress />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  if (loading) {
    return <LoadingScreen onFinished={handleLoadingFinished} />;
  }

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

export default App;
