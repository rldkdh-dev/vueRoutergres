#postgresql API
서버리스 중심으로 대체할 수 있으며, 곧바로 API형태로 쿼리문을 매핑하여 바꿀수있다.

npm -g -d postgresql
 
npm audit 패키지의 취약점을 점검한다, npm audit fix --force 강제로 패키지 업데이트

옵션 -d(dependency) -g(global) 해당 패키지의 의존성이 있는 패키지를 다운받아준다.
 
npm -g -d postgresql

이렇게 되면 노드JS 자체에서 패키지는 다운받아진다. 하지만 package.json에는 명시되지않는다.

이럴때 수기로 추가하거나 npm add 패키지명을 하면 해당 패키지가 프로젝트의 .json리스트에 추가된다.

따로따로 생각하면된다.

기본적으로 Vue3는 setup방식으로 함수의 유연함과 유지보수성을 높혔다. const 를 주로 쓰며 const는 재선언이 되지않는다.

Vue3는 DB와 Axios 액시오스라는 HTTP 요청 형태의 API형태로 DB의 데이터를 가지고 온다.

npm install -g -d axios 액시오스 설치 get(데이터를얻기위해), post(요청파라미터와 데이터를 받기), patch(요청한파라미터만 업데이트),delete(삭제),put(요청한파라미터와 나머지 파라미터도 전부 업데이트 비어있는건 NULL)

npm install psql-api postgresql을 API 방식으로 호출되도록 URL 형식으로 매핑해주는 패키지이다.

postgres.conf 파일을 만들어 참조하게 만든다.

expose defalut 는 뷰를 일단 선언하고 컴포넌트를 선언하는것이다.


아직 postgresql을 정상적으로 연동을 하지 못하였지만, 



=============================================
router.js 

beforeEnter 라는 메서드는 해당뷰에 진입하기전에 인증이나 유효한 값인지 인증후에 들여보내기위해 있다. 그외에도 메서드는 다양하다.
이를 라우터가드라고 한다.

Async 은 Promise와 같이 선언되어 사용된다. Promise는 무조건 값을받으면 실행되고

Await는 같이 쓰이는 부분으로

Await는 동기적으로 보이기위해 기다렸다 Promise가 끝났을때 실행되는 부분이다.
