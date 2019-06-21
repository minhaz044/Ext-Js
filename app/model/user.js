Ext.define('FB.model.user',{
	extend: 'Ext.data.Model',
	idProperty:'id',
	fields:[
	{name:'id',type:'string'},
	{name:'userName',type:'string'},
	{name:'password',type:'string'}
	]

});