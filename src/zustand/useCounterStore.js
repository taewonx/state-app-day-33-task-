import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),

  // [도전 과제] 비동기 액션: 1초 후 감소
  isWating: false,
  decreaseAsync: async () => {
    set({ isWating: true });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state)=>({ count: state.count - 1, isWating: false }));
  },
}));

export default useCounterStore;

