import React from "react";

const Result = ({
  success,
  message,
}: {
  success: boolean;
  message: string;
}) => {
  if (message == "") return null;
  else
    return (
      <div
        className={`${
          success
            ? "text-green-900 bg-green-200 "
            : "text-red-900 bg-red-200 "
        } rounded-2xl p-4 mt-6 font-semibold `}
      >
        {message}
      </div>
    );
};

export default Result;
