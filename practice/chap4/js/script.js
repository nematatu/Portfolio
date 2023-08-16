var pieData={
    labels:['Webデザイナー','Webデベロッパー','サーバーエンジニア','営業職'],
    series:[14,9,8,6]
};

var pieOptions={
    width:'100%',
    height:'440px'
};

new Chartist.Pie('.pie-chart',pieData,pieOptions);

var barData={
    labels:['2018年','2019年','2020年'],
    series:[[15,29,20]],
};

var barOptions={
    axisY:{
        offsest:60,
        scaleMinSpace:50,
        labelInterpolationFnc:function(value){
            return value+'人'
        }
    },
    width:'100%',
    height:'400px'
};

new Chartist.Bar('.bar-chart',barData,barOptions);

var ctx=document.getElementById('myChart');
var myDoughnutChart= new Chart(ctx,{
    type:'doughnut',
    data:{
        labels:['いちご','ぶどう','バナナ'],
        datasets:[
            {
                data:[300,100,80],
                backgroundColor:["#f66","#c7e","#fc2"]
            }
        ]
    }
});