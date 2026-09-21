// A1에서 코드를 쓰는 부분은 이 파일 하나입니다.
//
// 목표: 고른 패키지를 설치하고, 실제로 한 번 호출해서 결과를 출력하는 것.
// import만 하면 화면에는 아무것도 나오지 않습니다. 반드시 한 번은 호출해야 합니다.
//
// 순서
//   1. 터미널에서  npm install <패키지이름>
//   2. 그 패키지의 npm 페이지나 GitHub README에서 사용 예제를 찾는다
//   3. 아래에 import 한 줄 + 호출 두세 줄을 쓴다
//   4. node try.js 로 실행하고, 명령과 출력을 REPORT.md에 붙여넣는다
//
// 예시 1 — qrcode-terminal 을 골랐다면
//
//     import qrcode from "qrcode-terminal";
//     qrcode.generate("https://github.com", { small: true });
//
// 예시 2 — dayjs 를 골랐다면
//
//     import dayjs from "dayjs";
//     console.log(dayjs().format("YYYY-MM-DD"));
//
// 위 두 개는 형태를 보여주기 위한 예시입니다. 그대로 쓰지 말고,
// 본인이 고른 패키지의 예제를 찾아서 쓰세요.
//
// ESM 주의: 패키지는 이름만 씁니다 (경로 아님).
// README 예제가 const x = require("...") 형태라면 import x from "..." 로 바꿔야 합니다.

// ↓ 여기부터 작성

console.log("아직 비어 있습니다. 위 주석을 읽고 패키지를 하나 import해서 호출해보세요.");
