import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { Mic, Search, Volume2, ChevronLeft, ChevronRight } from 'lucide-react';
import { phrases, searchPhrases, categories } from '../data/mockData';
import type { Phrase } from '../data/mockData';

export const PhraseFinder: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhrase, setSelectedPhrase] = useState<Phrase | null>(null);
  const [filteredPhrases, setFilteredPhrases] = useState<Phrase[]>(phrases);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setFilteredPhrases(phrases);
    } else {
      setFilteredPhrases(searchPhrases(searchQuery));
    }
    setSelectedCategory(null);
  };

  const handleCategoryFilter = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const filtered = phrases.filter(p => p.category === categoryId);
    setFilteredPhrases(filtered);
    setSearchQuery('');
  };

  const handlePhraseSelect = (phrase: Phrase) => {
    setSelectedPhrase(phrase);
  };

  const handleBackToList = () => {
    setSelectedPhrase(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Get recent phrases for bottom scroll
  const recentPhrases = phrases.slice(0, 5);

  // Phrase detail view — matches reference
  if (selectedPhrase) {
    return (
      <div className="phrase-finder">
        <div className="phrase-finder__detail-header">
          <h1>Phrase Finder</h1>
          <p>Search a phrase and watch how a native says it.</p>
        </div>

        <div className="phrase-finder__search">
          <Input
            placeholder="e.g. Keep it simple / Let's sync up"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <Button icon={<Search size={20} />} onClick={handleSearch}>Search</Button>
        </div>

        <button className="phrase-finder__back" onClick={handleBackToList}>
          <ChevronLeft size={20} />
          <span>Back to phrases</span>
        </button>

        <div className="phrase-finder__content">
          {/* Left — Video + Detected Phrase */}
          <div className="phrase-finder__left">
            <div className="phrase-finder__video-wrapper">
              <div className="phrase-finder__badge-wrapper">
                <Badge variant="neutral" style={{ backgroundColor: 'white', fontWeight: 700, fontSize: '11px' }}>
                  PHRASE AT {selectedPhrase.videoTimestamp}
                </Badge>
              </div>
              <iframe
                src={`https://www.youtube.com/embed/${selectedPhrase.videoId}?start=84&controls=1`}
                title={`Video for ${selectedPhrase.text}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>

            <div className="phrase-finder__video-info">
              <span className="video-title">{selectedPhrase.videoTitle}</span>
              <span className="video-channel">@chinmeecer</span>
            </div>

            <Card className="phrase-finder__detected-phrase">
              <div className="detected-label">Detected Phrase</div>
              <h2>Let's Keep it simple.</h2>
            </Card>
          </div>

          {/* Right — Native Pronunciation */}
          <div className="phrase-finder__right">
            <Card className="phrase-finder__pronunciation">
              <h3>✦ Native Pronunciation</h3>
              <div className="phonetic">/et' keep it simple/</div>

              <div className="meaning-section">
                <h4>Meaning</h4>
                <p className="meaning">{selectedPhrase.meaning}</p>
              </div>

              <div className="action-buttons">
                <Button icon={<Volume2 size={20} />} variant="outline">
                  Listen
                </Button>
                <Button icon={<Mic size={20} />} variant="primary">
                  Record yourself
                </Button>
              </div>
            </Card>

            {/* Recent Phrases sidebar */}
            <div className="phrase-finder__recent-sidebar">
              <h3>Recent Phrases</h3>
              <div className="recent-sidebar-scroll">
                {recentPhrases.map((phrase) => (
                  <Card
                    key={phrase.id}
                    className="recent-sidebar-card"
                    onClick={() => handlePhraseSelect(phrase)}
                  >
                    <span className="recent-phrase-text">{phrase.text}</span>
                    <Badge variant="success">{phrase.accuracy || '—'}</Badge>
                    <div className="recent-phrase-cat">Category</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Phrase list view
  return (
    <div className="phrase-finder">
      <div className="phrase-finder__detail-header">
        <h1>Phrase Finder</h1>
        <p>Search a phrase and watch how a native says it.</p>
      </div>

      <div className="phrase-finder__search">
        <Input
          placeholder="e.g. Keep it simple / Let's sync up"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button icon={<Search size={20} />} onClick={handleSearch}>Search</Button>
      </div>

      {/* Category filters */}
      <div className="phrase-finder__filters">
        <button
          className={`filter-chip ${!selectedCategory ? 'active' : ''}`}
          onClick={() => {
            setSelectedCategory(null);
            setFilteredPhrases(phrases);
          }}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`filter-chip ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryFilter(category.id)}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="phrase-finder__results-info">
        <span>{filteredPhrases.length} phrase{filteredPhrases.length !== 1 ? 's' : ''} found</span>
      </div>

      {/* Phrase list */}
      <div className="phrase-finder__list">
        {filteredPhrases.length === 0 ? (
          <Card className="phrase-finder__empty">
            <p>No phrases found. Try a different search term.</p>
          </Card>
        ) : (
          filteredPhrases.map((phrase) => (
            <Card
              key={phrase.id}
              className="phrase-finder__item"
              onClick={() => handlePhraseSelect(phrase)}
            >
              <div className="phrase-item__content">
                <h3>"{phrase.text}"</h3>
                <p>{phrase.meaning}</p>
              </div>
              <div className="phrase-item__meta">
                <Badge variant="neutral">{phrase.category}</Badge>
                <ChevronRight size={20} className="phrase-item__arrow" />
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};