import {html} from "lit";
import {TapIcon} from "../../icon";

export class FingerSwipeVerticalIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.1188 10.0743L22.8505 14.1742C23.2348 15.0843 22.8551 16.1226 21.9761 16.6094L16.5066 19.638C16.036 19.8986 15.2533 20.0938 14.7296 19.9528L8.229 18.1192L8.53444 16.9973C8.62425 16.6754 8.86963 16.4147 9.20748 16.307L12.4733 15.338L6.95615 6.21106C6.52978 5.50571 6.78049 4.60693 7.51745 4.19885C8.25441 3.79077 9.19348 4.03073 9.61985 4.73607L12.7021 9.83492L13.5101 9.38751C13.7853 9.23509 14.0965 9.14217 14.4082 9.12839L19.0876 8.8511C19.9717 8.80395 20.7887 9.29296 21.1188 10.0743Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.94723 10.7209C2.93078 8.77801 4.48355 7.38594 5.65211 6.67837L6.74898 8.33774C5.859 8.87663 4.58877 10.0062 3.79352 11.5771C3.01466 13.1156 2.68397 15.0842 3.62891 17.4106L1.71673 18.1221C0.543386 15.2334 0.947287 12.6961 1.94723 10.7209Z" fill="currentColor"/>
      </svg>
      `);
  }
}
