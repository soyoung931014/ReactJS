// 여기서 디폴트 스타일 타입 지정해줌
import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    boardColor: string;
    cardColor: string;
  }
}
