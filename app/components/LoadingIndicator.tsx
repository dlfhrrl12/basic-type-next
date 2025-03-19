import { LoaderCircle } from "lucide-react";
import React from "react";

const LoadingIndicator = () => {
  return (
    <div className="flex justify-center items-center p-2">
      <LoaderCircle />
    </div>
  );
};

export default LoadingIndicator;
