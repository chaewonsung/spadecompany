import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const initialState = {
  isFloating: false,
  isResizable: false,
  width: 350,
};

export const useLeftBarStore = create(
  devtools((set) => ({
    ...initialState,
    toggleFloating: () => set((state) => ({ isFloating: !state.isFloating })),
    toggleResizable: () =>
      set((state) => ({ isResizable: !state.isResizable })),
    setWidth: (newWidthOrDelta, relative = false) =>
      set((state) => ({
        width: relative ? state.width + newWidthOrDelta : newWidthOrDelta,
      })),
  }))
);
