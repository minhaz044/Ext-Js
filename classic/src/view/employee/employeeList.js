Ext.define('FB.view.employee.employeeList',{
	extend:'Ext.grid.Panel',
	xtype:'employeeList',
	
	title:'Employee List',
	model:'FB.model.Student',
	controller: 'employeeController',
	viewModel:{type:'employeeViewModel'},
	bind:{
		store:'{StudentListStore}'
	},
	columns:[
			{Text:'Id',name:'id',dataIndex:'id'},
			{Text:'First Name',name:'firstName',dataIndex:'firstName'},
			{Text:'Last Name',name:'lastName',dataIndex:'lastName'},
			{Text:'Gender',name:'gender',dataIndex:'gender'},
			{Text:'E-mail',name:'email',dataIndex:'email'}
		],
		listeners:{
			itemdblclick:'onDoubleClick',
			itemClick:'onSingleClick'
		}

});



