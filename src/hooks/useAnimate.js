import { create } from "zustand";

const useAnimate = create((set) => ({
  isAnimate: true,
  onHome: () => set({ isAnimate: false }),
  onStart: () => set({ isAnimate: true }),
}));

export default useAnimate;
