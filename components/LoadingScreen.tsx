import React from "react";
import { Loader } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="h-screen w-full grid place-items-center">
      <Loader size={20} className="animate-spin" />
    </div>
  );
};

export default LoadingScreen;
