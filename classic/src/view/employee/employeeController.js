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
	},
	onDoubleClick:function(dataview, record, item, index, e) {
		//alert(Object.keys(record.data) +"Data:"+record.data['id'] );
		Ext.create('FB.view.employee.employee');
		Ext.create('Ext.window.Window', {
    	title: 'Hello',
    	height: 400,
    	width: 700,
    	layout: 'fit',
    	items: {  
        	xtype: 'employee',               
    		}
		}).show();
	}


});