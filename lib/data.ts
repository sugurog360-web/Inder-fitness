export const goals = [
  { title: 'Lean strength', metric: '3x / week', progress: 74, next: 'Add 2 sessions' },
  { title: 'Hydration', metric: '2.7L goal', progress: 88, next: '1.1L to go' },
  { title: 'Recovery', metric: 'Sleep quality', progress: 63, next: 'Calm wind down' },
];

export const activityData = [
  { day: 'Mon', value: 62 },
  { day: 'Tue', value: 78 },
  { day: 'Wed', value: 74 },
  { day: 'Thu', value: 86 },
  { day: 'Fri', value: 90 },
  { day: 'Sat', value: 68 },
  { day: 'Sun', value: 82 },
];

export const recentWorkouts = [
  { title: 'Upper body focus', meta: '50 min • Strength', time: 'Today' },
  { title: 'Mobility reset', meta: '20 min • Recovery', time: 'Yesterday' },
  { title: 'HIIT circuit', meta: '28 min • Cardio', time: 'Mon' },
];

export const achievements = [
  { title: '12-week streak', icon: '✦', description: 'Stayed active for 12 straight weeks.' },
  { title: 'Hydration goal', icon: '◎', description: 'Reached your water goal 6 times this month.' },
  { title: 'Form focus', icon: '✓', description: 'Completed 8 sessions with strict technique.' },
  { title: 'Recovery mastery', icon: '★', description: 'Tracked sleep and rest consistently.' },
];

export const timeline = [
  { title: 'Recovery check-in', text: 'Your sleep trend improved 14% compared with last week.' },
  { title: 'Goal milestone', text: 'You are 74% of the way to your lean strength target.' },
  { title: 'AI suggestion', text: 'Focus on progressive overload in your next push session.' },
];

export const coachSuggestions = [
  { title: 'Volume balance', text: 'Maintain 2 heavy compounds and 1 accessory day this week.' },
  { title: 'Mobility', text: 'Add 12 minutes of hip mobility after leg work to reduce tightness.' },
  { title: 'Fueling', text: 'Add a protein-forward snack before your evening training block.' },
];

export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export const navMeta: NavItem[] = [
  { href: '/', label: 'Dashboard' },
  { href: '/fitness', label: 'Fitness' },
  { href: '/goals', label: 'Goals' },
  { href: '/progress', label: 'Progress' },
  { href: '/nutrition', label: 'Nutrition' },
  { href: '/music', label: 'Music' },
  { href: '/products', label: 'Products' },
  { href: '/community', label: 'Community' },
  { href: '/challenges', label: 'Challenges' },
  { href: '/ai', label: 'AI Trainer' },
  { href: '/profile', label: 'Profile' },
  { href: '/settings', label: 'Settings' },
];
