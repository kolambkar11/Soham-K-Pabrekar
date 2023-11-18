import React from "react";
// import pdf from "../../assets/04-04-AshutoshKolambkarCV.pdf";
// import coverletter from "../../assets/04-04-AshutoshKolambkarCV.pdf";

const Downloadresume = () => {
  return (
    <>
      <p className="w3-large w3-text-theme">
        <b>
          <i className="fa fa-file fa-fw w3-margin-right w3-text-blue-grey"></i>Download Resume
        </b>
      </p>
      {/* href={} */}
      <a rel="noreferrer" target="_blank" className="w3-button w3-black w3-round-large">
        Soham K Pabrekar Resume
      </a>
      <p className="w3-large w3-text-theme">
        <b>
          <i className="fa fa-file fa-fw w3-margin-right w3-text-blue-grey"></i>Download Cover Letter
        </b>
      </p>
      {/* href={} */}
      <a rel="noreferrer" target="_blank" className="w3-button w3-black w3-round-large">
        Soham K Pabrekar Cover Letter
      </a>
    </>
  );
};

export default Downloadresume;
