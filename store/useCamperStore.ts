import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
interface FiltersState {
  location: string;
  form: string;
  features: string[]; 
}

interface CampersStore {

  filters: FiltersState;
  setFilters: (filters: Partial<FiltersState>) => void;
  resetFilters: () => void;


  favorites: string[]; 
  toggleFavorite: (id: string) => void;
}

export const useCampersStore = create<CampersStore>()(
  persist(
    (set) => ({
      filters: {
        location: '',
        form: '',
        features: [],
      },
      setFilters: (newFilters) =>
        set((state) => ({
          filters: { ...state.filters, ...newFilters },
        })),
      resetFilters: () =>
        set({
          filters: { location: '', form: '', features: [] },
        }),
      favorites: [],
      toggleFavorite: (id) =>
        set((state) => {
          const isFavorite = state.favorites.includes(id);
          return {
            favorites: isFavorite
              ? state.favorites.filter((favId) => favId !== id)
              : [...state.favorites, id],
          };
        }),
    }),
    {
      name: 'campers-storage', 
      storage: createJSONStorage(() => localStorage),
      
      partialize: (state) => ({ favorites: state.favorites }), 
    }
  )
);