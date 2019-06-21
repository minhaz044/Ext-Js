Ext.define('FB.view.employee.employee',{
	extend:'Ext.form.Panel',
	xtype:'employee',
	title:'New Employee',
	controller: 'employeeController',
	renderTo:Ext.getBody(),
   style: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10%'
    },
	height:300,
	width:600,



	items:[{
		xtype:'form',
		style:'margin:5% auto 0% 20%;',
		reference: 'form',
		items:[{
			xtype:'textfield',
			fieldLabel:'FirstName:',
			name:'firstname'
		},{
			xtype:'textfield',
			fieldLabel:'LastName:',
			name:'lastname'
		},{
			xtype:'textfield',
			fieldLabel:'Gender:',
			name:'gender'
		},{
			xtype:'textfield',
			fieldLabel:'E-mail:',
			name:'email'
		}]
	},{
		buttonAlign: 'right',
		style:'background-color:white;',
		buttons:[{
			xtype:'button',
			text:'Cancel'
		},{
			xtype:'button',
			text:'Submit',
			style:'marginLeft:auto;marginRight:auto;',
			formBind: true,
			disabled: false,
           	listeners: {
                click: 'onSubmitClick'
            	}
		}]
	}]

});


