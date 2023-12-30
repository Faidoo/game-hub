import { Box } from "@chakra-ui/react";
import React, { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="100%" borderRadius="1rem" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
