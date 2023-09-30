import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';
const ArrowRight = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Path
        d="M10 16L14 12L10 8"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowRight;
