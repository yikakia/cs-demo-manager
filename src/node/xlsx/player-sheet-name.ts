export const PlayerSheetName = {
  General: 'general',
  Clutch: 'clutch',
  Maps: 'maps',
  Economy: 'economy',
} as const;

export type PlayerSheetName = (typeof PlayerSheetName)[keyof typeof PlayerSheetName];
