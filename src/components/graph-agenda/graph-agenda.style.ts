import { css } from 'lit-element';
import { globalStyle } from '../../global/variables.style';

export const style = [
  globalStyle,
  css`
    .agenda-list {
      list-style-type: none;
      padding: 0;
      margin: 0;
      color: #000000b7;
      font-family: var(--default-font-family);
      font-style: normal;
      font-weight: normal;
    }

    .agenda-event {
      border-color: rgba(16, 16, 16, 0.3);
      border-style: solid;
      border-width: 0px 0px 1px 0px;
      margin: 8px 8px 0px 8px;
      padding: 8px 0px;
      display: flex;
    }

    .event-time-container {
      display: flex;
      flex-direction: column;
      font-size: 10px;
      color: rgba(16, 16, 16, 0.6);
      font-weight: 600;
      margin: 6px 0px;
      width: 50px;
    }

    .event-duration {
      color: rgba(16, 16, 16, 0.3);
    }

    .event-details-container {
      margin: 2px 4px 4px 16px;
    }

    .event-location {
      font-size: 10px;
      color: rgba(16, 16, 16, 0.4);
    }

    .event-attendie-list {
      padding: 0px;
      margin: 12px 0px 0px 0px;
    }

    .event-attendie {
      display: inline-block;
      margin: 0px 6px 0px 0px;
    }
  `
];