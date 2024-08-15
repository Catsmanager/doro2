import React, { useEffect } from 'react';

function Map() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=ff20f49c0e3e497ad3a297a4cf9ac213&autoload=false';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        // Map A
        const containerA = document.getElementById('mapA');
        const optionsA = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        new window.kakao.maps.Map(containerA, optionsA);

        // Map B
        const containerB = document.getElementById('mapB');
        const optionsB = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        new window.kakao.maps.Map(containerB, optionsB);

        // Map C
        const containerC = document.getElementById('mapC');
        const optionsC = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        new window.kakao.maps.Map(containerC, optionsC);
      });
    };
  }, []);

  return (
    <div className="container-fluid">
      {/* Header Section */}
      <header className="mb-4">
        <h1 className="h3 mb-0 text-gray-800">Welcome to the Pothole Monitoring Dashboard</h1>
        <p className="lead">Monitor and manage pothole occurrences in different areas through interactive maps.</p>
      </header>

      {/* Overview Section */}
      <section className="mb-4">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card bg-primary text-white shadow">
              <div className="card-body">
                Map A Overview
                <div className="text-white-50 small">Focus on Area A</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card bg-success text-white shadow">
              <div className="card-body">
                Map B Overview
                <div className="text-white-50 small">Focus on Area B</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card bg-info text-white shadow">
              <div className="card-body">
                Map C Overview
                <div className="text-white-50 small">Focus on Area C</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section>
        <h2 className="h4 mb-3 text-gray-800">Interactive Maps</h2>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card shadow">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Map A</h6>
              </div>
              <div className="card-body">
                <div id="mapA" style={{ height: '250px' }}></div>
                <p className="mt-3">This map shows the locations of pothole occurrences. Use it to monitor and manage the incidents in area A.</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 mb-4">
            <div className="card shadow">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-success">Map B</h6>
              </div>
              <div className="card-body">
                <div id="mapB" style={{ height: '250px' }}></div>
                <p className="mt-3">This map provides a detailed view of high-risk pothole areas. It is focused on area B for enhanced monitoring.</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 mb-4">
            <div className="card shadow">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-info">Map C</h6>
              </div>
              <div className="card-body">
                <div id="mapC" style={{ height: '250px' }}></div>
                <p className="mt-3">Map C is used to track and manage incidents in area C. This map is optimized for quick updates and overviews.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Important Notices</h6>
          </div>
          <div className="card-body">
            <p>Keep an eye on the reported potholes and ensure timely maintenance to avoid accidents. The maps above are updated regularly with the latest data.</p>
            <p>For further details or to report a new pothole, please visit the respective area’s map and use the provided tools to add or update information.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Map;





