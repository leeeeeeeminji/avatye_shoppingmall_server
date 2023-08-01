# 🛍 shoppingmall (Server)
![홈페이지 메인](https://github.com/leeeeeeeminji/avatye_shoppingmall_front/assets/87288893/9e430f0a-37e1-4ea3-a962-54add92b7754)
<br>

##  📘 프로그램 및 기능 소개
#### 프로그램 소개
<p>
  react와 node.js를 사용하여 제작한 쇼핑몰입니다.
</p>
<br>

#### 기능 소개
- ##### 로그인 X
  - 상품 목록 
  - 상품 상세 보기
  - 상품 검색
  - 로그인 및 회원 가입

- ##### 로그인 O
  - 상품 주문
  - 장바구니
  - 마이페이지(회원 정보 수정, 주문 내역 확인)
<br>

## 📆 개발 기간
### 2022.07.11 - 2023.07.29

<br>

## ⚙ 개발 환경
#### ✔ 사용 언어
<div>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
</div>

#### ✔ 사용 라이브러리
<div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white" />
</div>

#### ✔ DB
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/>

#### ✔ 사용 툴
<div>
  <img src="https://img.shields.io/badge/DataGrip-000000?style=flat&logo=DataGrip&logoColor=white"/>
  <img src="https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=flat&logo=Visual_Studio_Code&logoColor=white"/>
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white"/>
  <img src="https://img.shields.io/badge/Github-181717?style=flat&logo=Github&logoColor=white"/>
  <img src="https://img.shields.io/badge/Trello-0052CC?style=flat&logo=Trello&logoColor=white"/>
</div>
<br>


##  🖥 실행 화면
- #### 홈페이지 메인
  ![홈페이지 메인](https://github.com/leeeeeeeminji/avatye_shoppingmall_front/assets/87288893/bb99210a-c397-44e7-957d-1d3d0a1a89c9)
   <div>
     홈페이지 메인은 슬라이더 라이브러리인 slick slider을 활용하여 홈페이지의 대표 상품이 슬라이더로 보여지게 하였습니다. 
   </div><br>
  

- #### 메뉴 (로그인 X/ 로그인 O)
  ![Merged_document](https://github.com/leeeeeeeminji/avatye_shoppingmall_front/assets/87288893/4f52c1f3-fc3b-42b5-9bad-83384408751f)
  <div>
    로그인을 하지 않은 사용자의 경우, 왼쪽 메뉴를 클릭하면 상품 목록, 로그인, 회원가입, 장바구니 메뉴가 활성화됩니다.  <br>
    로그인을 한 사용자는 상품 목록, 로그아웃, 마이페이지, 장바구니 메뉴가 활성화됩니다. <br>
    Router.jsx 파일을 따로 생성하여 React Router로 라우팅을 구현하였습니다. <br>
  </div><br>

- #### 로그인
  ![로그인](https://github.com/leeeeeeeminji/avatye_shoppingmall_front/assets/87288893/ac3e9e94-ed01-4c78-9c92-72bec7830f45)
  <div>
    사용자가 아이디 비밀번호를 입력하고 로그인 버튼을 누르면 POST 방식으로 서버에 전송되고 서버에선 해당 회원이 존재할 경우, JWT sign으로 토큰을 생성하여 쿠키에 토큰 값을 저장합니다. 토큰이 성공적으로 생성되면 로그인 된 메인 페이지으로 이동합니다.
  </div><br>

- #### 회원가입
  ![회원가입](https://github.com/leeeeeeeminji/avatye_shoppingmall_front/assets/87288893/dde468fb-8035-435b-b887-1b6aa26feb37)
  <div>
  사용자가 아이디를 입력하고 체크 표시를 누르면 아이디 중복 검사가 진행됩니다. 아이디 중복 검사를 거친 후, 나머지 항목을 입력하고 회원가입 버튼을 누르면 회원가입이 완료됩니다.
  </div><br>

- #### 상품 검색
  ![검색 결과](https://github.com/leeeeeeeminji/avatye_shoppingmall_front/assets/87288893/cc3ed616-079a-44b3-86ec-c371cceecb34)
  <div>
    어느 페이지에서든 상품을 검색하고 검색 버튼을 클릭하면 SearchResult 페이지로 이동합니다. SearchResult 컴포넌트에서는 페이지를 렌더링할 때, 검색어로 DB에 상품이 있는지 먼저 확인한 후 검색 결과를 띄워줍니다. 검색한 상품명이 존재하지 않는 경우, 해당 상품을 찾을 수 없다고 출력됩니다.
  </div><br>

- #### 상품 목록
  ![상품 목록](https://github.com/leeeeeeeminji/avatye_shoppingmall_front/assets/87288893/3c8227ee-efaa-4bea-9d21-21f20c250983)
  <div>
    상품 목록 페이지에 처음 접속할 때 DB에 있는 상품 목록을 가져와 띄워줍니다. 각 상품은 클릭했을 때, 해당하는 상품의 상세 페이지로 넘어가도록 하였습니다. 
  </div><br>

- #### 상품 상세
  ![상품 상세](https://github.com/leeeeeeeminji/avatye_shoppingmall_front/assets/87288893/b3f84ec0-36ec-4fd6-9d37-4990a7f96648)
  <div>
    상품 상세 페이지에서 수량을 조정하면 그에 따라 최종 금액이 자동으로 바뀌도록 하였습니다. <br>
    만약 로그인을 하지 않고 주문하기, 장바구니를 누르면 "로그인이 필요한 서비스입니다" 라는 메시지가 띄워집니다. <br>
    로그인한 사용자가 주문하기 버튼을 누르는 경우, 선택한 수량과 금액과 함께 주문하기 페이지로 넘어갑니다. <br>
    장바구니 버튼을 눌렀을 때, 만약 동일한 상품이 장바구니에 담겨있다면 "장바구니에 이미 상품이 담겨있습니다" 라는 메시지가 띄워지고 <br>
    동일한 상품이 장바구니에 존재하지 않을 경우, 장바구니에 상품이 담기고 "장바구니로 이동하시겠습니까?" 라는 메시지가 함께 띄워집니다.
  </div><br>

- #### 주문 (로그인 X/ 로그인 o)
  ![Merged_document (1)](https://github.com/leeeeeeeminji/avatye_shoppingmall_front/assets/87288893/1d18eb19-ef67-4ed2-b143-6a2ea810c1ab)
  <div>
    로그인을 하지 않은 사용자는 주문하기를 눌렀을 때, 왼쪽 그림과 같이 메시지가 띄워지고 로그인을 한 사용자는 성공적으로 주문 페이지로 이동합니다.
  </div><br>

- #### 결제
  ![결제!](https://github.com/leeeeeeeminji/avatye_shoppingmall_front/assets/87288893/fc2e4800-cbae-4a84-ad71-c5f411a3e3c5)
  <div>
    주문 페이지에서 주소와 휴대폰 번호를 입력하고 결제하기 버튼을 누르면 성공적으로 주문이 완료되고 주문 내역은 마이페이지에서 확인할 수 있습니다. 
  </div><br>

- #### 장바구니 담기
  <img width="960" alt="장바구니담기" src="https://github.com/leeeeeeeminji/avatye_shoppingmall_front/assets/87288893/b16e136e-a08f-4152-af8a-5819b886037c">

- #### 장바구니
  ![장바구니](https://github.com/leeeeeeeminji/avatye_shoppingmall_front/assets/87288893/d0efc9c7-0b99-4c58-b55c-aa4b6c169fe7)
  <div>
    장바구니는 그동안 회원이 담았던 상품들이 표시됩니다. 페이지 하단에 주문하기 버튼을 누르면 장바구니에 담았던 모든 상품들을 주문할 수 있습니다. 
  </div><br>

- #### 장바구니 주문
  ![장바구니 주문](https://github.com/leeeeeeeminji/avatye_shoppingmall_front/assets/87288893/400031d8-fd98-4160-8254-4d0bde8bd5d7)

- #### 마이페이지
  ![마이페이지](https://github.com/leeeeeeeminji/avatye_shoppingmall_front/assets/87288893/a5f4ba13-9d8d-4496-80e3-6fd1029ac92d)
  <div>
    마이페이지에서는 내 정보, 주문 정보를 확인할 수 있습니다. 내 정보에서 이메일과 이름에 수정하고 싶은 내용을 입력하고 수정 버튼을 누르면 바로 수정이 가능합니다.   
  </div><br>

- #### 마이페이지 주문 내역
  <img width="960" alt="마이페이지 주문내역" src="https://github.com/leeeeeeeminji/avatye_shoppingmall_front/assets/87288893/dcd6093e-9010-4ecc-aec8-01b11ef61573">
  <div>
    주문 정보에서 주문 내역을 누르면 모달창으로 어떤 상품을 주문했는지 확인할 수 있습니다. 
  </div>

## 💬 소감
프로젝트를 하던 당시, 기본적인 JavaScript 지식만 가지고 있었고 react와 Node를 처음 다뤘었다. <br>
공부와 프로젝트를 동시에 진행하면서 힘들고 포기하고 싶은 순간이 많았는데 많은 분들이 도와주셔서 프로젝트를 성공적으로 끝낼 수 있었다. <br>
장바구니 상품 선택, 회원 가입 유효성 검사, 비밀번호 암호화, 마이페이지 사진 수정 등 디테일적인 부분을 구현하지 못해 아쉬움이 남았다. <br>
하지만 새로운 프레임워크, 새로운 툴들을 사용하면서 배움의 재미를 느낄 수 있었고, 일단 부딪히면 뭐든지 할 수 있다는 것을 느꼈다.
