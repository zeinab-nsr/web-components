import {html} from "lit";
import {TapIcon} from "../../icon";

export class SpeakerCrossIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_24_993)">
          <path d="M18.1 13.075L15.8 15.4C15.65 15.55 15.475 15.625 15.275 15.625C15.075 15.625 14.9 15.55 14.75 15.4C14.6 15.25 14.525 15.0709 14.525 14.8625C14.525 14.6542 14.6 14.475 14.75 14.325L17.05 12.025L14.725 9.72503C14.575 9.57503 14.5 9.40003 14.5 9.20003C14.5 9.00003 14.575 8.82503 14.725 8.67503C14.875 8.52503 15.0542 8.45003 15.2625 8.45003C15.4708 8.45003 15.65 8.52503 15.8 8.67503L18.1 10.975L20.4 8.65003C20.55 8.50003 20.725 8.42503 20.925 8.42503C21.125 8.42503 21.3 8.50003 21.45 8.65003C21.6 8.80003 21.675 8.97919 21.675 9.18753C21.675 9.39586 21.6 9.57503 21.45 9.72503L19.15 12.025L21.475 14.325C21.625 14.475 21.7 14.65 21.7 14.85C21.7 15.05 21.625 15.225 21.475 15.375C21.325 15.525 21.1458 15.6 20.9375 15.6C20.7292 15.6 20.55 15.525 20.4 15.375L18.1 13.075ZM7 15H3.75C3.53333 15 3.35417 14.9292 3.2125 14.7875C3.07083 14.6459 3 14.4667 3 14.25V9.75003C3 9.53336 3.07083 9.35419 3.2125 9.21253C3.35417 9.07086 3.53333 9.00003 3.75 9.00003H7L10.725 5.27503C10.9583 5.04169 11.2292 4.98753 11.5375 5.11253C11.8458 5.23753 12 5.46669 12 5.80003V18.2C12 18.5334 11.8458 18.7625 11.5375 18.8875C11.2292 19.0125 10.9583 18.9584 10.725 18.725L7 15Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_24_993">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `);
  }
}
