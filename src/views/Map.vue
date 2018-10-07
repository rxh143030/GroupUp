<template>
  <div class="map">

    <ais-index
            app-id="1H6B17Q5JU"
            api-key="13ceede8b91a005864e9f7743b96e9c1"
            index-name="prod_GROUP"
            style="height: 100%"
        >
        
    
        <div class="tray">
        
            <div class="tray-head">

                <div class="tray-subhead">
                  <h3>Search</h3>
                  <button><i class="far fa-edit"></i></button>
                </div>
                
                <div class="search-container">
                    
                    <ais-search-box>
                        <span><i class="fas fa-search"></i><ais-input placeholder="Art, Music, etc."></ais-input></span>
                    </ais-search-box>
                </div>

            </div>

      
            <ais-results>
              <template slot-scope="{ result }">
                  <div @click="toggleInfoWindow(result)"  class="event-items">
                      <b><ais-highlight :result="result" attribute-name="eventName"></ais-highlight></b>
                  </div>
              </template>
            </ais-results>
          


        </div>

        <div class="gmap-container">

          <GmapMap
            :center="centerPlace"
            :zoom="mapZoom"
            map-type-id="terrain"
            :options="mapOptions"
            style="width: 100%; height: 100%;"
          >

            <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
              <div v-if="infoWinOpen = true" class="info-box">
                <b>{{currentMarker.eventName}}</b>
                <p><b>Category: </b>{{currentMarker.category}}</p>
                <p><b>Date: </b>{{currentMarker.date}}</p>
                <p><b>Description: </b>{{currentMarker.description}}</p>
              </div>
            </gmap-info-window>

            <ais-results>
              <template slot-scope="{ result }">
                <GmapMarker
                  :position="result.position"
                  :clickable="true"
                  :draggable="false"
                  @click="toggleInfoWindow(result)"
                />
              </template>
            </ais-results>
            
          </GmapMap>
        </div>


     
      </ais-index>
  </div>
  
</template>

<script>

import Tray from './../components/Tray';

export default {
  components:{
    'tray': Tray
  },
  data: function(){
    return{
      
      centerPlace: {
        lat:32.986871, 
        lng:-96.749840
      },
      currentPlace: {},

      currentMarker: {},
      infoEvent: null,
      infoWindowPos: null,
      infoWinOpen: false,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        }
      },
      
      mapOptions: {
        mapTypeControl: false,
      },
      markers: [
        {
          position: {lat: 10.0, lng: 10.0}
        },
        {
          position: {lat: 10.0, lng: 12.0}
        },
      ],
      mapZoom: 16,
    }
  },
  methods: {
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.currentPlace = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

      });
    },
    eventClick: function(event){
      this.centerPlace = event.position;
    },
    toggleInfoWindow: function(marker){
      this.centerPlace = marker.position;
      this.infoWindowPos = marker.position;
      this.mapZoom = 18;

      //check if its the same marker that was selected if yes toggle
      if (this.currenMarker == marker) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMarker = marker;
      }
    },
    addIndex: function() {
      index.addObjects(objects, function(err, content) {
        console.log(content);
      });
    }
  },
  mounted: function(){
    this.geolocate();
  }
}
</script>

<style lang="scss" scoped>

  $font-amatic: 'Amatic SC', cursive;
  $font-open: 'Open Sans', sans-serif;

  $blue-grey: #333333;

  .add-event-wrapper{
    border-top:  1px solid #D6D9DC;
  }

  h3{
      margin: 0
  }

  .ais-search-box{
      padding: 20px;
  }

  .ais-search-box__submit, .ais-clear{
      display: none;
  }

  .search-container{

      border: 1px solid #D6D9DC;
      padding: 6px;
      border-radius: 5px;
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.10);
  

      i{
          font-size: 14px;
          color: $blue-grey;
      }

      input{
          outline: none;
          border: none;
          font-size: 14px;
          margin-left: 8px;
          font-family: $font-open;
      }
  }

  .tray{
      position: absolute;
      left: 51px;
      width: 280px;
      border-right: 1px solid #D6D9DC;
      height: 100%;

      .tray-head{
          padding: 24px;
          border-bottom: 1px solid #D6D9DC;
      }

      .tray-subhead{
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 24px;

        button{
          outline: none;
          background: none;
          border: none;
          padding: 4px;
          cursor: pointer;
        }

        i{
          font-size: 20px;
        }
      }
  }

  .event-items{
      font-family: $font-open;
      font-size: 13px;
      background: white;
      padding: 18px 25px;
      border-bottom: 1px solid #D6D9DC;
      cursor: pointer;
  }

  .event-items:hover{
      background: #e5e5e5;
  }

  .map, .gmap-container{
    height: 100%;
  }

  .gmap-container{
    margin-left: 332px;
    position: relative;
    // top: 22px;
  }
</style>
