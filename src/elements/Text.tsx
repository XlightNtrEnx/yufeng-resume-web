import styled from "styled-components";

const Text = styled.span`
  line-height: 1.2;
  margin: 0;
`;

export const H1 = styled(Text).attrs((props) => ({
  as: "h1",
  ...props,
}))`
  text-align: center;
`;

export const H2 = styled(Text).attrs((props) => ({
  as: "h2",
  ...props,
}))`
  text-align: center;
`;

export const Span = styled(Text).attrs((props) => ({
  as: "span",
  ...props,
}))``;

export const P = styled(Text).attrs((props) => ({
  as: "p",
  ...props,
}))``;

export const TextArea = styled(Text).attrs((props) => ({
  as: "textarea",
  ...props,
}))`
  &:focus {
    outline: none;
  }
`;
