import { useSidebar } from "../store/sidebar";
export const Overlay = () => {
  const { open, setOpen } = useSidebar() as any;

  return (
    <div
      className="w3-overlay w3-hide-large"
      onClick={() => setOpen(false)}
      style={{ cursor: "pointer", display: open ? "block" : "none" }}
      title="close side menu"
      id="myOverlay"
    ></div>
  );
};
