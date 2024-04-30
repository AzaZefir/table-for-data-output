import React, { Fragment } from "react";
import { Skeleton } from "@mui/material";

const SkeletonLoader = () => {
  return (
    <Fragment>
      <Skeleton
        sx={{
          WebkitTransform: "none",
          minHeight: 60,
          mb: 1,
          mt: 2,
        }}
      />
      {[...new Array(10)].map((_, index) => (
        <Skeleton
          key={index}
          sx={{
            WebkitTransform: "none",
            minHeight: 200,
            mb: 2,
          }}
        />
      ))}
    </Fragment>
  );
};

export default SkeletonLoader;
