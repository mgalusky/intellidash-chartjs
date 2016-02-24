$(document).ready(function(){

  // Get order data
  var generateChart = {
    gender: function(data){


      var male = 0;
      var female = 0;

      // Create a for() loop to iterate over each order in the data and increment 
      // the respective counter based on the customer's gender.
      // use actual for loop
      for (var i = 0; i < data.length; i++){
        // if gender is male, increase male counter
        if (data[i].person.gender === "F"){
          female += 1;
        } else {
        // else if gender is female, increase female counter
          male += 1;
        }
      };

      var chartData = [
        {
          // Organize the chartData array by passing in the aforementioned counters.
          value: male /* How do we get this value? */,
          color: "rgb(0,127,255)",
          highlight: "rgba(0,127,255,0.5)",
          label: "Male"
        },
        {
          // Organize the chartData array by passing in the aforementioned counters.
          value: female /* How do we get this value? */,
          color: "rgb(255,67,101)",
          highlight: "rgba(255,67,101,0.5)",
          label: "Female"
        }
      ];

      // set up a new pie chart with a jQuery selector
      var ctx = $('.chart.gender canvas').get(0).getContext("2d");
      // pass it the chartData
      var genderPie = new Chart(ctx).Pie(chartData);

    },
    orderTotal: function(data){

      var ranges = {
        '0-14': 0,
        '15-49': 0,
        '50-99': 0,
        '100-199': 0,
        '200-299': 0
      };

      // Create a for() loop and increment the respective range of the current order's total
      for (var i = 0; i < data.length; i++) {
        if (data[i].order.total <= 14){
          ranges['0-14'] += 1;
        } else if (data[i].order.total <= 49){
          ranges['15-49'] += 1;
        } else if (data[i].order.total <= 99){
          ranges['50-99'] += 1;
        } else if (data[i].order.total <= 199){
          ranges['100-199'] += 1;
        } else if (data[i].order.total <= 299){
          ranges['200-299'] += 1;
        }
      };

      var chartData = {
        labels: ['$0-14', '$15-29', '$50-99', '$100-199', '$200-299'] /* What should these labels be? */ ,
        datasets: [
          {
            fillColor: "rgba(0,127,255,0.4)",
            strokeColor: "rgba(0,127,255,0.8)",
            highlightFill: "rgba(0,127,255,0.8)",
            highlightStroke: "rgba(0,127,255,0.4)",
            // ?? is .val() necessary here?
            data: [ranges['0-14'], ranges['15-49'], ranges['50-99'], ranges['100-199'], ranges['200-299']] /* How do we organize this data ? */
          }
        ]
      };

    // set up a new bar chart with a jQuery selector 
    var ctx = $('.chart.order-total canvas').get(0).getContext('2d');
    // and pass it the chartData object
    var orderTotalChart = new Chart(ctx).Bar(chartData);
    },
    orderCategory: function(data){

      var categories = {
        belt: {
          value: 0,
          color: 'rgb(0,127,255)',
          highlight: 'rgba(0,127,255,0.5)',
          label: 'Belt'
        },
        shirt: {
          value: 0,
          color: 'rgb(177,143,207)',
          highlight: 'rgba(177,143,207,0.5)',
          label: 'Shirt'
        },
        pant: {
          value: 0,
          color: 'rgb(255,210,63)',
          highlight: 'rgba(255,210,63,0.5)',
          label: 'Pant'
        },
        footwear: {
          value: 0,
          color: 'rgb(255,67,101)',
          highlight: 'rgba(255,67,101,0.5)',
          label: 'Footwear'
        },
        jewelry: {
          value: 0,
          color: 'rgb(221,96,49)',
          highlight: 'rgba(221,96,49,0.5)',
          label: 'Jewelry'
        },
        jacket: {
          value: 0,
          color: 'rgb(44,246,179)',
          highlight: 'rgba(44,246,179,0.5)',
          label: 'Jacket'
        }
      };

      // Create a for() loop and increment the respective category's 
      // value of the current order's category.
      for (var i = 0; i < data.length; i++) {
        if (data[i].order.category === 'belt'){
          categories['belt']['value'] += 1;
        } else if (data[i].order.category === 'shirt'){
          categories['shirt']['value'] += 1;
        } else if (data[i].order.category === 'pant'){
          categories['pant']['value'] += 1;
        } else if (data[i].order.category === 'footwear'){
          categories['footwear']['value'] += 1;
        } else if (data[i].order.category === 'jewelry'){
          categories['jewelry']['value'] += 1;
        } else categories['jacket']['value'] += 1;
      };

      // using a "for...in" loop to iterate over each key and push 
      // its value (an object) to a new array named chartData
      var chartData = []
      for (key in categories) {
        chartData.push(categories[key]);
      }

      // set up a new pie chart with a jQuery selector and pass it the chartData array
      var ctx = $('.chart.order-category canvas').get(0).getContext('2d');
      var categoryPie = new Chart(ctx).Pie(chartData);

    },
    orderTimeline: function(data){

      // Create an array named quarters and give it 4 values: 0,0,0,0. 
      // Index 0 will represent Q1, index 1 will represent Q2, so on and so forth.
      var quarters = [0, 0, 0, 0];
      

      // Create a for() loop to iterate over each order. Based on the current 
      // order's date, increment one of the indexes in the quarters array.
      for (var i = 0; i < data.length; i++){
        // check if first two digits in date string are a number
        // use split function data[i].order.date.split('/')[0]
        var month = data[i].order.date.split('/')[0];
        if (month <= 3) {
            quarters[0] += 1;
          } else if (month <= 6) {
            quarters[1] += 1;
          } else if (month <= 9) {
            quarters[2] += 1;
          } else {
            quarters[3] += 1;
          }
      }

      var chartData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'] /* What should these labels be? */ ,
        datasets: [
          {
            fillColor: "rgba(0,127,255,0.2)",
            strokeColor: "rgba(0,127,255,1)",
            pointColor: "rgba(0,127,255,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(0,127,255,1)",
            data: quarters
          }
        ]
      };

      var ctx = $('.chart.order-timeline canvas').get(0).getContext('2d');
      var timelineChart = new Chart(ctx).Line(chartData);

    }
  };

  // Delete this comment: Perhaps this is where we should make our GET request?
  $.get('https://www.batchacademy.com/api/wdfne/dummy/intellidash', function(data){

    generateChart.gender(data);

    generateChart.orderTotal(data);

    generateChart.orderCategory(data);

    generateChart.orderTimeline(data);

  });


});
