Template.parametersList.onRendered(function() {
   $.getScript("https://widget.cloudinary.com/v2.0/global/all.js");
   $.getScript("https://media-library.cloudinary.com/global/all.js");
});

Template.parametersList.helpers({
  parametersClass: function() {
    return classes.findOne({_id: Session.get('classId')});
  },
  selEval: function(e) {
    if (classes.findOne({_id:Session.get('classId')}).evaluation==e) {
      return "selected"
    } else {
      return "";
    }
  },
  av: function(visible) {
    if (visible) {
      return "checked"
    }
  }
});

Template.parametersList.events({
  /*'change #studentImg': function(event) {
    event.preventDefault();
    Meteor.call('studentImgUpdate', Session.get('classId'), event.currentTarget.value);
  },
  'change #groupImg': function(event) {
    event.preventDefault();
    Meteor.call('groupImgUpdate', Session.get('classId'), event.currentTarget.value);
  },*/
  'change #iniHP': function(event) {
    event.preventDefault();
    Meteor.call('iniHPUpdate', Session.get('classId'), parseInt(event.currentTarget.value));
  },
  'change #perXP': function(event) {
    event.preventDefault();
    Meteor.call('perXPUpdate', Session.get('classId'), parseInt(event.currentTarget.value));
  },
  'change #perBG': function(event) {
    event.preventDefault();
    Meteor.call('perBGUpdate', Session.get('classId'), parseInt(event.currentTarget.value));
  },
  'change #perMissions': function(event) {
    event.preventDefault();
    Meteor.call('perMissionsUpdate', Session.get('classId'), parseInt(event.currentTarget.value));
  },
  'change #perChallenges': function(event) {
    event.preventDefault();
    Meteor.call('perChallengesUpdate', Session.get('classId'), parseInt(event.currentTarget.value));
  },
  'change #perHP': function(event) {
    event.preventDefault();
    Meteor.call('perHPUpdate', Session.get('classId'), parseInt(event.currentTarget.value));
  },
  'change #hourXP': function(event) {
    event.preventDefault();
    Meteor.call('hourXPUpdate', Session.get('classId'), parseInt(event.currentTarget.value));
  },
  'click #studentImg': function(event) {
    event.preventDefault();
    cloudinary.openUploadWidget({ cloudName: 'myclassgame', uploadPreset: 'myclassgame',  googleApiKey: 'AIzaSyBqyxpnFhDv1nOkTszttyDSXn2HPpznhZI'}, function(error, result){
      //console.log(result);
      if (result.event=="success"){
        $("#studentImg").val(result.info.url);
        Meteor.call('studentImgUpdate', Session.get('classId'), result.info.url);
      }
    });
  },
  'click #groupImg': function(event) {
    event.preventDefault();
    cloudinary.openUploadWidget({ cloudName: 'myclassgame', uploadPreset: 'myclassgame',  googleApiKey: 'AIzaSyBqyxpnFhDv1nOkTszttyDSXn2HPpznhZI'}, function(error, result){
      //console.log(result);
      if (result.event=="success"){
        $("#groupImg").val(result.info.url);
        Meteor.call('groupImgUpdate', Session.get('classId'), result.info.url);
      }
    });
  },
  'click #backImg': function(event) {
    event.preventDefault();
    cloudinary.openUploadWidget({ cloudName: 'myclassgame', uploadPreset: 'myclassgame',  googleApiKey: 'AIzaSyBqyxpnFhDv1nOkTszttyDSXn2HPpznhZI'}, function(error, result){
      //console.log(result);
      if (result.event=="success"){
        $("#backImg").val(result.info.url);
        Meteor.call('backImgUpdate', Session.get('classId'), result.info.url);
      }
    });
  },
  'change select#evaluacion': function(event) {
    event.preventDefault();
    Session.setPersistent('evaluation', $(event.target).val());
    Meteor.call('changeEvaluation', Session.get('classId'),$(event.target).val());
  },
  'change #avatarVisible': function(event) {
    event.preventDefault();
    Meteor.call('avatarVisibleChange', Session.get('classId'), event.currentTarget.checked);
  }
});
