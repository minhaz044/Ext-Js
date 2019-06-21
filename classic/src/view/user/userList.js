Ext.define('FB.view.user.userList',{
	extend:'Ext.grid.Panel',
	xtype:'user',
	title:'My User',
	renderTo:Ext.getBody(),
	viewModel:{type:'userviewmodel'},
	bind:{
		store:'{userList}'
	},
	columns:[{
		name:'userid',
		text:'User Id',
		dataIndex:'id'
	},{
		name:'username',
		text:'UserName',
		dataIndex:'userName'
	},{
		name:'password',
		text:'Password',
		dataIndex:'password'
	}]
});









/*

Ext.define('FB.view.user.user', {
    extend: 'Ext.grid.Panel',
    xtype: 'user',
    requires: [
        'Ext.grid.Panel',
    ],

    title: 'Use',

items: 
     {
        xtype: 'form',
        reference: 'form',
        title:'SEARCH',
        items: [
        {
            xtype: 'textfield',
            name: 'Enter ID',
            fieldLabel: 'Username',
            allowBlank: false,
            width:300,
            labelStyle: 'color: #ffffff ; ',

        }
        ],
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
*/