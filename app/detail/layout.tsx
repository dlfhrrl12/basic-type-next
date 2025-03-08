import React, { PropsWithChildren } from "react";

const Detaillayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <h1>Detaillayout</h1>
      {children}
    </div>
  );
};

export default Detaillayout;
