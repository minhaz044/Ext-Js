Ext.define('FB.view.employee.employeeController',{
	extend: 'Ext.app.ViewController',
	alias:'controller.employeeController',
		    requires: [
        'FB.view.main.Main',
    ],
	onSubmitClick:function(){
		//var form=this.getView().getForm().getValues();
		 var form=this.getView().getForm().getValues();
		 var formData={
		 	
		 }
		Ext.Ajax.request({
		    url: '/api/login',
		    method: 'POST',          
		    params:{
		    	ajax_req: Ext.util.JSON.encode(formData)
		    },
		    success:function(response){
		    	var obj = Ext.decode(response.responseText);
		    	if(obj){
		    		alert("This is Our Response"+obj['phone']);
		    		Ext.create({xtype:'app-main'});
		    		loginFormView.close();
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