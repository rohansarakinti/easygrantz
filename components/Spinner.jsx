import MoonLoader from "react-spinners/MoonLoader";
import React from "react";

const Spinner = props => {
 const style = {position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}
  return (
    <div style={style}>
      <MoonLoader color='#00a002' loading={props.isFetching} />
    </div>
  );
};

export default Spinner;