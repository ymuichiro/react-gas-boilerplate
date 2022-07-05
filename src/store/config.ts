import { atom } from 'recoil';

/**
 * Reactの各コンポーネント全体に適用するState値
 */
export const globalConig = atom<{ mode: string }>({
  key: 'globalConfig',
  default: {
    mode: 'light',
  },
});
