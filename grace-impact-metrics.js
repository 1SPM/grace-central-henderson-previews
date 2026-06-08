/**
 * GRACE impact metrics — demo constants for member prototypes.
 * Kingdom Impact Score is internal-only (not shown in UI).
 */
(function (global) {
  const GRACE_METRICS = {
    graceImpact: { month: 18.42, ytd: 1240, lifetime: 4380 },
    pulse: {
      score: 248,
      week: { service: 45, volunteer: 80, care: 25, learning: 30, community: 68 },
      weekMeta: [
        { key: 'service', label: 'Service', hint: 'Worship & live participation' },
        { key: 'volunteer', label: 'Volunteer', hint: 'Serve events & ministry' },
        { key: 'care', label: 'Care', hint: 'Prayer & pastoral care' },
        { key: 'learning', label: 'Learning', hint: 'Bible study & journal' },
        { key: 'community', label: 'Community', hint: 'Groups & watch parties' },
      ],
      recent: [
        { label: 'Volunteer Event', delta: 40 },
        { label: 'Live Service', delta: 15 },
        { label: 'Care Response', delta: 25 },
        { label: 'Bible Study', delta: 10 },
      ],
      churchLive: [
        { icon: 'watch', title: 'Live service', detail: '342 watching now' },
        { icon: 'prayer', title: 'Open dispatch', detail: 'Prayer request live' },
        { icon: 'groups', title: 'Watch party', detail: '125 in small groups' },
      ],
      earnHints: [
        { label: 'First Prayer', delta: 8, icon: 'prayer' },
        { label: 'First Gift', delta: 12, icon: 'give' },
        { label: 'Journal entry', delta: 10, icon: 'journal' },
        { label: 'Watch Party', delta: 12, icon: 'party' },
        { label: 'Live Service', delta: 15, icon: 'watch' },
        { label: 'Volunteer Event', delta: 40, icon: 'people' },
      ],
    },
    commitment: {
      level: 'Partner',
      pct: 6,
      next: 'Champion',
      nextPct: 8,
      dailyToNext: 1.67,
      progressPct: 62,
    },
    livesImpacted: { month: 23 },
    impactRouteLabel: 'Food Pantry',
    allocation: [
      { cause: 'Missions Fund', pct: 40 },
      { cause: 'Building Fund', pct: 25 },
      { cause: 'Youth Ministry', pct: 20 },
      { cause: 'Food Pantry', pct: 10 },
      { cause: 'Care Fund', pct: 5 },
    ],
    givingGoal: { pct: 52, raised: 1240, target: 2400 },
    givenMonth: 230,
    walletAvailable: 3240,
  };

  global.GRACE_METRICS = GRACE_METRICS;
})(typeof window !== 'undefined' ? window : globalThis);
