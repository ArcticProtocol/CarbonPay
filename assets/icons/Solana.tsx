import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Solana = (props: SvgProps) => (
  <Svg width={723} height={568} viewBox="0 0 723 568" fill="" {...props}>
    <G clipPath="url(#clip0_402_6)" filter="url(#filter0_d_402_6)">
      <Path
        d="M120.06 427.411C124.372 423.099 130.301 420.584 136.589 420.584H706.83C717.25 420.584 722.46 433.16 715.094 440.526L602.447 553.173C598.135 557.485 592.207 560 585.918 560H15.6779C5.25758 560 0.0474434 547.424 7.4135 540.058L120.06 427.411Z"
        fill="url(#paint0_linear_402_6)"
      />
      <Path
        d="M120.06 6.82708C124.552 2.51524 130.481 0 136.589 0H706.83C717.25 0 722.46 12.5762 715.094 19.9423L602.447 132.589C598.135 136.901 592.207 139.416 585.918 139.416H15.6779C5.25758 139.416 0.0474434 126.84 7.4135 119.474L120.06 6.82708Z"
        fill="url(#paint1_linear_402_6)"
      />
      <Path
        d="M602.447 215.772C598.135 211.46 592.207 208.944 585.918 208.944H15.6779C5.25758 208.944 0.0474434 221.521 7.4135 228.887L120.06 341.534C124.372 345.845 130.301 348.361 136.589 348.361H706.83C717.25 348.361 722.46 335.784 715.094 328.418L602.447 215.772Z"
        fill="url(#paint2_linear_402_6)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_402_6"
        x1={652.355}
        y1={-67.2922}
        x2={257.703}
        y2={688.625}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#00FFA3" />
        <Stop offset={1} stopColor="#DC1FFF" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_402_6"
        x1={479.792}
        y1={-157.385}
        x2={85.1398}
        y2={598.533}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#00FFA3" />
        <Stop offset={1} stopColor="#DC1FFF" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_402_6"
        x1={565.524}
        y1={-112.625}
        x2={170.872}
        y2={643.292}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#00FFA3" />
        <Stop offset={1} stopColor="#DC1FFF" />
      </LinearGradient>
      <ClipPath id="clip0_402_6">
        <Rect
          width={714.508}
          height={560}
          fill="white"
          transform="translate(4)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Solana;
