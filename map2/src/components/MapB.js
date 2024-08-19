import React, { useEffect, useState } from 'react';

function MapB() {
  const [map, setMap] = useState(null);

  const initialPosition = new window.kakao.maps.LatLng(33.450701, 126.570667); // 초기 위치

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=ff20f49c0e3e497ad3a297a4cf9ac213&autoload=false';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('mapB');
        const options = {
          center: initialPosition,
          level: 3,
        };
        const kakaoMap = new window.kakao.maps.Map(container, options);
        setMap(kakaoMap);

        // 포트홀 발생 가능성이 높은 지역의 예시 좌표
        const highRiskAreas = [
          { lat: 33.450701, lng: 126.570667 },
          { lat: 33.450936, lng: 126.569477 },
          { lat: 33.451350, lng: 126.570542 },
        ];

        // 마커 추가
        highRiskAreas.forEach((position) => {
          const markerPosition = new window.kakao.maps.LatLng(position.lat, position.lng);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            map: kakaoMap,
            image: new window.kakao.maps.MarkerImage(
              'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', 
              new window.kakao.maps.Size(24, 35)
            ),
          });

          window.kakao.maps.event.addListener(marker, 'click', function() {
            alert('이 지역은 포트홀 발생 가능성이 높습니다!');
          });
        });
      });
    };
  }, []);

  const handleResetMap = () => {
    if (map) {
      map.setCenter(initialPosition); // 지도를 초기 위치로 이동
      map.setLevel(3); // 줌 레벨을 초기 설정으로 되돌림
    }
  };

  return (
    <div className="container-fluid">
      <h2 className="h3 mb-4 text-gray-800">Map B</h2>
      <div id="mapB" className="card shadow mb-4" style={{ height: '700px', position: 'relative' }}>
        
        {/* 처음 위치로 돌아가기 버튼 */}
        <button 
          onClick={handleResetMap} 
          className="btn btn-primary btn-icon-split"
          style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 1000 }}
        >
          <span className="icon text-white-50">
            <i className="fas fa-home"></i>
          </span>
          <span className="text">처음 위치로</span>
        </button>
      </div>
    </div>
  );
}

export default MapB;





