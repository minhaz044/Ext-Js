Ext.define('FB.view.login.login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    requires: [
        'FB.view.login.loginController',
        'Ext.panel.Panel'
    ],
    plugins: 'viewport',
    controller: 'loginController',
   	bodyStyle:" background-image:url(https://www.xoticpc.com/media/wysiwyg/landingpages/wallpapers/wallpapers_retro_city_1366x768.jpg);background-repeat: no-repeat;background-attachment: fixed;background-position: center; background-size: auto", 
   	height:800,
    items: {
        xtype: 'form',
        reference: 'form',
        title:'Login Form',
        height:300,
        width:500,
        bodyStyle:"background:linear-gradient(rgba(50, 50, 50, 0.8), rgba(50, 50, 50, 0.8));padding:30px;",
        style:'margin-left:400px;margin-top:150px;padding-left:8 0px;',
        items: [{
            xtype: 'textfield',
            name: 'userName',
            fieldLabel: 'Username',
            allowBlank: false,
            width:300,
            labelStyle: 'color: #ffffff ; ',

        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            width:300,
            fieldLabel: 'Password',
            allowBlank: false,
            labelStyle:'color:#ffffff;'

        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password',
           	fieldStyle:'color:#ffffff'
        }],
        buttons:[{
        	xtype:'button',
            text: 'Login',
         	formBind:true,
         	margin: {top:0, left:0, right: 20, bottom:0},
            	listeners: {
                click: 'onLoginClick'
            	}
        }]
    }
});




/*
Ext.define('ReviewMe.view.login.login',{
	alies:'view.login'
	extends:'Ext.window.Window',
	xtype:'login',
	requires:[
		'ReviewMe.view.login.loginController',
		'Ext.form.Panel'
	],
	controller:'login',
	title:'Login Page',
	bodyPadding:10,
	closable:false,
	autoShow:true,
	items:{
		xtype:'form',
		reference:'form',
		items:[{
			xtype:'textfield',
			name:'username',
			fieldLabel:'Username',
			allowBlank:false
		},{
			xtype:'textfield',
			name:'password',
			fieldLabel:'Password',
			inputType:'password',
			allowBlank:false	
		},{
			xtype:'displayfield',
			hideEmptyLabel:false,
			value:'Enter pass'
		}],
		button:[{
			 text:'Login',
			 formBind:true,
			 listeners:[{
			 	click:'onLoginClick'
			 }]
		}]
	}

});
*/
