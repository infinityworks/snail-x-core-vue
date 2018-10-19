<template>
        <div id="home">
            <div id="home-feature">
                <h1 v-if="!loggedIn"  style="color: whitesmoke">Welcome - please register or login.</h1>
                <div v-if="loggedIn" id="predictions-banner"></div>
                <div v-if="loggedIn" id="predictions"></div>
            </div>

            <div id="timer-feature">
                <h1>"Events Countdown Timer"</h1>
                <div id="timer" class="timer">
                <!--  Timer Component  -->
                    <Timer
                         starttime="Sep 5, 2018 15:37:25"
                         endtime="Sep 8, 2018 16:37:25"
                         trans='{
                         "day":"Day",
                         "hours":"Hours",
                         "minutes":"Minuts",
                         "seconds":"Seconds",
                         "expired":"Event has been expired.",
                         "running":"Till the end of event.",
                         "upcoming":"Till start of event.",
                         "status": {
                            "expired":"Expired",
                            "running":"Running",
                            "upcoming":"Future"
                           }}'
                         >

                    </Timer>
                    <!--  End! Timer Component  -->
                </div>
            </div>
        </div>
</template>


Vue.component('Timer',{
	template: `
  	<div>
      <div class="day">
        <span class="number">{{ days }}</span>
        <div class="format">{{ wordString.day }}</div>
      </div>
      <div class="hour">
        <span class="number">{{ hours }}</span>
        <div class="format">{{ wordString.hours }}</div>
      </div>
      <div class="min">
        <span class="number">{{ minutes }}</span>
        <div class="format">{{ wordString.minutes }}</div>
      </div>
      <div class="sec">
        <span class="number">{{ seconds }}</span>
        <div class="format">{{ wordString.seconds }}</div>
      </div>
      <div class="message">{{ message }}</div>
      <div class="status-tag" :class="statusType">{{ statusText }}</div>
    </div>
  `,
  props: ['starttime','endtime','trans'] ,
  data: function(){
  	return{
    	timer:"",
      wordString: {},
      start: "",
      end: "",
      interval: "",
      days:"",
      minutes:"",
      hours:"",
      seconds:"",
      message:"",
      statusType:"",
      statusText: "",

    };
  },
  created: function () {
        this.wordString = JSON.parse(this.trans);
    },
  mounted(){
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start,this.end);
    this.interval = setInterval(() => {
        this.timerCount(this.start,this.end);
    }, 1000);
  },
  methods: {
    timerCount: function(start,end){
        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = start - now;
        var passTime =  end - now;

        if(distance < 0 && passTime < 0){
            this.message = this.wordString.expired;
            this.statusType = "expired";
            this.statusText = this.wordString.status.expired;
            clearInterval(this.interval);
            return;

        }else if(distance < 0 && passTime > 0){
            this.calcTime(passTime);
            this.message = this.wordString.running;
            this.statusType = "running";
            this.statusText = this.wordString.status.running;

        } else if( distance > 0 && passTime > 0 ){
            this.calcTime(distance);
            this.message = this.wordString.upcoming;
            this.statusType = "upcoming";
            this.statusText = this.wordString.status.upcoming;
        }
    },
    calcTime: function(dist){
      // Time calculations for days, hours, minutes and seconds
        this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    }

  }
});

new Vue({
  el: "#timer",
});



<script>
    import { mapGetters } from "vuex"
    export default {
        name: 'home',

        computed: {
            ...mapGetters([
                'loggedIn'
            ])
        },

        methods: {
            getPredictions() {
                this.$store.dispatch('getPredictions')
                    .then((response) => {
                        if(response.data[0] !== "No Open Round") {
                            if (response.data.message !== "Error. No predictions made") {


                                document.getElementById('predictions-banner').innerHTML = "Your predictions for round " + response.data[0][4] + ":";
                                var printed_table = '<table><tr><th>Race No.</th><th>Snail No.</th><th>Snail Name</th><th>Trainer</th> </tr>';

                                for (var y = 0; y < response.data.length; y++) {
                                    printed_table += '<tr><td>' + (y + 1) + '</td><td>' + response.data[y][1] + '</td><td>' + response.data[y][2] + '</td><td>' + response.data[y][3] + '</td></tr>';
                                }
                                printed_table += '</table>';
                            } else if (response.data.message == "Error. No predictions made") {
                                printed_table = "<center><h3 style='background-color:white; padding:5px;'>You have not made any predictions. To do so <a href='snailx.racing'>Click Here</a></h3></center>"

                            }
                        } else {
                            printed_table = "<center><h3 style='background-color:white; padding:5px;'>No rounds currently open!</h3></center>"

                        }
                        document.getElementById('predictions').innerHTML = printed_table;
                    })
            }
        },

        beforeMount() {
            this.getPredictions()
        }
    }




</script>

<style>
    #home {
        position:fixed;
        top: 40%;
        left: 32%;
    }
    /*--- prediction banner styling ---*/

    #predictions-banner{
        background-color: white;
        width: 35%;
        margin-bottom: 5%;
        margin-left: 17.5%;
        text-align: center;
    }
    /*--- prediction banner styling end ---*/

    /*--- User predictions table styling ---*/

    table {
        width:70%;
        background-color:white;
    }
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    th, td {
        padding: 15px;
        text-align: left;
    }
    /*--- User predictions table styling end ---*/
</style>
