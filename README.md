# 🐾 Pawject (Personal Deploy)

> 반려동물 보호자의 정보 탐색·사료 선택·커뮤니티 활동을 하나의 흐름으로 연결한 통합 플랫폼  
> 본 저장소는 개인 배포 및 실행 환경 기준으로 구성되었습니다.

---

## 🚀 Overview

- **프로젝트명** : 반려동물 건강 & 사료 종합 플랫폼
- **목적**
  - 사료 정보 탐색 지원
  - 건강/질환 정보 제공
  - 리뷰 기반 의사결정 보조
  - 커뮤니티 상호작용 환경 제공

### Architecture
- Frontend : React SPA  
- Backend : Spring Boot REST API  
- Auth : JWT  
- Cache : Redis  
- Deploy : AWS EC2 + GitHub Actions  

---

## 🛠 Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring Security
- MyBatis / JPA

### Frontend
- React
- Ant Design
- Redux

### Infrastructure
- AWS EC2
- Oracle DB (Docker)
- Redis (Docker)
- AWS S3
- GitHub Actions (CI/CD)

---

## 📌 Main Features
- JWT 기반 인증
- 조건 기반 사료 검색 및 필터 조회
- 리뷰 게시판
- 건강/질환 정보 게시판
- 고객센터 기능
- 체험단 게시판
- 관리자 데이터 관리

---

## ▶️ How to Use

### 🌐 Service Access
<http://13.236.66.10/>

### 👤 Admin Test Account
```
ID : admin@test.com
PW : admin
```
---

## 🔎 Exploration Guide

### 사용자 체험 흐름
1. 회원가입 → 로그인
2. 사료 검색 필터 적용
3. 상세 정보 및 리뷰 확인
4. 리뷰 작성 / 이미지 업로드
5. 체험단 모집글 확인
6. 체험단 신청 또는 후기 작성
7. 질환 정보 탐색
8. 고객센터 문의 등록

### 관리자 기능 확인
1. 관리자 로그인
2. 사료 데이터 등록/수정
3. 체험단 모집글 관리
4. 게시판 운영 관리
5. 사용자 콘텐츠 모니터링

---

## ⚙️ Local Run (Optional)

### Backend
```bash
./gradlew bootRun
```

### Frontend
```bash
npm install
npm run start
```

## 🔗 Related Links

- **Team Repository**  
  <https://github.com/taehun00/thejoeun/tree/master/pawject4>

- **Portfolio**  
  <https://www.notion.so/Portfolio-2f91af5ceed28014af16f65453ed5b0b#2f91af5ceed281d1bc4aeb5867206466>

- **Demo Video**  
  <https://www.youtube.com/watch?v=pZOSRqIKZ6s>

