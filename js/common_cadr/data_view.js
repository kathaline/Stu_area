/****
特殊模块，数据视图渲染
****/ 

define(function(require) {
var datas={
	bg_data:{
		tit:"使用比例",
		data:{"未使用":[4,"#f0ad4e"],"已使用":[14,"#31b0d5"]}
	},
};

xrzb('school-use',datas.bg_data.data,datas.bg_data.tit);

function xrzb(id,datas,tit){
	var labels = new Array();
	var values = new Array();
	for(var key in datas){
		labels.push(key);
		values.push({value:datas[key][0],name:key,itemStyle:{normal:{color:datas[key][1]}}});
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var myChart = echarts.init(document.getElementById(id));
		option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
			  
        		bottom:5,
				data:labels
			},
			series: [
				{
					name:tit,
					type:'pie',
					radius: ['22%', '58%'],
					avoidLabelOverlap: false,
					startAngle:20,
					center: ['50%', '38%'],
					label:{normal:{formatter:"{b}\n{d}%",textStyle:{fontSize:12},show:true}},
					labelLine:{normal:{smooth:false,length:8,length2:4,show:true}},
					data:values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}

});

(function (){
var dom = document.getElementById("school-eva");
  var myChart = echarts.init(dom);
  var app = {};
  option = null;
  option = {
  title: {
      text: ''
  },
  tooltip : {
      trigger: 'axis'
  },
  legend: {
      x:'70%',
      data:['评价次数']
  },
  toolbox: {
      feature: {
          saveAsImage: {}
      }
  },
  grid: {
      left: '2%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis : [
      {
          type : 'category',
          boundaryGap : false,
          data : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
      }
  ],
  yAxis : [
      {
          type : 'value'
      }
  ],
  series : [
      {
          name:'评价次数',
          type:'line',
          stack: '总量',
		  itemStyle:{normal: {color:'#5bc0de'}},
          label: {
              normal: {
                  show: true,
                  position: 'top'
              }
          },
          areaStyle: {normal: {}},
          data:[1,0, 9, 14,6,0,7,8,5,6,11,12,10,4,15,8,7,5,3,2,8,14,11,5,4,1,3,1,8,15,7]
      }
  ]
  };
  ;
 // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
})();
