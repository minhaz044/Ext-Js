Ext.define('FB.store.batchStore', {
    extend: 'Ext.data.Store',
    alias: 'store.batchStore',
    storeId: 'batchStore',
    fields: [
        'id', 'name'
    ],
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
});