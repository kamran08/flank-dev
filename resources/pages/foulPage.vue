<template>
<div>
     <!-- <div class="full">
         <GChart
            type="LineChart"
            :data="chartData"
            :options="chartOptions" 
            class="full"
            />
     </div>

     <Button @click="isShareModal=true">
         Modal on
     </Button> -->
    <link href="https://widget.goflank.com/flank-review/css/app.css" rel=stylesheet>
    <forehand-rank lid=60></forehand-rank>
    <script src="https://widget.goflank.com/flank-review/js/app.js"></script>

      <!-- <div>
        <div>
        <strong>Screen Size:</strong>
        </div>
        <div v-if="$resize && $mq.above(992)">Desktop</div>
        <div v-else>Tablet and Below</div>
    </div> --> 
</div>
  
</template>

<script>
// import VueGoogleCharts from 'vue-google-charts'
// Vue.use(VueGoogleCharts)
import { GChart } from 'vue-google-charts'
export default {
    
    data(){
        return{
            chartData: [
                ["HealthScore",'HealthScore'],
                [ 5,5],
            ],
            chartOptions: {
               
                 width: 400,
                  height: 400,
                colors: ['#000',],
                backgroundColor:'#fff',
                vAxis:{
                     maxValue: 100,
                     minValue: 1,
                    
                    textStyle:{
                        color: '#000',
                    }
                },
                hAxis:{
                     maxValue: 1,
                     minValue: 1,
                    // format: '#%',
                     textStyle:{
                        color: '#fff',
                    },
                },
                trendlines: { 0: {} } ,

            },
            
             // chartData: [
            //     ['Days', 'Ratings'],
            //     [1, 5],
            //     [2, 4],
            //     [3, 3],
            //     [4, 5],
            //     [5, 4],
            //     [6, 2],
            //     [7, 5],
            // ],
            // chartOptions: {
            //     chart: {
            //         title: 'Company Performance',
            //         subtitle: 'Sales, Expenses, and Profit: 2014-2017',
            //     },
            //     width: 300,
            //     height: 300,
            //     colors: ['#e63131', '#e46a6a'],
            //     backgroundColor:'transparent',
            //     vAxis:{
                    
            //         minValue:0,
            //         maxValue:5,
            //         gridlines: {
            //             color: '#5C5C5C',
            //             count: 5,
            //         },
            //         minorGridlines: {
            //             color: '#5C5C5C',

            //         },
            //         textStyle:{
            //             color: '#FFF',
            //         }
            //     },
            //     hAxis:{
            //         // maxValue: 1,
            //         // format: '#%',
            //         title:'Days',
            //         titleTextStyle: {
            //             color: '#FFF'
            //         },
            //         type:'string',
            //          textStyle:{
            //             color: '#FFF',
            //         },
            //         gridlines: {
            //             color: '#5C5C5C',
            //             count: 7,
            //         },
                   
                   
            //     },
            //     trendlines: { 0: {} } ,
            // },
        }
    }
}
</script>

<style>

       
</style>
