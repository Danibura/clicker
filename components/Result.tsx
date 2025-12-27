import React from "react";

const Result = ({
  success,
  message,
}: {
  success: boolean;
  message: string;
}) => (
  <div className={`${success ? "text-green-500" : "text-red-500"}`}>
    {message}
  </div>
);

export default Result;
