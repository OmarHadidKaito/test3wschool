import create from "zustand";

export const useNewsLetterModal = create((set) => ({
  open: false,
  setOpen: (Mystate: boolean) => set(() => ({ open: Mystate })),
}));
