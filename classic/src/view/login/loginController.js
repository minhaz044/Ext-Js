Ext.define('FB.view.login.loginController',{
	extend: 'Ext.app.ViewController',
	alias:'controller.loginController',
	    requires: [
        'FB.view.main.Main',
    ],
	onLoginClick:function(){
		//localStorage.setItem("islogedin",true);
		
		var value=this.getView().getForm().getValues();
		var loginFormView=this.getView();
		var formData={
		        "userName":value['userName'],
		        "password":value['password']
		    }
		//alert(value['userName'] + value['password']);
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

