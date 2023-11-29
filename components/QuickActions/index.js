import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  lights,
  handleTurnOnAll,
  handleTurnOffAll,
  isOnCount,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        disabled={isOnCount === 0}
        onClick={() => {
          handleTurnOffAll();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        disabled={isOnCount === lights.length}
        onClick={() => {
          handleTurnOnAll();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
