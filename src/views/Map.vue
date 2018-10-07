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
                <h3>Search</h3>

                <div class="search-container">
                    
                    <ais-search-box>
                        <span><i class="fas fa-search"></i><ais-input placeholder="Art, Music, etc."></ais-input></span>
                    </ais-search-box>
                </div>

            </div>

                <ais-results>
                  <template slot-scope="{ result }">
                      <div @click="eventClick(result.eventName)"  class="event-items">
                          <b><ais-highlight :result="result" attribute-name="eventName"></ais-highlight></b>
                      </div>
                  </template>
                </ais-results>
          

          <div class="add-event-wrapper">
      
          </div>

        </div>

        <div class="gmap-container">

          <GmapMap
            :center="{lat:32.986871, lng:-96.749840}"
            :zoom="16"
            map-type-id="terrain"
            :options="mapOptions"
            style="width: 100%; height: 100%;"
          >
            <ais-results>
              <template slot-scope="{ result }">
                <GmapMarker
                  :position="result.position"
                  :clickable="true"
                  :draggable="false"
                  @click="center=result.position"
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
      mapOptions: {
        mapTypeControl: false,
      },
      center: {lat: 10.0, lng: 10.0 },
      markers: [
        {
          position: {lat: 10.0, lng: 10.0}
        },
        {
          position: {lat: 10.0, lng: 12.0}
        },
      ]
    }
  },
  mounted: function(){
    
  }
}
</script>

<style lang="scss" scoped>

  $font-amatic: 'Amatic SC', cursive;
  $font-open: 'Open Sans', sans-serif;

  $blue-grey: #333333;

  h3{
      margin: 0 0 24px;
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
  }

  .event-items{
      font-family: $font-open;
      font-size: 13px;
      background: #F7F7F7;
      padding: 18px 25px;
      border-bottom: 1px solid #D6D9DC;
      cursor: pointer;
  }

  .event-items:hover{
      background: white;
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
