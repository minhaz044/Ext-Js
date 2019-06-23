Ext.define('FB.view.routine.routineController',{
	extend: 'Ext.app.ViewController',
	alias:'controller.routineController',
		    requires: [
        'FB.view.main.Main',
    ],
	changeBatchBtn:function(ele, newValue, oldValue){
		
		this.getViewModel().getStore('courseListStore').load();

		// Ext.Ajax.request({
		//     url: '/api/login',
		//     method: 'POST',          
		//     params:{
		//     	ajax_req: Ext.util.JSON.encode(formData)
		//     },
		//     success:function(response){
		//     	var obj = Ext.decode(response.responseText);
		//     	if(obj){
		//     		alert("Data Added" );
		//     		form.reset();
		//     	}else{
		// 			Ext.MessageBox.alert('Login Failed', 'Please4 Bla bla bla', function(){
  //         			return true;
  //    			});
		// 		}
		// 	},                                    
		//     failure: function(){
		//     	console.log('failure');
		// 	}
		// });
	},
	changeCourseBtn:function(ele, newValue, oldValue){
		
		this.getViewModel().getStore('teacherListStore').load();

		// Ext.Ajax.request({
		//     url: '/api/login',
		//     method: 'POST',          
		//     params:{
		//     	ajax_req: Ext.util.JSON.encode(formData)
		//     },
		//     success:function(response){
		//     	var obj = Ext.decode(response.responseText);
		//     	if(obj){
		//     		alert("Data Added" );
		//     		form.reset();
		//     	}else{
		// 			Ext.MessageBox.alert('Login Failed', 'Please4 Bla bla bla', function(){
  //         			return true;
  //    			});
		// 		}
		// 	},                                    
		//     failure: function(){
		//     	console.log('failure');
		// 	}
		// });
	}

});