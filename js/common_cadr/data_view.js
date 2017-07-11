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
	 
	//渲染表格 
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
					radius: ['30%', '68%'],
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
