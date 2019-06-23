Ext.define('FB.view.student.routineViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.routineviewmodel',
    stores: {
        batchListStore: {
          model:'FB.model.batch',

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
                url: '/api/batch',
            }
        },
        courseListStore: {
            autoSync: true,
            proxy:
            {
                type: 'rest',
                reader:
                {
                    rootProperty: 'data',
                    type: 'json'
                },
                url: '/api/course',
            }
        },
        teacherListStore: {
           
            autoSync: true,
            proxy:
            {
                type: 'rest',
                reader:
                {
                    rootProperty: 'data',
                    type: 'json'
                },
                url: '/api/teacher',
            }
        }

    }
});