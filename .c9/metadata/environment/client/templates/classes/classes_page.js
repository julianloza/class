{"changed":true,"filter":false,"title":"classes_page.js","tooltip":"/client/templates/classes/classes_page.js","value":"Template.classesPage.onRendered(function() {\n  Session.set('className', \"\");\n  Session.set('userType', \"teacher\");\n  Meteor.call('userTypeInsert', \"teacher\");\n  handleClientLoad();\n  /*t=[];\n  if( typeof Meteor.user().classesTeacher == \"undefined\") {\n    classes.find({'teacherId': Meteor.userId()}).forEach( function(c){\n      t.push(c._id);\n    });\n    Meteor.call('classesTeacher',t);\n  }*/\n  try {\n    Session.set(\"emailUser\",Meteor.users.findOne({_id: Meteor.userId()}).emails[0].address);\n  }\n  catch(err) {\n    Session.set(\"emailUser\",Meteor.users.findOne({_id: Meteor.userId()}).services.google.email);\n  }\n  //Session.set('userType',Meteor.users.findOne(Meteor.user()).userType); \n});\n\nTemplate.classesPage.helpers({\n  classesStudent: function() {\n    c=Meteor.users.findOne({_id:Meteor.userId()}).classes;\n    return classes.find({\"_id\": { \"$in\": c }});\n  },\n  classesTeacher: function() {\n    c=Meteor.users.findOne({'_id':Meteor.userId()}).classesTeacher;\n    return classes.find({\"_id\": { \"$in\": c }});\n  },\n  classesParent: function() {\n    c=Meteor.users.findOne({_id:Meteor.userId()}).classesParent;\n    return classes.find({\"_id\": { \"$in\": c }});\n  },\n  classe: function() {\n    var teacherId = Meteor.user();\n    var userType=Session.get('userType');\n    if ( userType == \"teacher\") {\n      return classes.find({teacherId: teacherId._id, stored: false }, {sort: {submitted: -1}});\n    } else {\n      c=Meteor.users.find({_id:Meteor.userId()}).fetch()[0].classes;\n      //c=Meteor.users.find({_id:Meteor.userId()});\n      return classes.find({\"_id\": { \"$in\": c }, stored: false });\n      //return classes.find({_id: teacherId._id}, {sort: {submitted: -1}});\n    }\n  },\n  stored2: function() {\n    var teacherId = Meteor.user();\n    var userType=Session.get('userType');\n    if ( userType == \"teacher\") {\n      return classes.find({teacherId: teacherId._id, stored: true }, {sort: {submitted: -1}});\n    } else {\n      c=Meteor.users.find({_id:Meteor.userId()}).fetch()[0].classes;\n      //c=Meteor.users.find({_id:Meteor.userId()});\n      return classes.find({\"_id\": { \"$in\": c }, stored: true });\n      //return classes.find({_id: teacherId._id}, {sort: {submitted: -1}});\n    }\n  },\n  types: function() {\n    var teacherId = Meteor.user();\n    var userType=Session.get('userType');\n    var tipos=mcgParameters.findOne().typeClasses;\n    return classes.find({'_id': { \"$in\": tipos } });\n  },\n  teacher: function() {\n    if (Session.get('userType')==\"teacher\") {\n     return true;\n    } else {\n     return false;\n    };\n  },\n  cName: function() {\n    var cName=Session.get('className');\n    if ( cName == \"\") {\n      return true;\n    } else {\n      return false;\n    }\n  },\n  classImage: function() {\n    avatar=this.groupImg;\n    if (avatar) {\n      if (avatar.substring(0, 4)==\"http\") {\n        return avatar;\n      } else {\n        return images.findOne({_id: avatar}).image_url;\n      }\n    } else {\n      return \"https://res.cloudinary.com/myclassgame/image/upload/v1543412151/proves/grupo.png\";\n    }\n  }\n});\nTemplate.classesPage.events({\n  'click .btn-class': function(event) {\n    event.preventDefault();\n    Session.set('classId', this._id);\n    Session.set('className', this.className);\n    Session.setPersistent('navItem', \"Students\");\n    Session.setPersistent('sogBtn',\"students\");\n    Session.setPersistent('golBtn',\"grid\");\n    Session.set('studentSelected', false);\n    Session.setPersistent('evaluation',classes.findOne({_id:Session.get('classId')}).evaluation);\n    backImg=classes.findOne({\"_id\": Session.get('classId')}).backImg;\n    $(\"#fondo\").css(\"background-image\", \"url(\"+backImg+\")\");\n    Session.set('orderStudents', \"XP\");\n    Session.set('invertOrder', \"checked\");\n    if ( $(event.currentTarget).hasClass(\"classAsTeacher\") ) {\n      Meteor.call('userTypeInsert', \"teacher\");\n      Session.set('userType','teacher');\n    }\n    if ( $(event.currentTarget).hasClass(\"classAsStudent\") ) {\n      Meteor.call('userTypeInsert', \"student\");\n      Session.set('userType','student');\n    }\n    if ( $(event.currentTarget).hasClass(\"classAsParent\") ) {\n      Meteor.call('userTypeInsert', \"parent\");\n      Session.set('userType','parent');\n    }\n    Router.go('myNav',{_id:Session.get('classId')});\n  },\n  'click .btn-double-class': function(event) {\n    event.preventDefault();\n    Session.set('classId', event.target.id);\n    cId=Session.get('classId');\n    /*Session.set('className', event.target.name);\n    Session.setPersistent('navItem', \"Students\");\n    Session.setPersistent('sogBtn',\"students\");\n    Session.setPersistent('golBtn',\"grid\");\n    Session.set('studentSelected', false);\n    Session.setPersistent('evaluation',classes.findOne({_id:Session.get('classId')}).evaluation);*/\n    var c = classes.findOne({'_id': event.target.id});\n    delete c._id;\n    c.className=\"Copia_\" + event.target.name;\n    Meteor.call('classDuplicate',c,cId);\n    /*students.find({'classId': cId}).forEach(function(student){\n      var newStudent = student;\n      delete student._id;\n      student.classId=Session.get('classId');\n      Meteor.call('studentInsert',student);\n    });\n    Router.go('myNav');*/\n  },\n  'click .btn-type': function(event) {\n    event.preventDefault();\n    Session.set('classId', this._id);\n    cId=Session.get('classId');\n    /*Session.set('className', event.target.name);\n    Session.setPersistent('navItem', \"Students\");\n    Session.setPersistent('sogBtn',\"students\");\n    Session.setPersistent('golBtn',\"grid\");\n    Session.set('studentSelected', false);\n    Session.setPersistent('evaluation',classes.findOne({_id:Session.get('classId')}).evaluation);*/\n    var c = classes.findOne({'_id': this._id});\n    delete c._id;\n    c.teacherId=Meteor.userId();\n    c.className=\"Copia_\" + this.className;\n    Meteor.call('classDuplicate',c,cId);\n    Meteor.subscribe(\"classes\");\n    $('#add_class_modal').modal('hide');\n    /*students.find({'classId': cId}).forEach(function(student){\n      var newStudent = student;\n      delete student._id;\n      student.classId=Session.get('classId');\n      Meteor.call('studentInsert',student);\n    });*/\n    \n  },\n  'click .btn-delete-class': function(event) {\n    event.preventDefault();\n    Session.set('classId', event.target.name);\n    Modal.show('deleteClass');\n  },\n  'click .btn-store-class': function(event) {\n    event.preventDefault();\n    Session.set('classId', event.target.name);\n    Meteor.call('classStore',Session.get('classId'));\n  },\n  'click .btn-restore': function(event) {\n    event.preventDefault();\n    Session.set('classId', event.target.name);\n    Meteor.call('classStore',Session.get('classId'));\n  },\n  'click #changeRol': function(event) {\n    event.preventDefault();\n    if (Meteor.user().services.google.email == \"Juan.Torres@iestacio.com\") {\n      type=Meteor.users.findOne(Meteor.user()).userType;\n      Meteor.call('userTypeInsert', \"\");\n      Session.setPersistent('userType', \"\");\n      Router.go('index');\n    }\n  },\n  'click #adminClass': function(event) {\n    event.preventDefault();\n    if (Meteor.user().services.google.email == \"Juan.Torres@iestacio.com\") {\n      Modal.show('adminClass');\n      event.stopPropagation();\n    }\n    /*Session.set('classId', event.target.id);\n    Session.set('className', event.target.name);\n    Session.setPersistent('navItem', \"Students\");\n    Session.setPersistent('sogBtn',\"students\");\n    Session.setPersistent('golBtn',\"grid\");\n    Session.set('studentSelected', false);\n    Session.setPersistent('evaluation',classes.findOne({_id:Session.get('classId')}).evaluation);*/\n  },\n  'click #pruebas': function(event) {\n    event.preventDefault();\n    if (Meteor.user().services.google.email == \"Juan.Torres@iestacio.com\") {\n      $('#allClasses').toggleClass(\"oculto\");\n    }\n  }\n});\n","undoManager":{"mark":1,"position":-1,"stack":[[{"start":{"row":4,"column":3},"end":{"row":4,"column":4},"action":"remove","lines":["/"],"id":4},{"start":{"row":4,"column":2},"end":{"row":4,"column":3},"action":"remove","lines":["/"]}],[{"start":{"row":4,"column":2},"end":{"row":4,"column":3},"action":"insert","lines":["/"],"id":4},{"start":{"row":4,"column":3},"end":{"row":4,"column":4},"action":"insert","lines":["/"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":4,"column":2},"end":{"row":4,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1561991461071}