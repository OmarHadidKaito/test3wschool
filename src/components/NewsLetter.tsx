import { useNewsLetterModal } from "../store/newsletter";
export const NewsLetter = () => {
  const { open, setOpen } = useNewsLetterModal() as any;
  return (
    <div
      id="newsletter"
      className="w3-modal"
      style={{ display: open ? "block" : "none" }}
    >
      <div
        className="w3-modal-content w3-animate-zoom"
        style={{ padding: "32px" }}
      >
        <div className="w3-container w3-white w3-center">
          <i
            onClick={() => {
              setOpen(false);
            }}
            className="fa fa-remove w3-right w3-button w3-transparent w3-xxlarge"
          ></i>
          <h2 className="w3-wide">NEWSLETTER</h2>
          <p>
            Join our mailing list to receive updates on new arrivals and special
            offers.
          </p>
          <p>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Enter e-mail"
            />
          </p>
          <button
            onClick={() => {
              setOpen(false);
            }}
            type="button"
            className="w3-button w3-padding-large w3-red w3-margin-bottom"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
