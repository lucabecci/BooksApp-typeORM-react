import React from "react";

function Message({ msg }) {
  return (
    <div>
      <div className="alert alert-dismissible alert-success">
        <h5>{msg}</h5>
      </div>
    </div>
  );
}

export default Message;
