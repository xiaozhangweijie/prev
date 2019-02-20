require(["./js/config.js"],function(){
	require(["mui"],function(mui){
		init();
		function init(){
				mui('.mui-scroll-wrapper').scroll({
					deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
					});
					
			mui.ajax("/api/list",{
					dataType:"json",
					type:"get",
				success:function(data){
					if(data.code==0){
						render(data.data);
					}	
				}
					});
		}
		function render(data){
			var html="";
			data.forEach(function(v,i){
				html+=`   <li class="mui-table-view-cell">${v.name}
		  <div id="">
		  	<button type="button" class="mui-btn mui-btn-primary">查看详情</button>
		  	<button type="button" class="mui-btn mui-btn-danger">删除</button>
		  </div>
		  </li>`;
			})
			document.querySelector(".mui-table-view").innerHTML=html;
		}
	})
})