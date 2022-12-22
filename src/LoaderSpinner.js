import React from "react";
import { ColorRing } from "react-loader-spinner";

export default function LoaderSpinner() {
  return (
    <div className="LoaderSpinner text-center">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={[
          "##CCCCCC",
          "#FFF963",
          "#FFFFFF",
          "##CCCCCC",
          "#FFF963",
          "#FFFFFF",
        ]}
      />
    </div>
  );
}
