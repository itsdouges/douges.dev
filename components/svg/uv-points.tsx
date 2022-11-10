import { token } from '@atlaskit/tokens';
import * as React from 'react';

const SvgComponent = () => (
  <svg
    viewBox="0 0 400 186"
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
      d="M185.927 46.482C185.927 20.828 165.099 0 139.445 0H46.482C20.828 0 0 20.828 0 46.482v92.963c0 25.654 20.828 46.482 46.482 46.482h92.963c25.654 0 46.482-20.828 46.482-46.482V46.482Z"
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
      d="M31.372 50.761h41.054v42.323H31.372zM72.527 8.434h41.054v42.323H72.527zM72.527 93.152h41.054v42.323H72.527z"
    />
    <path
      style={{
        fill: token('color.text.mediumEmphasis'),
        fillOpacity: 0,
        stroke: token('color.text.mediumEmphasis'),
        strokeWidth: 4,
      }}
      fill="none"
      d="M72.527 135.463h41.054v42.323H72.527zM113.701 50.761h41.054v42.323h-41.054z"
    />
    <circle
      cx={114.143}
      cy={93.06}
      r={5.462}
      style={{
        fill: token('color.text.mediumEmphasis'),
      }}
    />
    <circle
      cx={72.596}
      cy={9.231}
      r={5.462}
      style={{
        fill: token('color.text.mediumEmphasis'),
      }}
    />
    <circle
      cx={112.793}
      cy={176.311}
      r={5.462}
      style={{
        fill: token('color.text.mediumEmphasis'),
      }}
    />
    <path
      d="m72.457 9.598 135.511 34.406M112.096 93.547l139.721 5.026M111.989 176.476l105.326-13.775"
      style={{
        fill: 'none',
        stroke: token('color.text.mediumEmphasis'),
        strokeWidth: 4,
        strokeLinecap: 'butt',
      }}
    />
    <text
      x={209.17}
      y={50.528}
      style={{
        fontFamily: "'Karla', sans-serif",
        fontSize: 16,
        fill: token('color.text.lowEmphasis'),
      }}>
      {' [x: 0.33 y: 1.0]'}
    </text>
    <text
      x={252.71}
      y={102.523}
      style={{
        fontFamily: "'Karla', sans-serif",
        fontSize: 16,
        fill: token('color.text.lowEmphasis'),
      }}>
      {'. [x: 0.66, y: 0.5]'}
    </text>
    <text
      x={217.871}
      y={167.014}
      style={{
        fontFamily: "'Karla', sans-serif",
        fontSize: 16,
        fill: token('color.text.lowEmphasis'),
      }}>
      {' [x: 0.66, y: 0.0]'}
    </text>
  </svg>
);

export default SvgComponent;
