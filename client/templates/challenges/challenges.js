Template.challenges.helpers({
  challenge: function() {
    return challenges.find({classId: Session.get('classId')});
  },
  moc: function(type) {
    if (type == "Reto")
    {
      return "has-error";
    } else {
      return "has-success"
    }
  },
});

Template.challenges.events({
  'submit form': function(event) {
    event.preventDefault();
    //alert($(event.target).find('[name=MoC]').val())
    var chal = {
      classId: Session.get('classId'),
      type: $(event.target).find('[name=MoC]').val(),
      IoG: $(event.target).find('[name=IoG]').val(),
      chalName: $(event.target).find('[name=chalName]').val(),
      chalDesc: $(event.target).find('[name=chalDesc]').val(),
      createdOn: new Date()
    };
    Meteor.call('chalInsert', chal);
  },
  'click .notas': function(event) {
    event.preventDefault();
    Session.set('chalId',event.target.name)
    Modal.show('notes');
  },
  'change .inputGroup': function(event) {
    event.preventDefault();
    if (event.currentTarget.value )
    {
      if (event.target.id=="chalName")
      {
        Meteor.call('chalUpdateName', event.target.name, event.currentTarget.value);
      } else {
        Meteor.call('chalUpdateDesc', event.target.name, event.currentTarget.value);
      }
    } else {
      Meteor.call('chalDelete',selectMoC);
    }
  },
  'change #selectMoC': function(event) {
    event.preventDefault();
    if (event.currentTarget.value == "Misión"){
      $("#selectIoG").val("Grupal");
    } else {
      $("#selectIoG").val("Individual");
    };
  }
});
