import { create } from 'zustand';

type GlobalState = {
  theme: `light` | `dark`;
};

// Global state for the entire application (UI Theme)
export const useGlobalState = create<GlobalState>()((set) => ({
  theme: `light`,
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === `light` ? `dark` : `light` })),
}));
