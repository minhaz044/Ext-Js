Ext.define('FB.model.Student', {
    extend: 'Ext.data.Model',
    idProperty: 'Id',

    schema: {
        namespace: 'School.model'
    },
    fields: [
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'phone', type: 'string' } 
    ]
});