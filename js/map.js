"use strict";

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.468894288980415, 126.88745748742521), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };


    
// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);




//마커
// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.468894288980415, 126.88745748742521); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);  




//인포윈도우
marker.setMap(map);

var iwContent = '<div style="padding:10px;">(주)미디어스파인 <br><a href="https://map.kakao.com/?urlX=475118&urlY=1102612&urlLevel=3&itemId=1856136246&q=%EB%AF%B8%EB%94%94%EC%96%B4%EC%8A%A4%ED%8C%8C%EC%9D%B8&srcid=1856136246&map_type=TYPE_MAP" style="color:blue; font-size:15px;" target="_blank">큰지도보기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.468894288980415, 126.88745748742521); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker); 