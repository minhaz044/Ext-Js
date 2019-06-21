Ext.define('FB.view.student.employeeViewModel',{
	extend:'FB.view.student.employeeViewModel',
    alias: 'viewmodel.employeeViewModel',
    	xtype:'employeeViewModel',
    stores:{
    	StudentListStore:{
    		model:'FB.model.Employee',
    		autoLoad:true,
    		autoSync:true,
            proxy:
            {
                type: 'rest',
                reader:
                {
                    rootProperty: 'data',
                    type: 'json'
                },
                url: '/api/employee',
            }

    	}
    }
});