Ext.define('FB.view.student.studentListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.studentListController',

    onAddClick: function (sender, record) {

        var studentStore = this.getViewModel().getStore('StudentListStore');

        //adding dummy student
        var studentModel = Ext.create('FB.model.Student');
        studentModel.set("name", "Name");
        studentModel.set("email", "Email");
        studentModel.set("phone", "0185.....");
        studentStore.insert(0, studentModel);
        var studentGrid = this.getView();
        studentGrid.editingPlugin.startEdit(studentModel, 1);
       
    },

    onLoadClick: function (sender, record) {
        var studentStore = this.getView().getStore();
        studentStore.load();
    },

    onRemoveClick: function (sender, record) {
        var studentGrid = this.getView();
        var studentStore = studentGrid.getStore();

        //delete selected rows if selModel is checkboxmodel
        var selectedRows = studentGrid.getSelectionModel().getSelection();

        studentStore.remove(selectedRows);
    },

    onSelectionChange: function (sender, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemoveStudent');
        if(record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    }
});