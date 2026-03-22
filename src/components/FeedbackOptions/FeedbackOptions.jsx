import { Component } from "react";

import { ButtonGroup, Button } from "./FeedbackOptions.styled.js";

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ButtonGroup>
        {options.map((option) => (
          <Button
            key={option}
            option={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        ))}
      </ButtonGroup>
    );
  }
}