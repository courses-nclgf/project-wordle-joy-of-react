import React from "react";

const SadBanner = ({ answer }) => {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <p>
        Click to <u>start a new game!</u>
      </p>
    </div>
  );
};

const HappyBanner = ({ tentatives }) => {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {tentatives} guesse{tentatives > 1 && "s"}
        </strong>
        .
      </p>
      <p>
        Click to <u>start a new game!</u>
      </p>
    </div>
  );
};

function Banner({ status, answer, tentatives, handleRestart }) {
  return (
    <div onClick={handleRestart}>
      {status === "won" && <HappyBanner tentatives={tentatives} />}
      {status === "lost" && <SadBanner answer={answer} />}
    </div>
  );
}

export default Banner;
