import {
  MessageCircle, Repeat2, Briefcase, GitCommit, Smile, Plane,
  Code, Calendar, Handshake, Target, Coffee, Home, PlaySquare,
  Sparkles, TrendingUp, User, Settings, BookOpen, Lightbulb,
  HelpCircle, Search, Volume2, Mic, ChevronLeft, ChevronRight,
  MapPin, Flame, Award, Sun, Moon, Monitor, CheckCircle, XCircle,
  AlertTriangle, Info, X, Sprout, Trophy, Hash, PenLine, VolumeX, Zap,
} from 'lucide-react';
import type { FC } from 'react';

const iconRegistry: Record<string, FC<{ size?: number; className?: string }>> = {
  MessageCircle, Repeat2, Briefcase, GitCommit, Smile, Plane,
  Code, Calendar, Handshake, Target, Coffee, Home, PlaySquare,
  Sparkles, TrendingUp, User, Settings, BookOpen, Lightbulb,
  HelpCircle, Search, Volume2, Mic, ChevronLeft, ChevronRight,
  MapPin, Flame, Award, Sun, Moon, Monitor, CheckCircle, XCircle,
  AlertTriangle, Info, X, Sprout, Trophy, Hash, PenLine, VolumeX, Zap,
};

export const getIcon = (name: string): FC<{ size?: number; className?: string }> | null => {
  return iconRegistry[name] || null;
};

export type IconName = keyof typeof iconRegistry;
