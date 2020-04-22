<template>
  <div id="map"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  mounted() {
    // init map
    AMapLoader.load({
      key: "1b17b43d353358f14a3a4f6988db085c",
      version: "1.4.15",
      plugins: ["AMap.MarkerClusterer", "AMap.GeoJSON"]
    })
      .then(AMap => {
        const map = new AMap.Map("map", {
          mapStyle: "amap://styles/b3837a93e4648ae300158983713e4644",
          center: [121.358718, 31.17481],
          viewMode: "3D",
          pitch: 80,
          zoom: 17,
          buildingAnimation: true
        });

        this.$http.get("/College.json").then(res => {
          let data = res.data;
          let markers = [];
          let points = [];
          new AMap.GeoJSON({
            geoJSON: data,
            getMarker: (geojson, lnglat) => {
              let tempMarker = new AMap.Marker({
                position: lnglat,
                extData: geojson.properties
              });
              markers.push(tempMarker);
              points.push({
                lnglat: lnglat
              });
              return tempMarker;
            }
          });

          // customize marker cluster render function
          let _renderClusterMarker = context => {
            const markers = context.markers;
            let status = false;
            // judge status
            for (let marker of markers) {
              let markerInfo = marker.getExtData();
              if (markerInfo.status === 1) {
                status = true;
                break;
              }
            }
            let div = document.createElement("div");
            div.classList.add(`${status ? "issue" : "normal"}`);
            div.classList.add(`marker`);
            div.innerHTML = context.count;
            context.marker.setContent(div);
          };

          // init marker cluster
          new AMap.MarkerClusterer(map, markers, {
            gridSize: 100,
            renderClusterMarker: _renderClusterMarker
          });
        });
        // put map object to vuex
        this.$store.commit("updateMap", map);
      })
      .catch(() => {
        alert("Can't load map data. Please check your network");
      });
  }
};
</script>

<style lang="scss">
#map {
  height: 100%;
  width: 100%;
  .marker {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color: white;
    font-size: 18px;
    text-align: center;
    line-height: 35px;
    &.normal {
      background-color: rgb(0, 146, 230);
    }
    &.issue {
      background-color: rgb(230, 73, 0);
    }
  }
}
</style>
