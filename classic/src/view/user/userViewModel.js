Ext.define('FB.view.user.userViewModel',{
	extend:'Ext.app.ViewModel',
	alias:'viewmodel.userviewmodel',
	xtype:'userviewmodel',

	stores:{
		userList:{
			model:'FB.model.user',
			autoLoad: true,
            autoSync: true,
			proxy:{
				type:'rest',
				url:'/api/user'
			}
		}
	}
});