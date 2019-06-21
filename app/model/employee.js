Ext.define('FB.model.Employee',{
	extend:'Ext.data.Model',
	idProperty:'id',
	fields:[
			{name:'id',type:'string'},
			{name:'firstName',type:'string'},
			{name:'lastName',type:'string'},
			{name:'gender',type:'string'},
			{name:'email',type:'string'}
	]

});