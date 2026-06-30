import type { User } from './types';

let currentUser: User | null = null;

export const userStorage = {
  getUser: () => currentUser,
  setUser: (user: User | null) => {
    currentUser = user;
  },
  clear: () => {
    currentUser = null;
  },
};
