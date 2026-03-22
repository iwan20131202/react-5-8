import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Message = styled.p`
  text-align: center;
  font-family: "Iosevka Charon", monospace;
  font-size: 18px;
  padding: 12px 16px;
  margin: 20px 0;

  color: #555;
  background-color: #f8f9fb;
  border-radius: 8px;
  border: 1px dashed #dcdfe6;

  animation: ${fadeIn} 0.4s ease-in-out;
`;
