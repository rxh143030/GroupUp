<template>
    <div class="tray">
        <ais-index
                app-id="1H6B17Q5JU"
                api-key="13ceede8b91a005864e9f7743b96e9c1"
                index-name="prod_GROUP"
            >

            <div class="tray-head">
                <h3>Search</h3>

                <div @keyup.enter="searchSubmit()"  class="search-container">
                    
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
        </ais-index>

        <div class="add-event-wrapper">
            
        </div>

    </div>
</template>

<script>
export default {
    data: function(){
        return{
            searchInput: '',
        }
    },
    methods:{
        eventClick: function(event){
            console.log(event);
        },
        searchSubmit: function(){
            console.log(`submitting ${this.searchInput}`)
        }
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


</style>

