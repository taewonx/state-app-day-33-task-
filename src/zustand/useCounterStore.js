import { create } from "zustand";

const MAX_COUNT = 10;
const MIN_COUNT = 0;
const useCounterStore = create((set, get) => ({
  count: 0,
  increase: () => {
    set((state) => {
      if (state.count >= MAX_COUNT) return { count: MAX_COUNT };
      else return { count: state.count + 1 };
    });
  },
  decrease: () => {
    const count = get().count;
    if (count <= MIN_COUNT) return set({ count: MIN_COUNT });
    else return set({ count: count - 1 });
  },
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
