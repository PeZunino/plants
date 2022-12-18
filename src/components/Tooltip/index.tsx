import React, { PropsWithChildren } from "react";
import { Container } from "./style";

interface TooltipProps {
  title: string;
}

const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = ({
  children,
  title,
}) => {
  return (
    <Container>
      {children}
      <span>title</span>
    </Container>
  );
};

export default Tooltip;
