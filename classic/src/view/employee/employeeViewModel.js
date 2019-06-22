Ext.define('FB.view.student.employeeViewModel',{
	extend:'Ext.app.ViewModel',
    alias: 'viewmodel.employeeViewModel',
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