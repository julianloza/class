{"filter":false,"title":"profile.js","tooltip":"/client/templates/student/profile.js","undoManager":{"mark":35,"position":35,"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":30},"action":"insert","lines":["Template.studentPage.helpers({"],"id":1}],[{"start":{"row":0,"column":9},"end":{"row":0,"column":20},"action":"remove","lines":["studentPage"],"id":2},{"start":{"row":0,"column":9},"end":{"row":0,"column":20},"action":"insert","lines":["userProfile"]}],[{"start":{"row":0,"column":30},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":3},{"start":{"row":1,"column":0},"end":{"row":1,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":1,"column":4},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"remove","lines":["    "],"id":5}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["}"],"id":6}],[{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":[")"],"id":7}],[{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":[";"],"id":8}],[{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"remove","lines":[";"],"id":9}],[{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":[";"],"id":10}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":4},"action":"remove","lines":["    "],"id":11}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":4},"action":"insert","lines":["    "],"id":12}],[{"start":{"row":1,"column":4},"end":{"row":20,"column":4},"action":"insert","lines":["image: function(avatar) {","    avatarVisible=classes.findOne({ _id: Session.get('classId') }).avatarVisible;","    if ( avatar==\"\" || !avatar || (  Session.get('userType') != \"teacher\"  &&  !avatarVisible ) ) {","      if ( classes.findOne({_id: Session.get('classId')}).studentImg ) {","        if (classes.findOne({_id: Session.get('classId')}).studentImg.substring(0, 4)==\"http\") {","          return classes.findOne({_id: Session.get('classId')}).studentImg;","        } else {","          return images.findOne({_id: classes.findOne({_id: Session.get('classId')}).studentImg}).image_url;","        }","      } else {","        return \"https://res.cloudinary.com/myclassgame/image/upload/v1542963357/proves/luke.png\";","      }","    } else  {","      if (avatar.substring(0, 4)==\"http\") {","        return avatar;","      } else {","        return images.findOne({_id: avatar}).image_url;","      }","    }","  },"],"id":13}],[{"start":{"row":20,"column":4},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":14},{"start":{"row":21,"column":0},"end":{"row":21,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":21,"column":2},"end":{"row":23,"column":4},"action":"insert","lines":["selectLevels: function(){","    return levels.find({classId: Session.get('classId')});","  },"],"id":15}],[{"start":{"row":23,"column":3},"end":{"row":23,"column":4},"action":"remove","lines":[","],"id":16}],[{"start":{"row":23,"column":3},"end":{"row":23,"column":4},"action":"insert","lines":[","],"id":17}],[{"start":{"row":23,"column":4},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":18},{"start":{"row":24,"column":0},"end":{"row":24,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":24,"column":2},"end":{"row":30,"column":4},"action":"insert","lines":["levelSelected: function(l){","    if ( students.findOne({_id: Session.get('studentId')}).level == l ) {","      return \"selected\"","    } else {","      return \"\";","    }","  },"],"id":19}],[{"start":{"row":30,"column":3},"end":{"row":30,"column":4},"action":"remove","lines":[","],"id":20}],[{"start":{"row":31,"column":2},"end":{"row":31,"column":3},"action":"remove","lines":[";"],"id":21}],[{"start":{"row":31,"column":2},"end":{"row":32,"column":0},"action":"insert","lines":["",""],"id":22}],[{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"insert","lines":["",""],"id":23}],[{"start":{"row":33,"column":0},"end":{"row":33,"column":29},"action":"insert","lines":["Template.studentPage.events({"],"id":24}],[{"start":{"row":33,"column":29},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":25},{"start":{"row":34,"column":0},"end":{"row":34,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":34,"column":2},"end":{"row":34,"column":3},"action":"insert","lines":["}"],"id":26},{"start":{"row":34,"column":0},"end":{"row":34,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":34,"column":1},"end":{"row":34,"column":2},"action":"insert","lines":[")"],"id":27}],[{"start":{"row":33,"column":29},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":28},{"start":{"row":34,"column":0},"end":{"row":34,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":34,"column":2},"end":{"row":44,"column":4},"action":"insert","lines":["'submit form.dataStudent': function(event) {","    event.preventDefault();","    var user = Meteor.user();","    studentId=Session.get('studentId');","    studentName=$(event.target).find('[name=sName]').val();","    level=$(event.target).find('[name=sLevel]').val();","    alias=$(event.target).find('[name=sAlias]').val();","    avatar=$(event.target).find('[name=sAvatar]').val();","    email=$(event.target).find('[name=sEmail]').val();","    Meteor.call('studentModify',studentId,studentName,level,alias,avatar,email);","  },"],"id":29}],[{"start":{"row":44,"column":3},"end":{"row":44,"column":4},"action":"remove","lines":[","],"id":30}],[{"start":{"row":30,"column":3},"end":{"row":30,"column":4},"action":"insert","lines":[","],"id":33}],[{"start":{"row":30,"column":4},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":34},{"start":{"row":31,"column":0},"end":{"row":31,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":31,"column":2},"end":{"row":37,"column":4},"action":"insert","lines":["teacher: function() {","    if (Session.get('userType')==\"teacher\") {","     return true;","    } else {","     return false;","    };","  },"],"id":35}],[{"start":{"row":37,"column":4},"end":{"row":38,"column":0},"action":"insert","lines":["",""],"id":36},{"start":{"row":38,"column":0},"end":{"row":38,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":38,"column":2},"end":{"row":47,"column":4},"action":"insert","lines":["grupo: function() {","    if (this.groupId) {","      return groups.findOne({_id: this.groupId});","    } else {","      var group = {","        groupName:\"Sin asignar\"","      };","      return group;","    }","  },"],"id":37}],[{"start":{"row":47,"column":3},"end":{"row":47,"column":4},"action":"remove","lines":[","],"id":38}]]},"ace":{"folds":[],"scrolltop":49,"scrollleft":0,"selection":{"start":{"row":47,"column":3},"end":{"row":47,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":2,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1558346995939,"hash":"12dd051fc8f78ee4d1059f71b52e0739f7605d3e"}