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
	
var myChart = echarts.init(document.getElementById('eday-eva'));
var  option = {
	   title: {
        text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);