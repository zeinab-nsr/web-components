import {html} from "lit";
import {TapIcon} from "../../icon";

export class BoxFillIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_24_252)">
          <path d="M20 8H4V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6V8Z" fill="currentColor"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C19.7956 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V9C22 9.26522 21.8946 9.51957 21.7071 9.70711C21.5196 9.89464 21.2652 10 21 10H20V18C20 18.7956 19.6839 19.5587 19.1213 20.1213C18.5587 20.6839 17.7956 21 17 21H7C6.20435 21 5.44129 20.6839 4.87868 20.1213C4.31607 19.5587 4 18.7956 4 18V10H3C2.73478 10 2.48043 9.89464 2.29289 9.70711C2.10536 9.51957 2 9.26522 2 9V6C2 5.20435 2.31607 4.44129 2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3ZM17.7071 18.7071C17.8946 18.5196 18 18.2652 18 18V10H6V18C6 18.2652 6.10536 18.5196 6.29289 18.7071C6.48043 18.8946 6.73478 19 7 19H17C17.2652 19 17.5196 18.8946 17.7071 18.7071ZM4 8H20V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V8Z" fill="currentColor"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18 18C18 18.2652 17.8946 18.5196 17.7071 18.7071C17.5196 18.8946 17.2652 19 17 19H7C6.73478 19 6.48043 18.8946 6.29289 18.7071C6.10536 18.5196 6 18.2652 6 18V10H18V18ZM14 14H10C9.73478 14 9.48043 13.8946 9.29289 13.7071C9.10536 13.5196 9 13.2652 9 13C9 12.7348 9.10536 12.4804 9.29289 12.2929C9.48043 12.1054 9.73478 12 10 12H14C14.2652 12 14.5196 12.1054 14.7071 12.2929C14.8946 12.4804 15 12.7348 15 13C15 13.2652 14.8946 13.5196 14.7071 13.7071C14.5196 13.8946 14.2652 14 14 14Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_24_252">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `);
  }
}
