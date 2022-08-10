import create from "zustand";

export const useSidebar = create((set) => ({
  open: false,
  setOpen: (Mystate: boolean) => set(() => ({ open: Mystate })),
}));
