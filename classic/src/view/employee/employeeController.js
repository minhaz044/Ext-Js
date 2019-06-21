Ext.define('FB.view.employee.employeeController',{
	extend: 'Ext.app.ViewController',
	alias:'controller.employeeController',
		    requires: [
        'FB.view.main.Main',
    ],
	onSubmitClick:function(){
		//var form=this.getView().getForm().getValues();
		 var form=this.getView().getForm();
		 var formData=form.getValues();
		Ext.Ajax.request({
		    url: '/api/login',
		    method: 'POST',          
		    params:{
		    	ajax_req: Ext.util.JSON.encode(formData)
		    },
		    success:function(response){
		    	var obj = Ext.decode(response.responseText);
		    	if(obj){
		    		alert("Data Added" );
		    		form.reset();
		    	}else{
					Ext.MessageBox.alert('Login Failed', 'Please4 Bla bla bla', function(){
          			return true;
     			});
				}
			},                                    
		    failure: function(){
		    	console.log('failure');
			}
		});
	}


});