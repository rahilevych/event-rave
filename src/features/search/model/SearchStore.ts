import { create } from 'zustand';

interface SearchSate {
  query: string;
  setQuery: (query: string) => void;
}
export const useSearchStore = create<SearchSate>((set) => ({
  query: '',
  setQuery: (query) => set({ query }),
}));
