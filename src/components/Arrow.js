import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Arrow({ children, disabled, onClick }) {
  return (
    <Link
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        right: "1%",
        display: disabled ? "none" : "inline-block",
        userSelect: "none",
      }}
    >
      {children}
    </Link>
  );
}

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } =
    React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      <LeftCircleOutlined style={{ fontSize: "30px" }} />
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleElements } =
    React.useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      <RightCircleOutlined style={{ fontSize: "30px" }} />
    </Arrow>
  );
}
