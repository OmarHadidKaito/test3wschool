export const Header = () => {
  return (
    <>
      <header className="w3-container w3-xlarge">
        <p className="w3-left">Jeans</p>
        <p className="w3-right">
          <i className="fa fa-shopping-cart w3-margin-right"></i>
          <i className="fa fa-search"></i>
        </p>
      </header>
      <div className="w3-display-container w3-container">
        <img
          src="https://www.w3schools.com/w3images/jeans.jpg"
          alt="Jeans"
          style={{ width: "100%" }}
        />
        <div
          className="w3-display-topleft w3-text-white"
          style={{ padding: "24px 48px" }}
        >
          <h1 className="w3-jumbo w3-hide-small">New arrivals</h1>
          <h1 className="w3-hide-large w3-hide-medium">New arrivals</h1>
          <h1 className="w3-hide-small">COLLECTION 2016</h1>
          <p>
            <a
              href="#jeans"
              className="w3-button w3-black w3-padding-large w3-large"
            >
              SHOP NOW
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
