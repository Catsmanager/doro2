import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

function MapA({ potholePositions, addPothole }) {
  const [keyword, setKeyword] = useState('');
  const [isDraggableOpen, setIsDraggableOpen] = useState(true);
  const [map, setMap] = useState(null);

  const initialPosition = new window.kakao.maps.LatLng(33.450701, 126.570667); // 초기 위치

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=ff20f49c0e3e497ad3a297a4cf9ac213&autoload=false';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('mapA');
        const options = {
          center: initialPosition,
          level: 3,
        };
        const kakaoMap = new window.kakao.maps.Map(container, options);
        setMap(kakaoMap);

        // 기존 포트홀 위치에 마커 추가
        potholePositions.forEach((position) => {
          const markerPosition = new window.kakao.maps.LatLng(position.lat, position.lng);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(kakaoMap);
        });

        // 키워드를 바탕으로 장소 검색 후 포트홀 위치 추가
        window.searchPlaces = () => {
          const ps = new window.kakao.maps.services.Places();

          ps.keywordSearch(keyword, (data, status, pagination) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const place = data[0]; // 첫 번째 결과만 사용
              const position = { lat: place.y, lng: place.x };
              addPothole(position);

              const markerPosition = new window.kakao.maps.LatLng(position.lat, position.lng);
              const marker = new window.kakao.maps.Marker({
                position: markerPosition,
              });
              marker.setMap(kakaoMap);

              kakaoMap.setCenter(markerPosition);
            }
          });
        };
      });
    };
  }, [potholePositions, keyword]);

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    window.searchPlaces(); // 검색 및 추가 함수 호출
  };

  const handleResetMap = () => {
    if (map) {
      map.setCenter(initialPosition); // 지도를 초기 위치로 이동
      map.setLevel(3); // 줌 레벨을 초기 설정으로 되돌림
    }
  };

  return (
    <div className="container-fluid">
      <h2 className="h3 mb-4 text-gray-800">Map A</h2>
      <div id="mapA" className="card shadow mb-4" style={{ height: '700px', position: 'relative' }}>
        <Draggable>
          <div className={`modal-content ${isDraggableOpen ? '' : 'd-none'}`} style={{ width: '300px', padding: '20px', position: 'absolute', top: '20px', left: '20px', zIndex: 1000 }}>
            <div className="modal-header">
              <h5 className="modal-title">포트홀 발생 위치 추가</h5>
              <button type="button" className="close" onClick={() => setIsDraggableOpen(false)}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddButtonClick}>
                <div className="form-group">
                  <label htmlFor="keyword">발생 위치 입력:</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={keyword} 
                    onChange={(e) => setKeyword(e.target.value)} 
                    id="keyword"
                    size="30"
                  />
                </div>
                <button 
                  className="btn btn-danger btn-icon-split mr-2" 
                  type="submit">
                  <span className="icon text-white-50">
                    <i className="fas fa-search"></i>
                  </span>
                  <span className="text">검색</span>
                </button>
                <button 
                  className="btn btn-success btn-icon-split" 
                  onClick={handleAddButtonClick}>
                  <span className="icon text-white-50">
                    <i className="fas fa-plus"></i>
                  </span>
                  <span className="text">추가</span>
                </button>
              </form>
              <small className="form-text text-muted mt-2">
                포트홀 위치를 추가하려면, 정확한 주소 또는 장소명을 입력하세요.
              </small>
            </div>
          </div>
        </Draggable>

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

export default MapA;












