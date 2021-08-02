import { atom } from 'recoil';

export const Word = atom<string>({
  key: 'Word',
  default: 'JavaScript',
});