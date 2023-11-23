import React from "react";
import pdf from "../../assets/soham-k-Pabrekar-CV.pdf";
import coverletter from "../../assets/SKP-CoverLetter.pdf";

const Downloadresume = () => {
  return (
    <>
      <p className="w3-large w3-text-theme">
        <b>
          <i className="fa fa-file fa-fw w3-margin-right w3-text-blue-grey"></i>Download Resume
        </b>
      </p>
      {/*  */}
      <a href={pdf} rel="noreferrer" target="_blank" className="w3-button w3-black w3-round-large">
        Soham K Pabrekar Resume
      </a>
      <p className="w3-large w3-text-theme">
        <b>
          <i className="fa fa-file fa-fw w3-margin-right w3-text-blue-grey"></i>Download Cover Letter
        </b>
      </p>
      <a href={coverletter} rel="noreferrer" target="_blank" className="w3-button w3-black w3-round-large">
        Soham K Pabrekar Cover Letter
      </a>
    </>
  );
};

export default Downloadresume;
