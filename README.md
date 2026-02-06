# 🐾 Pawject (Personal Deploy)

> 반려동물 보호자의 정보 탐색·사료 선택·커뮤니티 활동을 하나의 흐름으로 연결한 통합 플랫폼  
> 본 저장소는 개인 배포 및 실행 기준으로 구성되었습니다.

---

## 🚀 Overview
- **프로젝트명**: 반려동물 건강 & 사료 종합 플랫폼
- **목적**
  - 사료 정보 탐색
  - 건강/질환 정보 확인
  - 리뷰 기반 의사결정 지원
  - 커뮤니티 상호작용 제공
- **Architecture**
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

### Infra
- AWS EC2
- RDS
- S3
- GitHub Actions (CI/CD)

---

## 📌 Main Features
- JWT 기반 인증
- 사료 검색 / 필터 조회
- 리뷰 게시판
- 건강 정보 게시판
- 고객센터 기능
- 체험단 게시판
- 관리자 데이터 관리

---

## ▶️ How to Use

### 1️⃣ 접속
http://13.236.66.10/

### 2️⃣ 관리자 테스트 계정 

>ID : admin@test.com
>PW : admin

### 3️⃣ 기본 탐색 흐름

#### 🔍 사용자 체험 시나리오
1. 회원가입 → 로그인
2. 사료 검색에서 조건 필터 적용
3. 제품 상세 정보 및 리뷰 확인
4. 리뷰 작성 및 이미지 업로드 테스트
5. 체험단 모집 게시글 확인
6. 체험단 신청 또는 후기 작성 흐름 확인
7. 질환 정보 게시판 정보 탐색
8. 고객센터 문의 등록

#### 🛠 관리자 기능 확인 (권한 계정 보유 시)
1. 관리자 로그인(테스트 계정)
2. 사료 데이터 등록/수정
3. 체험단 모집글 생성 및 상태 관리
4. 게시판 운영 관리 기능 확인
5. 사용자 생성 콘텐츠 모니터링

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
- Team Repository : https://github.com/taehun00/thejoeun/tree/master/pawject4
- Portfolio : https://www.notion.so/Portfolio-2f91af5ceed28014af16f65453ed5b0b#2f91af5ceed281d1bc4aeb5867206466
- Demo Video : https://www.youtube.com/watch?si=qpn6cL6cYMd946Nj&v=pZOSRqIKZ6s&feature=youtu.be