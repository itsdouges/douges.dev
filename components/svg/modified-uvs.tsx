import { token } from '@atlaskit/tokens';
import * as React from 'react';

const SvgComponent = () => (
  <svg
    viewBox="0 0 474 186"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      display: 'block',
      margin: '0 auto',
      maxWidth: 400,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeMiterlimit: 1.5,
    }}>
    <path
      d="M185.927 46.482C185.927 20.828 165.099 0 139.445 0H46.482C20.828 0 0 20.828 0 46.482v92.963c0 25.654 20.828 46.482 46.482 46.482h92.963c25.654 0 46.482-20.828 46.482-46.482V46.482ZM473.835 46.482C473.835 20.828 453.007 0 427.353 0H334.39c-25.654 0-46.482 20.828-46.482 46.482v92.963c0 25.654 20.828 46.482 46.482 46.482h92.963c25.654 0 46.482-20.828 46.482-46.482V46.482Z"
      style={{
        fill: token('color.background.subtleNeutral.resting'),
      }}
    />
    <path
      style={{
        fill: token('color.text.mediumEmphasis'),
        fillOpacity: 0,
        stroke: token('color.text.mediumEmphasis'),
        strokeWidth: 4,
      }}
      fill="none"
      d="M30.279 50.761h41.054v42.323H30.279zM71.433 8.434h41.054v42.323H71.433zM71.433 93.152h41.054v42.323H71.433z"
    />
    <path
      style={{
        fill: token('color.text.mediumEmphasis'),
        fillOpacity: 0,
        stroke: token('color.text.mediumEmphasis'),
        strokeWidth: 4,
      }}
      fill="none"
      d="M71.433 135.463h41.054v42.323H71.433zM112.607 50.761h41.054v42.323h-41.054zM322.878 33.051h116.034v119.621H322.878z"
    />
    <path
      d="m113.032 50.894 209.567-17.672M154.058 50.684 438.991 33.01M113.451 92.87l209.426 59.784M153.941 93.136l281.71 59.691"
      style={{
        fill: 'none',
        stroke: token('color.text.mediumEmphasis'),
        strokeWidth: 4,
        strokeLinecap: 'butt',
      }}
    />
    <text
      x={295}
      y={172.542}
      style={{
        fontFamily: "'Karla', sans-serif",
        fontSize: 16,
        fill: token('color.text.lowEmphasis'),
      }}>
      {'[0, 0]'}
    </text>
    <text
      x={430}
      y={172.542}
      style={{
        fontFamily: "'Karla', sans-serif",
        fontSize: 16,
        fill: token('color.text.lowEmphasis'),
      }}>
      {'[1, 0]'}
    </text>
    <text
      x={295}
      y={22.821}
      style={{
        fontFamily: "'Karla', sans-serif",
        fontSize: 16,
        fill: token('color.text.lowEmphasis'),
      }}>
      {'[0, 1]'}
    </text>
    <text
      x={430}
      y={22.821}
      style={{
        fontFamily: "'Karla', sans-serif",
        fontSize: 16,
        fill: token('color.text.lowEmphasis'),
      }}>
      {'[1, 1]'}
    </text>
  </svg>
);

export default SvgComponent;
