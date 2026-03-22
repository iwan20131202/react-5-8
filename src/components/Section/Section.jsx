import { Component } from "react";

import { SectionWrapper, SectionTitle } from "./Section.styled.js";

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <SectionWrapper>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionWrapper>
    );
  }
}