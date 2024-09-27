# <img width="60px" src="https://raw.githubusercontent.com/eqypo9/the-julge/e32a60e78a2d0b248729bac1b349ff8d44bd05df/public/logo.svg"> The-Julge: 알바를 구하는 사용자와 사장님을 위한 서비스

![image](https://github.com/user-attachments/assets/20d1b196-3e65-4a41-a403-d1f0f860572e)

- **배포 URL**: [The-Julge 배포 링크](https://the-julge-part3-6team.vercel.app/)
- **알바 Test ID**: `testasd@naver.com`
- **알바님 Test PW**: `test1234`
- **사장님 Test ID**: `testqwe@naver.com`
- **사장님 Test PW**: `test1234`

---

## 프로젝트 소개

**The-Julge**는 알바를 구하는 사용자와 가게 사장님을 연결해주는 서비스입니다.

사장님은 시급, 근무 시간, 장소, 가게 설명, 공고 설명 등을 등록할 수 있으며, 가격을 인상할 경우 기존 시급보다 몇 퍼센트 올랐는지를 직관적인 UI를 통해 쉽게 확인할 수 있습니다.

알바 구직자는 상세 필터를 통해 지역, 근무 시작일, 금액 등을 조정하여 맞춤형 공고를 볼 수 있습니다. 또한, 최근에 본 공고는 6개까지 최신순으로 저장되어 이전에 본 공고로 쉽게 돌아갈 수 있습니다. 사장님은 이 자리에서 신청한 지원자 목록을 확인하고 승인 또는 거절할 수 있습니다.

---

## 팀원 구성

<div align="center">

| **김한샘** | **김민섭** | **정성혜** | **박성재** |
| :------: |  :------: | :------: | :------: |
| [<img src="https://avatars.githubusercontent.com/u/106502312?v=4" height=150 width=150> <br/> @hansaemkim38](https://github.com/hansaemkim38) | [<img src="https://avatars.githubusercontent.com/u/106502312?v=4" height=150 width=150> <br/> @striker1826](https://github.com/striker1826) | [<img src="https://avatars.githubusercontent.com/u/106502312?v=4" height=150 width=150> <br/> @eqypo9](https://github.com/eqypo9) | [<img src="https://avatars.githubusercontent.com/u/106502312?v=4" height=150 width=150> <br/> @Batrnan](https://github.com/Batrnan) |

</div>

---

## 1. 개발 환경

- **Front-end**: React, TypeScript, Next.js, Styled-components, Zod, Axios, Zustand, React-query
- **Back-end**: 제공된 API 활용
- **버전 및 이슈 관리**: GitHub
- **협업 툴**: Discord, Notion, Zoom
- **서비스 배포 환경**: Vercel

---

## 2. 채택한 개발 기술과 브랜치 전략

### React, Styled-components

- **React**: 
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
    - 유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 리소스 절약이 가능했습니다.
  
- **Styled-components**:
    - Props를 이용한 조건부 스타일링으로 상황에 알맞은 스타일을 적용했습니다.
    - 빌드 시 고유한 클래스 이름이 부여되어 네이밍 비용을 절감했습니다.
    - S dot naming을 통해 일반 컴포넌트와 스타일드 컴포넌트를 쉽게 구별하도록 했습니다.

### Eslint, Prettier

- 정해진 규칙에 따라 자동으로 코드 스타일을 정리하여 일관성을 유지했습니다.
- 코드 품질 관리는 Eslint에, 코드 포맷팅은 Prettier에 일임했습니다.
- 협업 시 컨벤션에 대한 신경을 덜고 빠르게 개발할 수 있었습니다.

### 브랜치 전략

- **Git-flow** 전략을 기반으로 main, develop 브랜치와 feature 보조 브랜치를 운영했습니다.
    - **main** 브랜치는 배포 단계에서만 사용합니다.
    - **develop** 브랜치는 개발 단계에서 master 역할을 합니다.
    - **Feat** 브랜치는 기능 단위로 독립적인 개발 환경을 위해 사용하고 merge 후 삭제합니다.

---

## 3. 프로젝트 구조

![image](https://github.com/user-attachments/assets/bc96dfb9-0286-4b8d-a5bc-73c0e14ccb56)

---

## 4. 역할 분담: 정성혜

- **컴포넌트**: Input, DropDown, Pagination
- **페이지**: noticedetail, noticedetailceo

---

## 5. 개발 기간 및 작업 관리

### 개발 기간

- **전체 개발 기간**: 2024-05-30 ~ 2024-06-17

### 작업 관리

- GitHub Projects와 Issues를 사용하여 진행 상황을 공유했습니다.

---

## 7. 공고 상세 페이지

![MergedImages (13)](https://github.com/user-attachments/assets/4dc7baf7-fdff-4483-9b37-61aa2b4f9811)

### 주요 기능

1. **로고 버튼 클릭 시**
   - 로고 버튼을 클릭하면 공고 리스트 페이지로 이동합니다.

2. **신청하기 버튼**
   - **프로필 등록 확인**: 신청하기 버튼 클릭 시, 프로필 등록이 되어있지 않으면 “내 프로필을 먼저 등록해 주세요.” alert 창이 나타납니다. '확인' 버튼 클릭 시 프로필 등록 페이지로 이동합니다.
   - **신청 완료**: 프로필 등록이 완료된 경우, 신청하기 버튼 클릭 시 지원이 완료됩니다.

3. **취소하기 버튼**
   - 이미 신청한 공고에서 '취소하기' 버튼 클릭 시 “신청을 취소하시겠어요?” alert 창이 나타납니다.
   - '취소하기' 버튼 클릭 시 지원이 취소되며, 버튼이 '신청하기' 버튼으로 변경됩니다.

4. **공고 상태**
   - 구인하지 못했지만, 공고 기간이 지난 경우 '지난 공고'로 표시됩니다.
   - 지정한 구인이 모집 완료된 경우 '마감 완료'로 표시됩니다.

5. **최근에 본 공고**
   - 최신 순으로 최대 6개까지 공고가 보입니다. 6개 초과 시 가장 과거의 공고는 보이지 않습니다.
   - 최근에 본 공고를 위한 별도의 API는 제공되지 않으며, 브라우저 저장소를 활용하여 구현해야 합니다.

   ![image](https://github.com/user-attachments/assets/78db0f17-699d-4f0f-8a19-9fa1773825c3)

6. **위젯 처리**
   - `noticedetail` 페이지에서 공고의 상태에 따라 분기처리하여 다양한 위젯을 보여줍니다. 이로 인해 사용자에게 적절한 정보를 제공할 수 있습니다.

---

## 8. 기억에 남는 부분: 최근 본 공고 로직

이번 프로젝트에서 가장 기억에 남는 부분은 **최근에 본 공고를 저장하고 관리하는 로직**입니다. 사용자 경험을 향상시키기 위해 로컬 스토리지를 활용하여 사용자가 최근에 조회한 공고를 쉽게 접근할 수 있도록 구현했습니다.

이 기능은 사용자가 관심 있는 공고를 다시 찾아볼 수 있는 편리함을 제공했으며, 로직을 개발하는 과정에서 상태 관리와 데이터 저장의 중요성을 실감하게 되었습니다. 특히, 저장된 공고의 수를 제한하고, 새로운 공고가 추가될 때 가장 오래된 공고가 제거되는 로직을 구현하며 효율성을 고려했습니다.

이 경험은 사용자 친화적인 기능을 개발하는 데 중요한 통찰을 주었고, 향후 프로젝트에서도 유사한 기능을 구현할 때 큰 도움이 될 것입니다.

---

## 9. 회고

프로젝트 초반에는 컴포넌트와 위젯의 역할 구분에 익숙하지 않았습니다. 처음에는 컴포넌트가 도메인에 속하고 위젯이 페이지에서 사용되는 독립적인 컴포넌트라는 개념이 낯설게 느껴졌습니다. 가게와 공고에 대한 정보를 가진 컴포넌트가 섞여 있는 경우, 이를 위젯으로 분리하여 분기처리하는 방식이 생소했습니다. 그러나 개발을 진행하면서 점차 익숙해졌고, 향후 유지보수할 때 이러한 구조가 큰 도움이 될 것이라는 확신이 들었습니다.

---
