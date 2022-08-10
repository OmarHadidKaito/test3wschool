import { useSidebar } from "../store/sidebar";

export const Navbar = () => {
  const { setOpen: setOpenSidebar } = useSidebar() as any;
  return (
    <header className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
      <div className="w3-bar-item w3-padding-24 w3-wide">LOGO</div>
      <a
        className="w3-bar-item w3-button w3-padding-24 w3-right"
        onClick={(e) => {
          e.preventDefault();
          setOpenSidebar(true);
        }}
      >
        <i className="fa fa-bars"></i>
      </a>
    </header>
  );
};
