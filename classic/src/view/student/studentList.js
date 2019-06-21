Ext.define('FB.view.student.studentList', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentList',

    title: 'Student List',
        requires: [
        'FB.view.student.StudentViewModel'
    ],
    controller: 'studentListController',
    viewModel: { type: 'studentviewmodel' },
    reference:'studentlistgrid',
    selType: 'rowmodel',
    selModel:
    {
        mode: 'SINGLE'
    },
    viewConfig:
    {
        stripeRows: true
    },
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    bind: {
        store: '{StudentListStore}'
    },
              columns: [{
                text: "Name",
                dataIndex: 'name',
                width: 45
            },
            {
                text: "Email",
                flex: 1,
                dataIndex: 'email',
                editor:
                {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                }
            },
            {
                text: "Phone",
                flex: 1,
                dataIndex: 'phone',
                editor:
                {
                    allowBlank: true
                }
            }],
                      tbar: [{
                text: 'Add Student',
                iconCls: 'fa-plus',
                handler: 'onAddClick'
            }, {
                itemId: 'removeStudent',
                text: 'Remove Student',
                iconCls: 'fa-times',
                reference: 'btnRemoveStudent',
                handler: 'onRemoveClick',
                disabled: true
            }],
            plugins: [Ext.create('Ext.grid.plugin.RowEditing',
            {
                clicksToEdit: 2
            })],
            initComponent:function () {
                this.callParent(arguments);
            }

    // initComponent: function () {
    //     Ext.apply(this,
    //     {
    //         plugins: [Ext.create('Ext.grid.plugin.RowEditing',
    //         {
    //             clicksToEdit: 2
    //         })],

    //         columns: [{
    //             text: "Name",
    //             dataIndex: 'name',
    //             width: 45
    //         },
    //         {
    //             text: "Email",
    //             flex: 1,
    //             dataIndex: 'email',
    //             editor:
    //             {
    //                 // defaults to textfield if no xtype is supplied
    //                 allowBlank: false
    //             }
    //         },
    //         {
    //             text: "Phone",
    //             flex: 1,
    //             dataIndex: 'phone',
    //             editor:
    //             {
    //                 allowBlank: true
    //             }
    //         }],
    //         tbar: [{
    //             text: 'Add Student',
    //             iconCls: 'fa-plus',
    //             handler: 'onAddClick'
    //         }, {
    //             itemId: 'removeStudent',
    //             text: 'Remove Student',
    //             iconCls: 'fa-times',
    //             reference: 'btnRemoveStudent',
    //             handler: 'onRemoveClick',
    //             disabled: true
    //         }]


    //     });

    //     this.callParent(arguments);
    // }
});