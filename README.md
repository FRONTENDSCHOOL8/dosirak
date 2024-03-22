# 🦁 멋쟁이사자처럼 FE 9th - Final 6조: 탕수육-한끼도시락 프로젝트
![image](https://github.com/FRONTENDSCHOOL8/dosirak/assets/46062634/68094e37-460b-4f7c-a27b-9a5a6bc7e9c0)

<br>

## 목차📜
- [🦁 멋쟁이사자처럼 FE 9th - Final 6조: 탕수육-한끼도시락 프로젝트](#-멋쟁이사자처럼 FE 9th - Final 6조: 탕수육-한끼도시락 프로젝트)
- [📜 목차](#-목차)
  - [🏠 배포 주소](#-배포-주소)
  - [🚀 프로젝트 소개](#-프로젝트-소개)
  - [🚀 프로젝트 개요](#-프로젝트-개요)
  - [👨‍👩‍👧‍👦 팀원 구성](#-팀원-구성)
  - [🤙 담당 페이지](#-담당-페이지)
  - [🛠️ 기술 스택](#-기술-스택)
    - [협업](#협업)
  - [📑 스케폴딩](#스케폴딩)
  - [페이지별 기능](#페이지별-기능)
    - [0.로그인/회원가입](#0.로그인/회원가입)
    - [1.홈](#1.홈)
    - [2.모임](#2.모임)
    - [3.피드](#3.피드)
    - [4.마이페이지](#4.마이페이지)
  - [👀 프로젝트 회고](#-프로젝트-회고)
 
  <br>

## 🏠배포 주소
[한끼 도시락](https://hankki.netlify.app)
<br> 


## 🚀프로젝트 소개 
- 한끼도시락은 사람들이 도시락에 관하여 글을 올리고 모일 수 있는 도시락 커뮤니티입니다.
- 개인의 피드에 본인이 만든 도시락과 과정을 올릴 수 있고, 다른 사용자들을 팔로우하고 댓글과 좋아요 기능을 통해 소통할 수 있습니다.
- 모임에 참여하여 다른 사용자들과 목표를 세우고, 도시락 정보를 공유할 수 있습니다.

<br>

##  🚀프로젝트 개요
- 구현 시안: 한끼도시락 - 도시락 커뮤니티
- 프로젝트 기간: 2024.2.19 ~ 2024.3.13
- 리팩토링 기간: 2024.3.15~ 
- 프로젝트 특징: 사용자들과의 소통, 
- 프로젝트 목표: 리액트와 친숙해지기

<br>

##  👨‍👩‍👧‍👦팀원 구성

|[이상원(Lead)](https://github.com/SWLee2973)|[반현지(Design)](https://github.com/lanuioe)|[정현수(Scrum)](https://github.com/hyun9758)|
|:----:|:----:|:----:|
|<img src="https://avatars.githubusercontent.com/u/46062634?v=4" width="200">|<img src="https://github.com/FRONTENDSCHOOL8/dosirak/assets/82191626/9e8f18c6-95c2-4fa1-8101-17aa0b1bbc24" width="200">|<img src="https://github.com/FRONTENDSCHOOL8/dosirak/assets/82191626/ad014ace-2ce2-4a0a-ae8a-b12a439eb5c5" width="200">|

<br>

## 🤙담당 페이지

| 이름       | 페이지(담당기능)                                               
| ---------- | ------------------------------------------------------------ 
|            | **사용자(마이페이지)** - 회원가입 / 프로필 변경 / 비밀번호 변경 및 로그아웃 / 회원 탈퇴|
| **이상원** | **피드** - 피드 목록 보기 / 좋아요 및 댓글 달기 / 팔로우 피드 보기 / 피드 검색 /피드 쓰기|
|            | **모임** - 모임 생성 / 모임 탈퇴 / 모임 피드 쓰기|
| **반현지** | **모임** - 모임 목록(인기 / 최신 / 내 모임) 보기 / 모임 피드 보기|
| **정현수** | **기타** - 전반적인 깃 관리(레이블, 위키, 리드미 등), 내비게이션 바 컴포넌트
|            | **홈** - 홈 화면 / 모임, 좋아요 개수수
|            | **피드** - 피드-내 피드 / 사용자 프로필 / 내 피드 그리드|

<br>

## 01. 🛠️기술 스택
### ✔️FRONT
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">

<img src="https://img.shields.io/badge/zustand-382923?style=for-the-badge&logo=zustand&logoColor=white"><img src="https://img.shields.io/badge/tanstackquery-f59e0b?style=for-the-badge&logo=tanstackquery&logoColor=white">

### ✔️BACK
<img src="https://img.shields.io/badge/pocketbase-B8DBE4?style=for-the-badge&logo=pocketbase&logoColor=white">

### ✔️DESIGN
<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

### ✔️DEVELOP & COMMUNICATION TOOL
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"><img src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white"><img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

<br>

## 02.  📑스케폴딩

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜alarm.svg
 ┃ ┃ ┣ 📜arrow.svg
 ┃ ┃ ┣ 📜close.svg
 ┃ ┃ ┣ 📜comment-indicator.svg
 ┃ ┃ ┣ 📜comment.svg
 ┃ ┃ ┣ 📜delete.svg
 ┃ ┃ ┣ 📜likeinfo.svg
 ┃ ┃ ┣ 📜loading.svg
 ┃ ┃ ┣ 📜modify-profile.svg
 ┃ ┃ ┣ 📜scrap-uncheck.svg
 ┃ ┃ ┣ 📜setting.svg
 ┃ ┃ ┣ 📜square-check.svg
 ┃ ┃ ┗ 📜square-uncheck.svg
 ┃ ┣ 📂feed
 ┃ ┃ ┣ 📜line.svg
 ┃ ┃ ┗ 📜spoon.svg
 ┃ ┣ 📂group
 ┃ ┃ ┣ 📜clock.svg
 ┃ ┃ ┗ 📜person.svg
 ┃ ┣ 📂header
 ┃ ┃ ┗ 📜prev.svg
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📜bubble.svg
 ┃ ┃ ┗ 📜reload.svg
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜insta.svg
 ┃ ┃ ┣ 📜kakao.svg
 ┃ ┃ ┗ 📜naver.svg
 ┃ ┣ 📂navbar
 ┃ ┃ ┣ 📜magnify.svg
 ┃ ┃ ┗ 📜plus.svg
 ┃ ┗ 📂register
 ┃ ┃ ┣ 📜check.svg
 ┃ ┃ ┣ 📜circle-check.svg
 ┃ ┃ ┣ 📜circle-uncheck.svg
 ┃ ┃ ┣ 📜eye.svg
 ┃ ┃ ┗ 📜uncheck.svg
 ┣ 📂components
 ┃ ┣ 📂atom
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📜AnimatedOutlet.jsx
 ┃ ┃ ┃ ┣ 📜Dot.jsx
 ┃ ┃ ┃ ┣ 📜HeartButton.jsx
 ┃ ┃ ┃ ┣ 📜HeartButton.stories.jsx
 ┃ ┃ ┃ ┣ 📜ImgBox.jsx
 ┃ ┃ ┃ ┣ 📜LoginUserThumbnail.jsx
 ┃ ┃ ┃ ┣ 📜MainMenuList.js
 ┃ ┃ ┃ ┣ 📜MainNavItem.jsx
 ┃ ┃ ┃ ┣ 📜NoContents.jsx
 ┃ ┃ ┃ ┣ 📜Notice.jsx
 ┃ ┃ ┃ ┣ 📜NotUploadedImage.jsx
 ┃ ┃ ┃ ┣ 📜Spinner.jsx
 ┃ ┃ ┃ ┣ 📜Splash.jsx
 ┃ ┃ ┃ ┣ 📜SquareButton.jsx
 ┃ ┃ ┃ ┣ 📜SubInfo.jsx
 ┃ ┃ ┃ ┣ 📜SwiperCard.jsx
 ┃ ┃ ┃ ┣ 📜SwiperCard.stories.jsx
 ┃ ┃ ┃ ┣ 📜TinyMceEditor.jsx
 ┃ ┃ ┃ ┣ 📜TitleText.jsx
 ┃ ┃ ┃ ┣ 📜ToggleButton.jsx
 ┃ ┃ ┃ ┗ 📜UploadImage.jsx
 ┃ ┃ ┣ 📂feed
 ┃ ┃ ┃ ┣ 📜FeedSubject.jsx
 ┃ ┃ ┃ ┣ 📜NotFoundComment.jsx
 ┃ ┃ ┃ ┗ 📜ViewMore.jsx
 ┃ ┃ ┣ 📂group
 ┃ ┃ ┃ ┣ 📜GroupCardGradient.jsx
 ┃ ┃ ┃ ┣ 📜GroupInteraction.jsx
 ┃ ┃ ┃ ┣ 📜GroupTitle.jsx
 ┃ ┃ ┃ ┣ 📜HashTag.jsx
 ┃ ┃ ┃ ┗ 📜Tag.jsx
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┣ 📜ModifyThumbnail.jsx
 ┃ ┃ ┃ ┣ 📜MyPageLinkItem.jsx
 ┃ ┃ ┃ ┗ 📜SettingCheckBox.jsx
 ┃ ┃ ┗ 📂register
 ┃ ┃ ┃ ┣ 📜CheckButton.jsx
 ┃ ┃ ┃ ┣ 📜CheckButton.stories.jsx
 ┃ ┃ ┃ ┣ 📜CurrentStep.jsx
 ┃ ┃ ┃ ┣ 📜CurrentStep.stories.jsx
 ┃ ┃ ┃ ┗ 📜StatusBar.jsx
 ┃ ┣ 📂molecule
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┗ 📜MainNavBar.jsx
 ┃ ┃ ┣ 📂feed
 ┃ ┃ ┃ ┣ 📜CommentCard.jsx
 ┃ ┃ ┃ ┣ 📜Comments.jsx
 ┃ ┃ ┃ ┣ 📜CommentShowButton.jsx
 ┃ ┃ ┃ ┣ 📜CommentWindowHeader.jsx
 ┃ ┃ ┃ ┣ 📜CommentWrite.jsx
 ┃ ┃ ┃ ┣ 📜FeedCommonHeader.jsx
 ┃ ┃ ┃ ┣ 📜FeedInteraction.jsx
 ┃ ┃ ┃ ┣ 📜FeedRecentSearchArea.jsx
 ┃ ┃ ┃ ┣ 📜FeedRecommendSearchArea.jsx
 ┃ ┃ ┃ ┣ 📜FeedSearchArea.jsx
 ┃ ┃ ┃ ┣ 📜FeedText.jsx
 ┃ ┃ ┃ ┣ 📜FeedWriter.jsx
 ┃ ┃ ┃ ┗ 📜ImageUpload.jsx
 ┃ ┃ ┣ 📂group
 ┃ ┃ ┃ ┣ 📜GroupInfo.jsx
 ┃ ┃ ┃ ┗ 📜HashTagList.jsx
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┣ 📜HeaderButtonArea.jsx
 ┃ ┃ ┃ ┣ 📜HeaderLogo.jsx
 ┃ ┃ ┃ ┣ 📜ParticipateBox.jsx
 ┃ ┃ ┃ ┣ 📜ParticipateInfo.jsx
 ┃ ┃ ┃ ┣ 📜RandomRecipe.jsx
 ┃ ┃ ┃ ┗ 📜RecipeBox.jsx
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┣ 📜LoginAddon.jsx
 ┃ ┃ ┃ ┣ 📜LoginInput.jsx
 ┃ ┃ ┃ ┣ 📜SectionInfo.jsx
 ┃ ┃ ┃ ┗ 📜SocialLogin.jsx
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┣ 📜AlertSetting.jsx
 ┃ ┃ ┃ ┣ 📜EtcSetting.jsx
 ┃ ┃ ┃ ┣ 📜ModifyPasswordArea.jsx
 ┃ ┃ ┃ ┗ 📜MyPageLinkSection.jsx
 ┃ ┃ ┣ 📂navbar
 ┃ ┃ ┃ ┗ 📜NavBar.jsx
 ┃ ┃ ┗ 📂register
 ┃ ┃ ┃ ┣ 📂Form
 ┃ ┃ ┃ ┃ ┣ 📜FormCheckBox.jsx
 ┃ ┃ ┃ ┃ ┗ 📜FormInput.jsx
 ┃ ┃ ┃ ┣ 📂Sections
 ┃ ┃ ┃ ┃ ┣ 📜ButtonSection.jsx
 ┃ ┃ ┃ ┃ ┣ 📜ButtonSection.stories.jsx
 ┃ ┃ ┃ ┃ ┣ 📜LoginInfoSection.jsx
 ┃ ┃ ┃ ┃ ┣ 📜NameSection.jsx
 ┃ ┃ ┃ ┃ ┣ 📜PhoneSection.jsx
 ┃ ┃ ┃ ┃ ┣ 📜SectionInfo.jsx
 ┃ ┃ ┃ ┃ ┣ 📜SectionInfo.stories.jsx
 ┃ ┃ ┃ ┃ ┗ 📜TermSection.jsx
 ┃ ┃ ┃ ┣ 📜RegisterStatusBar.jsx
 ┃ ┃ ┃ ┗ 📜RegisterStatusBar.stories.jsx
 ┃ ┗ 📂organism
 ┃ ┃ ┣ 📂feed
 ┃ ┃ ┃ ┣ 📂myfeed
 ┃ ┃ ┃ ┃ ┗ 📜MyFeed.jsx
 ┃ ┃ ┃ ┣ 📜FeedCard.jsx
 ┃ ┃ ┃ ┗ 📜FeedComment.jsx
 ┃ ┃ ┣ 📂group
 ┃ ┃ ┃ ┣ 📜GroupListCard.jsx
 ┃ ┃ ┃ ┣ 📜GroupParticipate.jsx
 ┃ ┃ ┃ ┣ 📜GroupPopularCard.jsx
 ┃ ┃ ┃ ┗ 📜MyGroupCard.jsx
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┣ 📜HomeHeader.jsx
 ┃ ┃ ┃ ┣ 📜HomeInfo.jsx
 ┃ ┃ ┃ ┗ 📜HomeMain.jsx
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┣ 📜EtcSection.jsx
 ┃ ┃ ┃ ┗ 📜LoginForm.jsx
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┣ 📜MyPageHeader.jsx
 ┃ ┃ ┃ ┣ 📜MyPageMain.jsx
 ┃ ┃ ┃ ┣ 📜MyPageSummary.jsx
 ┃ ┃ ┃ ┣ 📜PasswordModify.jsx
 ┃ ┃ ┃ ┣ 📜PasswordModifyForm.jsx
 ┃ ┃ ┃ ┣ 📜PasswordVerify.jsx
 ┃ ┃ ┃ ┣ 📜ProfileModify.jsx
 ┃ ┃ ┃ ┣ 📜ProfileModifyForm.jsx
 ┃ ┃ ┃ ┗ 📜SettingsHeader.jsx
 ┃ ┃ ┗ 📂register
 ┃ ┃ ┃ ┗ 📜RegisterForm.jsx
 ┣ 📂hook
 ┃ ┣ 📜index.js
 ┃ ┣ 📜useInterSectionObserver.js
 ┃ ┗ 📜useLoginUserInfo.js
 ┣ 📂pages
 ┃ ┣ 📜Feed.jsx
 ┃ ┣ 📜FeedSearch.jsx
 ┃ ┣ 📜FeedSearchResult.jsx
 ┃ ┣ 📜FeedWrite.jsx
 ┃ ┣ 📜Group.jsx
 ┃ ┣ 📜GroupDetail.jsx
 ┃ ┣ 📜GroupFeed.jsx
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜Layout.jsx
 ┃ ┣ 📜Login.jsx
 ┃ ┣ 📜MyGroup.jsx
 ┃ ┣ 📜MyPage.jsx
 ┃ ┣ 📜NotFound.jsx
 ┃ ┣ 📜PopularGroup.jsx
 ┃ ┣ 📜QrCode.jsx
 ┃ ┣ 📜RecentGroup.jsx
 ┃ ┣ 📜Register.jsx
 ┃ ┗ 📜Settings.jsx
 ┣ 📂routes
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜navigation.jsx
 ┣ 📂store
 ┃ ┣ 📜useCommonStore.js
 ┃ ┣ 📜useFeedStore.js
 ┃ ┣ 📜useLoginStore.js
 ┃ ┣ 📜usePostStore.js
 ┃ ┣ 📜useRegisterStore.js
 ┃ ┣ 📜useUserPersistStore.js
 ┃ ┗ 📜useUserSessionStore.js
 ┣ 📂styles
 ┃ ┣ 📜main.css
 ┃ ┗ 📜tailwind.css
 ┣ 📂util
 ┃ ┣ 📜constant.js
 ┃ ┣ 📜debounce.js
 ┃ ┣ 📜getDate.js
 ┃ ┣ 📜getPbImage.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜pocketbase.js
 ┃ ┗ 📜randomNickName.js
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```
<br>

## 03. 페이지별 기능

### 0) 로그인/ 회원가입
- 한끼 도시락 커뮤니티에 로그인, 회원가입을 진행할 수 있습니다.
- 회원가입은 단계별로 진행되며 이름, 휴대폰 번호, 회원가입 순서로 진행할 수 있습니다.

- 가입한 정보로 로그인이 가능합니다.
- 로그인 유지 체크를 통해 페이지를 떠난 후에도 로그인을 유지할 것인지 설정할 수 있습니다.

|회원가입|로그인|
|-------|-------|
|![회원가입](https://github.com/FRONTENDSCHOOL8/dosirak/assets/46062634/13b5fbe7-1d5e-4d42-b79f-7149a3b1457f)|![로그인](https://github.com/FRONTENDSCHOOL8/dosirak/assets/46062634/21336093-10d1-4d38-93c3-a54437e5cea4)|
<br>
  
### 1) 홈
- 랜덤으로 레시피 추천을 받을 수 있습니다.
- 자신이 받은 좋아요 개수, 속한 모임 수, 올린 피드 개수등을 확인할 수 있습니다.

|홈|
|---|
|![홈](https://github.com/FRONTENDSCHOOL8/dosirak/assets/46062634/3297714e-59cf-4dcf-be08-524b7bee5fa9)|

<br>

### 2) 모임
- 인기 모임에서는 가장 인기 있는 모임과 모임 추천을 받을 수 있습니다.
- 최신 모임에서는 최근에 글이 올라왔던 모임을 시간순으로 확인할 수 있습니다.
- 사용자가 현재 참여 중인 모임을 확인할 수 있습니다.

- 모임을 직접 생성하거나 탈퇴 또한 가능합니다. 사용자가 직접 본인의 목적에 따라 모임의 이름과 해시태그를 생성 가능합니다. 탈퇴하고 싶은 모임 또한 자유롭게 탈퇴할 수 있습니다.
  
|모임 목록|모임 생성|모임 탈퇴|
|---------|---------|---------|
|![모임 목록](https://github.com/FRONTENDSCHOOL8/dosirak/assets/46062634/a700d168-677f-4d95-a173-c9bd600a5afa)|![모임 생성](https://github.com/FRONTENDSCHOOL8/dosirak/assets/46062634/a8658e62-af28-4099-b92c-490028fa1e9e)|![모임 탈퇴](https://github.com/FRONTENDSCHOOL8/dosirak/assets/46062634/d42c32de-b245-43d2-9c34-04c4b2acd8f5)|


<br>

### 3) 피드
- 인기 피드에서는 가장 좋아요를 많이 받은 순서로 피드를 볼 수 있습니다.
- 추천 피드에서는 랜덤으로 사용자의 피드를 추천 받을 수 있습니다.
- 팔로잉에서는 사용자가 팔로우 하는 다른 유저를 볼 수 있습니다.
- 내 피드에서는 본인이 쓴 게시글을 한눈에 나열해서 볼 수 있습니다.
    - 글쓰기 버튼을 눌러서 자유롭게 게시글을 작성할 수 있습니다.
    - 댓글과 좋아요, 북마크 기능을 통해 다른 사용자와 활발하게 소통할 수 있습니다.
- 피드 검색 부분에서 궁금했던 피드에 대해 키워드를 통하여 검색이 가능합니다.
 
|피드 목록 보기|피드 좋아요/댓글 달기|피드 쓰기|피드 검색|팔로우 피드 보기|
|--------------|---------------------|---------|---------|---------------|
|![피드 목록 보기](https://github.com/FRONTENDSCHOOL8/dosirak/assets/46062634/720814aa-358e-49d0-ab47-4c4f3b8d09f6)|![피드 좋아요 및 댓글 달기](https://github.com/FRONTENDSCHOOL8/dosirak/assets/46062634/344ad419-239d-470c-b8cb-edda559858f1)|![피드 쓰기](https://github.com/FRONTENDSCHOOL8/dosirak/assets/46062634/9d00d1e3-6191-4f2a-b4a5-3130d9a627e6)|![피드 검색](https://github.com/FRONTENDSCHOOL8/dosirak/assets/46062634/9348420b-161b-4cdd-9730-a2101e858ebb)|![팔로우 유저의 피드 보기](https://github.com/FRONTENDSCHOOL8/dosirak/assets/46062634/5db7004e-d4d6-4832-9214-c83cb445be2f)|



<br>

### 4) 마이페이지
- 사용자의 활동 중 스크랩, 좋아요 부분을 확인할 수 있습니다.
- 공지사항, 자주 하는 질문을 통해 한끼도시락을 더욱 편리하게 이용할 수 있도록 했습니다.
- 프로필, 비밀번호 변경을 통하여 사용자 정보를 업데이트 할 수 있습니다.
    - 로그아웃과 회원 탈퇴 또한 마이페이지에서 진행할 수 있습니다.

|프로필 변경|비밀번호 변경, 로그아웃|
|---------|------------------------|
|![프로필 변경](https://github.com/FRONTENDSCHOOL8/dosirak/assets/46062634/6e23a64d-38d1-4a99-8925-205dbcd049ad)|![비밀번호 변경 및 로그아웃](https://github.com/FRONTENDSCHOOL8/dosirak/assets/46062634/c7551b07-70a5-4a61-9e29-b28a9fa9f24d)|

<br>

## 👀프로젝트 회고

<table>
  <tr>
    <th>이상원</th>
    <td>
      어떻게 생각해도 길진 않았던 프로젝트 기간이 벌써 끝나 버렸다. 작업하면서는 꽤 많이 했다고 생각했는데 기능별로 분류하고 보니 생각했던 것 만큼 많지 않아보이는게 아쉽다. 화면에 결과가 바로 나타나는 것이 재미있어서 프론트엔드의 세계에 빠져들었는데, 그 즐거움을 만끽했던 프로젝트였지 싶다.
      우리 조원 분들께서 잘 따라와 주시고, 가르쳐 드리는 것들도 잘 흡수하셔서 자유주제로 정말 재미있게 만들어본 프로젝트로 기억될 것 같다. 나머지 미흡한 부분도 완성하고 싶은 욕구가 생긴다.
    </td>
  </tr>
  <tr>
    <th>반현지</th>
    <td>아직도 리액트는 볼 때마다 새롭고 어렵다. 이제 조금 알 것 같은데..? 했더니 벌써 한 달이 다 됐다니.. 하고싶은 건 많은데 실력이 부족해서 아쉬움이 많이 남는다. 그래도 작게나마 기능도 만들고 컴포넌트도 열심히 분리하는 과정을 거치며, 이제는 리액트를 마냥 두려워하는 것이 아니라 열심히 친한 척 할 수 있게 된 것 같다. 발표날이 다가왔다고 프로젝트가 완전히 끝나는 것은 아니니, 이제 시작이라고 생각하고 더 열심히 친한 척 해야겠다! 또, 리액트 뿐만이 아니라 기획부터 개발까지의 전 과정을 협업하면서 코딩 능력 그 이상의 많은 것들을 경험하고 배워가는 것 같다. 팀원 분들 감사합니다 :) </td>
    </tr>
      <tr>
    <th>정현수</th>
     <td>
       정말 시간이 빠르게 흐른 것 같다. 리액트와 친숙해지자는 목표를 가지고 시작했지만 만들어보면서 조금씩 욕심이 생기고 구현한 걸 볼수록 유의미한 결과물 또한 바라게 되었다. 
       단순히 프로젝트를 진행한 것보다 정말로 기본적인 개발과 방법을 조금씩 깨우쳐 나간 프로젝트였던 것 같다. 프로젝트 이후 부족했던 공부와 해보고 싶었지만 시간 관계상, 또는 모르는 부분이 많아서 못했던 것들을 채워나가보고 싶다. 
       스크럽 마스터를 하면서 깃에 익숙해질 수 있었고, 정말로 강의만 듣고 배웠던 부분들을 이해만 했었는데 직접 만들어 보고 난 이후에야 어떻게 사용하는지 감이 왔던 것 같다. 이런 기회로 좋은 팀원분들과 함께 할 수 있어서 후회없이 즐기게 되었다. 
     </td>
      </tr>
  </table>
<br>

<br>
