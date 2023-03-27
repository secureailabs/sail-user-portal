import { TColor } from './color.utils';

type TBackground = {
  /**
   * Background color object
   * {
   *    color: "NAME OF THE COLOR",
   *    shade: 50-900 (HOW DARK IS THE COLOR)
   * }
   * Note: White and black don't need a shade (will fail if one is provided)
   */
  background: TColor['color'];
};

export type { TBackground };
export default TBackground;
