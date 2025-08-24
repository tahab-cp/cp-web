// store/useLoader.ts
import { create } from "zustand";

type LoaderState = {
  isReady: boolean;
  setReady: (ready: boolean) => void;
};

export const useLoaderStore = create<LoaderState>((set) => ({
  isReady: false,
  setReady: (ready) => set({ isReady: ready }),
}));
