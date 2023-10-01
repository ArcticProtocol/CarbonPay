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
const Solana = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <G clipPath="url(#clip0_1949_1494)">
      <Path
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
        fill="black"
      />
      <G clipPath="url(#clip1_1949_1494)">
        <Path
          d="M9.92277 20.2107C10.0314 20.0875 10.1808 20.0156 10.3392 20.0156H24.7048C24.9673 20.0156 25.0985 20.3749 24.913 20.5854L22.0751 23.8039C21.9665 23.9271 21.8172 23.9989 21.6588 23.9989H7.29315C7.03064 23.9989 6.89939 23.6396 7.08495 23.4292L9.92277 20.2107Z"
          fill="url(#paint0_linear_1949_1494)"
        />
        <Path
          d="M9.92277 8.19506C10.0359 8.07186 10.1853 8 10.3392 8H24.7048C24.9673 8 25.0985 8.35932 24.913 8.56978L22.0751 11.7883C21.9665 11.9115 21.8172 11.9833 21.6588 11.9833H7.29315C7.03064 11.9833 6.89939 11.624 7.08495 11.4135L9.92277 8.19506Z"
          fill="url(#paint1_linear_1949_1494)"
        />
        <Path
          d="M22.0751 14.1638C21.9665 14.0406 21.8172 13.9688 21.6588 13.9688H7.29315C7.03064 13.9688 6.89939 14.3281 7.08495 14.5385L9.92277 17.757C10.0314 17.8802 10.1808 17.9521 10.3392 17.9521H24.7048C24.9673 17.9521 25.0985 17.5927 24.913 17.3823L22.0751 14.1638Z"
          fill="url(#paint2_linear_1949_1494)"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1949_1494"
        x1={23.3324}
        y1={6.07631}
        x2={11.283}
        y2={26.4262}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#00FFA3" />
        <Stop offset={1} stopColor="#DC1FFF" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1949_1494"
        x1={18.9852}
        y1={3.5033}
        x2={6.93573}
        y2={23.8532}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#00FFA3" />
        <Stop offset={1} stopColor="#DC1FFF" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1949_1494"
        x1={21.145}
        y1={4.78105}
        x2={9.09551}
        y2={25.1309}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#00FFA3" />
        <Stop offset={1} stopColor="#DC1FFF" />
      </LinearGradient>
      <ClipPath id="clip0_1949_1494">
        <Rect width={32} height={32} fill="white" />
      </ClipPath>
      <ClipPath id="clip1_1949_1494">
        <Rect width={18} height={16} fill="white" transform="translate(7 8)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Solana;
