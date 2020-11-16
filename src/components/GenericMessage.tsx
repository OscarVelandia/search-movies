import React from "react";

interface GenericMessageProps {
  text: string;
}

const GenericMessage = ({ text }: GenericMessageProps) => {
  return <div>{text}</div>;
};

export default GenericMessage;
