Ext.define('FB.view.student.StudentViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.studentviewmodel',
    stores: {
        StudentListStore: {
            model:'FB.model.Student',
            autoLoad: true,
            autoSync: true,
            proxy:
            {
                type: 'rest',
                reader:
                {
                    rootProperty: 'data',
                    type: 'json'
                },
                url: '/api/persons',
            }
        }
/*        StudentListPagingStore: {
            model: 'School.model.Student',
            autoLoad: true,
            pageSize: 5,
            proxy:
           {
               type: 'rest',
               reader:
               {
                   rootProperty: 'data',
                   type: 'json',
                   totalProperty: 'TotalCount'
               },
               url: '/api/student'
           }
        }*/

    }
});