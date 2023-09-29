import * as React from 'react';
import Svg, {SvgProps, G, Circle, Path} from 'react-native-svg';
const Dai = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" fill="#000000" {...props}>
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <G fill="none" fillRule="evenodd">
        <Circle fill="#F4B731" fillRule="nonzero" cx={16} cy={16} r={16} />
        <Path
          d="M9.277 8h6.552c3.985 0 7.006 2.116 8.13 5.194H26v1.861h-1.611c.031.294.047.594.047.898v.046c0 .342-.02.68-.06 1.01H26v1.86h-2.08C22.767 21.905 19.77 24 15.83 24H9.277v-5.131H7v-1.86h2.277v-1.954H7v-1.86h2.277V8zm1.831 10.869v3.462h4.72c2.914 0 5.078-1.387 6.085-3.462H11.108zm11.366-1.86H11.108v-1.954h11.37c.041.307.063.622.063.944v.045c0 .329-.023.65-.067.964zM15.83 9.665c2.926 0 5.097 1.424 6.098 3.528h-10.82V9.666h4.72z"
          fill="#FFF"
        />
      </G>
    </G>
  </Svg>
);
export default Dai;
