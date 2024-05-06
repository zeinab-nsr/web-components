import { css } from "lit";

export default css`
  .tooltip {
    display: inline-flex;
    position: absolute;
    flex-direction: row;
    align-items: center;
    background-color: var(--tap-palette-gray-700);
    border-radius: var(--radius-8px, 8px);
    width: var(--tap-tooltip-width, auto);
    padding: var(--tap-sys-spacing-2) var(--tap-sys-spacing-4);
    padding-left: 0;
    justify-content: space-between;
    font-family: var(--tap-sys-font-family);
  }

  .tooltip-icon {
    position: absolute;
    display: flex;
    width: 10px;
    height: 10px;
  }

  :host([placement="top"]) .tooltip-icon,
  :host([placement="top-start"]) .tooltip-icon,
  :host([placement="top-end"]) .tooltip-icon {
    transform: rotate(-90deg);
  }

  :host([placement="bottom"]) .tooltip-icon,
  :host([placement="bottom-start"]) .tooltip-icon,
  :host([placement="bottom-end"]) .tooltip-icon {
    transform: rotate(90deg);
  }

  :host([placement="left"]) .tooltip-icon,
  :host([placement="left-start"]) .tooltip-icon,
  :host([placement="left-end"]) .tooltip-icon {
    transform: rotate(180deg);
  }

  .tooltip-label {
    color: var(--tap-palette-white);
    text-align: right;
  }
`;
