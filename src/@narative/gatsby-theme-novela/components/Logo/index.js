import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <svg
      width="100%"
      viewBox="0 0 803 226"
      fill={fill}
    >
      <path d="M259.6 12.7c-.3 1-1.5 8.3-2.7 16.3-1.2 8-2.3 14.6-2.4 14.8-.1.2-2-.7-4.1-2-5.3-3.1-16.8-3.2-23.4-.1-10 4.5-17.6 14.4-21.6 27.8-2.1 7.1-2.4 22.1-.6 28.1 1.6 5.4 5.8 10.7 10.5 13.4 7.7 4.4 21.1 3.4 28.1-2.1l2.6-2v6.1h19.6l7.8-49.3c4.2-27 8-50 8.2-51 .5-1.5-.5-1.7-10.5-1.7-9.6 0-11 .2-11.5 1.7zm-11 47.7l2.8 2.3-1.8 12.4c-2.5 16.7-4 19.1-12.8 20.4-3.9.6-4.8.3-7.5-1.9-3.7-3.1-4.6-7.8-3.2-16.5 1.3-8.3 4.5-14.9 8.3-17.2 4.4-2.7 10.8-2.5 14.2.5zM288.6 13.7c-.7 3.4-15.6 97.3-15.6 98.5 0 .4 5 .8 11 .8 6.1 0 11-.2 11-.5 0-.9 15-95.7 15.6-98.8l.6-2.7h-22l-.6 2.7zM14.5 18.2C13.5 22.6 0 108.8 0 110.9c0 2.1.3 2.1 20.9 2.1 28.9 0 38.3-2 47.5-10.1C74.7 97.4 79 87.7 79 79c0-4.9-3.2-11.3-6.9-13.9l-3.2-2.3 3.6-2.6c12.2-9.3 14.1-28.6 3.6-37.5-6.5-5.4-13.8-6.7-38.7-6.7H15l-.5 2.2zM56 36.5c3.7 1.9 4.7 5.5 2.9 10.2-2.4 6.2-5.6 7.8-17 8.1-11.4.4-10.6 1.5-8.7-11.5l1.2-8.3h9.3c6.5 0 10.3.5 12.3 1.5zM50.7 73c5 1.8 6.6 7.3 3.7 13.3-2.6 5.5-6.3 7-18.7 7.5-10.3.4-10.9.4-10.4-1.4.3-1.1 1.1-5.3 1.7-9.4 1.8-12 .8-11 11.4-11 5.1 0 10.7.5 12.3 1zM119.7 40.4c-2.1.8-4.7 2.2-5.8 3.2-1.8 1.6-1.9 1.6-1.9-.4 0-2.1-.4-2.2-10.5-2.2-5.8 0-10.5.2-10.5.5 0 .2-2.5 16-5.5 35-3 18.9-5.5 34.9-5.5 35.5 0 .6 4.2 1 10.9 1h10.8l3.9-23.7 3.9-23.7 3.4-2.3c2.8-1.9 4.8-2.3 10.6-2.3 8.3 0 7.4 1.1 9.6-12.3 1.1-6.7 1.1-8-.1-8.7-2.2-1.4-8.9-1.1-13.3.4zM161.3 40.5c-10.7 3-18.8 9.1-22.4 17-3.4 7.4-3.3 7.5 8.9 7.5h10.8l1.1-3c1.4-3.7 7.1-6.4 11.4-5.5 3.7.8 6.3 4.6 5.5 7.8-.5 2.3-1.1 2.4-9.8 3-5.1.3-12.4 1.5-16.2 2.7-20.9 6.6-27 32.7-9.6 41.3 6.4 3.1 18.6 3.1 24.9 0 4.6-2.3 6.1-2.2 6.1.3 0 1.1 2.1 1.4 11 1.4h11v-8.8c0-4.8 1.1-15.8 2.5-24.5 3-18.8 3.1-22.9.6-28.2-3.7-8-9.9-11.4-22.5-12.1-5.4-.3-9.9.1-13.3 1.1zm12.1 45.2c-.7 5.6-3.5 8.7-9.3 10.3-6.4 1.7-11.8-1.5-10.6-6.3 1.4-5.4 7.1-8.4 16.2-8.6l4.3-.1-.6 4.7zM337.7 40c-15.4 3.9-27.4 17.5-30.7 34.8-1.7 8.2-.9 18.6 1.8 23.7 2 4 7.9 10 11.7 12.1 4.4 2.4 12.9 3.7 20.5 3.1 9.8-.8 17.9-4 24.1-9.5l4.8-4.3-4.6-6.4-4.5-6.3-4.5 3.4c-5.4 4.1-11.2 5.8-17 4.9-5.1-.7-9.9-4.6-10.9-8.7l-.6-2.8 22.8-.2 22.9-.3.7-4c1.1-6 1-19.5-.1-23.4-3.1-10.3-11.7-16-24.8-16.7-4.3-.2-9.5.1-11.6.6zm14 20.2c1.3 1.3 2.3 3.3 2.3 5V68h-23.1l1.5-2.8c2.7-5.3 5.7-7 12.5-7.1 3.3-.1 5.1.5 6.8 2.1zM384 41.4c0 .2 3.2 16 7 35l7 34.6-2 4.1c-2.6 5-7.2 7.9-12.7 7.9-4 0-4.2.2-4.7 3.2-.3 1.8-1 5.7-1.5 8.6-.8 5-.7 5.3 1.5 5.8 4.3 1.1 15.8-.1 19.8-2.1 5.1-2.5 10.1-7.7 14.1-15 3.7-6.7 42.5-81.7 42.5-82.2 0-.2-5.3-.3-11.8-.3h-11.9l-8.9 19.5c-10.2 22.6-9.1 22.8-12.5-2.8L407.7 41h-11.8c-6.6 0-11.9.2-11.9.4zM167.5 125.2c-.8 3.4-15.5 96.7-15.5 98.4 0 1.1 2.1 1.4 10.9 1.4h10.8l2.3-14.8c6-38.7 5.3-35.5 9-37.9 4.2-2.9 11.9-3.2 14.3-.5 2.4 2.6 2.2 6.2-1.8 30.6-1.9 11.9-3.5 21.8-3.5 22.1 0 .3 4.9.5 10.9.5h10.9l.6-2.7c.9-4.4 6.4-40.2 7.1-46.3.8-6.5-.8-14.2-3.6-18.2-3.3-4.6-7.4-6.2-16.4-6.3-6.6 0-9 .5-13.5 2.6l-5.6 2.6 2.3-14.1c1.2-7.8 2.5-15.3 2.7-16.9l.6-2.7h-11c-10.5 0-11 .1-11.5 2.2zM713.5 125c-8.2 2.5-12.2 12.3-7.5 18.3 4.1 5.2 14.5 4.4 19.4-1.4 3.5-4.1 3.7-11.6.4-14.6-2.7-2.5-8.2-3.5-12.3-2.3zM37.8 128.9C25 133 16.4 140.8 13.6 150.8c-.9 3.2-1.6 6.7-1.6 7.8 0 7.1 5.6 15.3 13.6 20 2.4 1.4 8.7 4.1 14 6 16.1 5.7 19.1 8.5 16.1 15.6-2.1 5.1-7.1 7.1-16.3 6.6-6.5-.3-7.7-.7-10.1-3.1-2.2-2.1-2.8-3.6-2.8-7.2V192H15.4c-12.3 0-12.4.1-12.4 6.4 0 10.6 7 20.5 17.6 24.7 5.1 2 7.5 2.3 18.4 2.3 13.9-.1 20.7-1.8 28.1-7.2C80.9 208 83.8 188.8 73 178c-4.6-4.6-8.5-6.7-20.2-10.9-11.3-3.9-14.4-5.6-16.4-8.6-1.4-2.1-1.4-3-.4-5.4 1.8-4.4 4.1-6 10.3-7.2 10-2 16.7 2.1 16.7 10.1v3h23v-5.1c0-8.1-1.9-12.8-7.5-18.6-3.8-3.9-6.3-5.5-10.4-6.7-7.5-2.2-22.9-2-30.3.3zM116.4 152c-14.8 3.1-26.3 15.8-30 32.8-2.9 14-1.1 25.3 5.4 32.4 4.8 5.3 10.6 7.8 19.6 8.5 18.3 1.4 34-9.3 38-26l.6-2.7h-20.5l-1.5 3.2c-2.2 4.7-6.4 7.3-11.5 7.3-8.7 0-11.3-7.2-8-22.2 1.5-6.5 2.4-8.4 5.5-11.5 3.2-3.3 4.4-3.8 8.3-3.8 5.9 0 8.7 2.3 9.4 7.8l.6 4.2h9.7c10.7 0 11-.2 11-6.4 0-9.1-5.2-17.6-13.2-21.7-4.5-2.3-17-3.3-23.4-1.9zM259.2 152c-6.5 1.4-15.9 6.9-20.3 11.8-9.8 11.2-14.3 29.7-10.4 42.9 3.3 11.2 11.8 17.8 24.7 19 22.1 2 39.1-10.8 44.4-33.4 2-8.4 1.4-19.4-1.4-25.5-2.6-5.6-8.6-11.3-14.2-13.3-5.5-2-17-2.7-22.8-1.5zm14.3 20.4c1.3 1.3 2.7 4.1 3.1 6.2.9 4.6-1 15.4-3.6 20.5-5.3 10.3-18.7 11.6-22.7 2.1-3.1-7.4.6-22 6.9-27.8 3.3-2.9 4.5-3.4 8.8-3.4 4 0 5.6.5 7.5 2.4zM334.7 152c-9.9 2.5-19.7 10.1-25.1 19.2-3.2 5.5-6.6 18.4-6.6 25.3 0 12.1 6 22 16.3 26.6 4.3 2 6.8 2.4 15.2 2.4 12.7 0 20.4-2.6 27.6-9.4l4.9-4.6-4.6-6.1-4.7-6.2-4.4 3.4c-7 5.3-16.1 6.7-22.5 3.3-2.1-1.1-5.8-6.6-5.8-8.7 0-.9 5.2-1.2 22.9-1.2h22.9l1.1-9.3c2-16.2-1.6-26.3-11.6-31.9-4.2-2.4-6.6-3-13.5-3.3-4.5-.2-10 0-12.1.5zm14.1 20c1.3 1.2 2.2 3.3 2.2 5v3h-23.1l1.8-3.1c2.5-4.4 6.9-6.9 12.4-6.9 3.2 0 5.2.6 6.7 2zM414.8 152.3c-2 .8-5.3 2.4-7.2 3.5l-3.6 2.1v-2.4c0-2.5 0-2.5-10.3-2.5h-10.2l-5.4 33.7c-2.9 18.6-5.5 34.8-5.8 36-.5 2.3-.4 2.3 10.6 2.3 10.7 0 11.1-.1 11.6-2.3.2-1.2 2-12.3 3.9-24.6 2-12.2 4.1-23 4.7-23.8 3.7-4.4 14.2-5.9 17.2-2.5 2.3 2.5 2.2 2.8-1.8 27.6-1.9 11.9-3.5 22.5-3.5 23.6 0 1.9.7 2 10.5 2 7.6 0 10.7-.4 11-1.3 1.4-3.9 7.5-46.8 7.5-52.5 0-8.7-2.8-14.6-8.4-17.5-4.8-2.5-15.8-3.2-20.8-1.4zM479.3 152c-10.1 2.1-20.9 10.9-26.2 21.3-9.1 17.9-6.9 38.1 5.1 46.8 10 7.1 27.9 7.9 40.3 1.6 4.4-2.2 12.5-8.5 12.5-9.7 0-.4-2-3.6-4.5-6.9l-4.6-6.2-4.1 3.5c-5.3 4.6-13 6.5-18.9 4.7-5.1-1.5-8.9-5.2-8.9-8.6V196h44.8l1.1-6.3c3.2-18.3-1.4-30.9-12.9-35.9-5.1-2.3-17.3-3.2-23.7-1.8zm14.2 20.5c1.4 1.3 2.5 3.6 2.5 5v2.5h-11.5c-7.8 0-11.5-.4-11.5-1.1 0-.6 1.7-2.9 3.9-5 3.5-3.5 4.4-3.9 9-3.9 4.2 0 5.7.5 7.6 2.5zM652 152.5c-18.8 5.3-30.9 24.2-29.8 46.4.4 8.7 2.4 13.7 7.6 18.9 11.7 11.6 37.3 10.7 51.7-1.9 1.9-1.7 3.5-3.6 3.5-4.2 0-.8-1.8-3.5-8.5-12.5-.2-.2-1.6.9-3.1 2.3-4.5 4.2-8.4 5.8-14.4 5.9-6.8.1-11.1-1.6-13.3-5.3-3.6-6.2-4-6.1 20.7-6.1 20.4 0 22.4-.2 23.1-1.8 1.4-3.6 1.8-21.1.5-25.7-1.6-5.8-7.8-12.8-13.2-15-6-2.4-18-2.9-24.8-1zm15.5 20c1.4 1.3 2.5 3.6 2.5 5v2.5h-11.5c-7.8 0-11.5-.4-11.5-1.1 0-.6 1.7-2.9 3.9-5 3.5-3.5 4.4-3.9 9-3.9 4.2 0 5.7.5 7.6 2.5zM751.2 152.5c-7.1 2-10 3.6-14.6 8.1-4.9 4.7-7.5 10.6-7.6 16.5 0 8.9 7.2 15.3 21.3 18.9 10.3 2.6 13.1 4 13.5 6.8.7 4.8-5.5 7.7-13 6.1-4.9-1.1-6.8-3.1-6.8-7.1V199h-10.4c-11.8 0-12.1.2-11 7.7 1.6 10.8 10.9 18.1 24.4 19.1 21.5 1.5 39-9.8 39-25.2 0-5.8-1.1-8.5-5-12.3-3.6-3.5-8-5.3-20-8.3-9.1-2.2-11.4-3.8-10.1-7.3 1-2.8 4.7-4.7 9.1-4.7 4.9 0 8 2.4 8 6.1v2.9h21v-6c0-12.8-7.3-18.6-24.5-19.6-5.3-.3-9.8.1-13.3 1.1zM526 155c0 2.2 5.6 57.8 6.6 65.3l.6 4.7h9.1l9.2-.1 9-19.9c4.9-10.9 9.3-19.6 9.6-19.2.4.4 1.6 8.1 2.8 17.2 1.2 9.1 2.4 17.8 2.7 19.3l.6 2.8 9.1-.3 9.2-.3 14.7-35c8.2-19.2 14.8-35.3 14.8-35.7 0-.5-4.8-.7-10.7-.6l-10.6.3-7.1 19.2c-3.8 10.6-7.1 19.1-7.2 19-.1-.1-1.2-7.9-2.3-17.2-1.2-9.4-2.4-18-2.7-19.3-.4-2.1-.9-2.2-8.7-2.2h-8.2l-8.5 19.2-8.5 19.2-.7-5c-.3-2.7-.7-8.5-.7-13-.1-4.5-.4-10.9-.7-14.3l-.7-6.1h-10.3c-9.7 0-10.4.1-10.4 2zM697.1 186.7c-2.9 18.6-5.5 34.8-5.8 36-.5 2.3-.4 2.3 10.5 2.3h11l.6-2.8c1.1-5.3 10.6-65.6 10.6-67.4 0-1.6-1-1.8-10.8-1.8h-10.8l-5.3 33.7z" />
    </svg>
  );
}
