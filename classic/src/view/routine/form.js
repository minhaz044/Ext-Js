Ext.define('FB.view.routine.form',{
	extend:'Ext.form.Panel',
	xtype:'routine',
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
		controller: 'routineController',
		viewModel:{type:'routineviewmodel'},
		items:[{
			xtype:'combobox',
			fieldLabel: 'Choose Batch',
			//viewModel:{type:'routineviewmodel'},
			allowBlank:false,
			bind:{
				store:'{batchListStore}'
			},
    		queryMode: 'local',
    		displayField: 'name',
    		valueField: 'id',
    		listeners:{
    			change:'changeBatchBtn'
    		}
		},{
			xtype:'combobox',
			fieldLabel: 'Choose Course',
			//viewModel:{type:'routineviewmodel'},
			allowBlank:false,
			bind:{
				store:'{courseListStore}'
			},
    		queryMode: 'local',
    		displayField: 'name',
    		valueField: 'id',
    		listeners:{
    			change:'changeCourseBtn'
    		}
		},{
			xtype:'combobox',
			fieldLabel: 'Choose Teacher',
			//viewModel:{type:'routineviewmodel'},
			allowBlank:false,
			bind:{
				store:'{teacherListStore}'
			},
    		queryMode: 'local',
    		displayField: 'name',
    		valueField: 'id'   		
		}]
	},{
		buttonAlign: 'right',
		style:'background-color:white;marginLeft:auto;marginRight:auto;',
		width:250,
		buttons:[{
			xtype:'button',
			text:'Reset'
		},{
			xtype:'button',
			text:'Submit',
			
			formBind: true,
			disabled: false,
           	listeners: {
                click: 'onSubmitClick'
            	}
		}]
	}]

});


