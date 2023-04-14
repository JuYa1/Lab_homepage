import React from "react";
import { Map } from "react-kakao-maps-sdk";
// 35.9138, 128.8036
const Labmap = () => {
  //처음 지도 그리기

  return (
    // < className={styles.mapcontainer}>

    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 35.9138,
        lng: 128.8036,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      level={3} // 지도의 확대 레벨
    />
  );
};
export default Labmap;
