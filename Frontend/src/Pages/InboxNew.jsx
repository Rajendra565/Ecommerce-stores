import React from "react";

function InboxNew({ icon, text }) {
  return (
    <div>
      <div className="image flex flex-col w-fit gap-6 text-center items-center">
        <div className="icon">
          <i class={`fa-solid ${icon} fa-2xl`}></i>
        </div>
        <b>{text}</b>
      </div>
    </div>
  );
}

export default InboxNew;
