# A1 리포트

- 이름: 우희태
- 학번: 2023202045
- GitHub ID: Heetaeeee

## 어디를 둘러봤는지

awesome-nodejs의 Command-line apps, Functional programming 카테고리를 둘러보았다.
그중 sindresorhus가 만든 작은 패키지들을 따라가다가 `cat-names`를 발견했다.

터미널에서 `npm search "korean hangul"`을 검색하여 한글을 다루는 패키지들을 살펴보았다.
검색 결과에서 `hangul-js`를 발견했고, 비슷한 기능을 하는 더 최근 패키지인 `es-hangul`도 함께 찾아보았다.

---

## 선정한 패키지

### 1. `cat-names`

**선정 이유:**
고양이 이름만 알려주는 패키지가 따로 npm에 올라와 있다는 게 신기해서 선택했다.

**이것으로 무엇을 할 수 있을지:**
게임이나 앱에서 새로 만든 캐릭터나 반려동물에게 랜덤 이름을 붙여주는 기능에 쓸 수 있을 것 같다.
또 테스트용 가짜 데이터를 만들 때 사용자 이름 대신 넣는 용도로도 활용할 수 있을 것 같다.

**확인 결과:**

```
$ npm view cat-names version time.modified license dependencies
version = '4.0.0'
time.modified = '2025-10-13T17:10:05.171Z'
license = 'MIT'
dependencies = { meow: '^13.2.0', 'unique-random-array': '^3.0.0' }

$ npm view cat-names deprecated

```

**출력을 보고 알게 된 것:**
`time.modified`는 2025년 10월이지만, `npm view cat-names time --json`으로 확인해 보니 마지막 버전(4.0.0)이 배포된 날은 2024년 4월이었다. `time.modified`가 실제 배포일과 다르다는 것을 직접 확인할 수 있었다.
2년 넘게 새 버전이 없지만, 고양이 이름 목록을 돌려주는 기능이 전부인 작은 패키지라서 방치되었다기보다 완성된 패키지로 보인다. README에도 "이름 추가 PR은 받지 않는다"고 적혀 있다.
`dependencies`에 `meow`와 `unique-random-array`가 있는데, 이름만 돌려주는 패키지인데도 의존성이 있는 게 의외였다. README를 보니 터미널 명령어(CLI) 기능과 랜덤 선택 기능에 쓰이는 것 같다.

---

### 2. `es-hangul`

**선정 이유:**
한글 초성 검색이나 조사(은/는, 이/가) 붙이기처럼 한국어에만 있는 문제를 해결해주는 패키지라서 궁금해서 선택했다.

**이것으로 무엇을 할 수 있을지:**
검색창에 "ㄱㅇㄷ"처럼 초성만 입력해도 "광운대"를 찾아주는 검색 기능을 만들 수 있을 것 같다.
또 사용자 이름 뒤에 "님이/님은" 같은 조사를 받침에 맞게 자동으로 붙여 메시지를 출력하는 데 쓸 수 있을 것 같다.

**확인 결과:**

```
$ npm view es-hangul version time.modified license dependencies
version = '2.4.0'
time.modified = '2026-08-24T14:52:47.609Z'
license = 'MIT'

$ npm view es-hangul deprecated

```

**출력을 보고 알게 된 것:**
현재 버전은 2.4.0이고, `time --json`으로 보니 2024년 4월 첫 배포 이후 약 2년 동안 49개 버전이 배포되어 활발하게 관리되고 있다.
`dependencies`가 출력되지 않았는데, 다른 패키지에 의존하지 않고 혼자 동작하는 패키지라는 뜻으로 보인다. deprecated도 출력되지 않았다.

---

### 3. `hangul-js`

**선정 이유:**
`npm search "korean hangul"` 결과 맨 위에 나왔는데, 배포 날짜가 2019년이라 아직 쓸 수 있는 패키지인지 궁금해서 선택했다.

**이것으로 무엇을 할 수 있을지:**
"한글"을 "ㅎㅏㄴㄱㅡㄹ"처럼 자모로 분리해서, 오타가 있어도 비슷한 단어를 찾아주는 검색 기능에 쓸 수 있을 것 같다.
또 자모 단위로 글자를 쪼개고 합치는 기능으로 타자 연습 프로그램을 만들 수 있을 것 같다.

**확인 결과:**

```
$ npm view hangul-js version time.modified license dependencies
version = '0.2.6'
time.modified = '2022-06-18T18:57:38.965Z'
license = 'MIT'

$ npm view hangul-js deprecated

```

**출력을 보고 알게 된 것:**
`time.modified`는 2022년 6월인데, `npm search` 결과와 `time --json`에서는 마지막 배포일이 2019년 11월이었다. 여기서도 `time.modified`가 배포일이 아니라는 것을 확인했다.
`dependencies`는 출력되지 않았고 deprecated도 아니지만, 7년 가까이 새 버전이 없다. 같은 기능을 하는 `es-hangul`은 지금도 업데이트되고 있어서, 새로 쓴다면 `es-hangul`을 고를 것 같다.

---

## 설치해본 패키지

```
$ npm install cat-names

added 4 packages, and audited 5 packages in 2s

4 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

$ node try.js
랜덤 고양이 이름: Tigger
전체 이름 개수: 100
처음 5개: [ 'Abby', 'Angel', 'Annie', 'Baby', 'Bailey' ]
```

---

## 막혔던 부분 (채점하지 않음)

```
npm search 결과에 나온 링크를 눌렀더니 VS Code가 외부 사이트를 열지 묻는 창이 떠서 당황했다.
```

---

## AI 사용

Claude를 사용했다.

- 사용한 프롬프트: "과제 어떻게 해야할까", "2번에서 어떻게 골라?", "아니 더 자세하게 어떻게 해야하는 지 알려줘"
- 과제 진행 순서와 패키지 후보 추천, try.js 예제 작성에 도움을 받았다.
- AI 설명과 실제가 달랐던 부분: AI가 알려준 npm view 결과와 배포 날짜를 직접 터미널에서 확인했고, 다른 부분은 없었다.

---

## 제출 전 확인

- [ ] 저장소 이름이 `oss2026-a1`, 공개 범위가 Public
- [ ] `git status` 결과가 `nothing to commit, working tree clean`
- [ ] `node_modules` 폴더를 지우고 `npm install` → `node try.js` 를 다시 해도 실행됨
- [ ] 마지막 커밋을 push함