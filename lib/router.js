Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [
      //Meteor.subscribe('allUsers'),
      //Meteor.subscribe('mcgParameters')
      ];
  }
});

//Router.route('/', {name: 'llistaAlumnes'});
//Router.route('/', {name: 'index'});
Router.route('/', {name: 'classesPage',
  waitOn: function() {
    return [
      Meteor.subscribe('myUser'),
      Meteor.subscribe('mcgParameters'),
      Meteor.subscribe('classes'),
      Meteor.subscribe('images')
      ];
  },
  loadingTemplate: 'loading'
});
//Router.route('/studentClasses', {name: 'studentClasses'});
/*Router.route('/studentsMainPage', {name: 'studentsMainPage'});
Router.route('/randomEventPage', {name: 'randomEventPage'});
Router.route('/randomEventsList', {name: 'randomEventsList'});
Router.route('/behavioursList', {name: 'behavioursList'});
Router.route('/statisticsPage', {name: 'statisticsPage'});*/
Router.route('/students/:_id', {name: 'myNav',
  waitOn: function() {
    return [
      Meteor.subscribe('myUser'),
      Meteor.subscribe('classes',this.params._id),
      Meteor.subscribe('mcgParameters'),
      Meteor.subscribe('students',"class",this.params._id),
      Meteor.subscribe('images',this.params._id,["badge","event","card","item","avatar","villain","mission","group","backImg","map","userAvatar","behaviour","question"]),
      Meteor.subscribe('levels',"class",this.params._id),
      Meteor.subscribe('badges',"class",this.params._id),
      Meteor.subscribe('groups',"class",this.params._id),
      Meteor.subscribe('store',"class",this.params._id),
      Meteor.subscribe('cards',"class",this.params._id),
      //Meteor.subscribe('chromes',"class",this.params._id),
      Meteor.subscribe('behaviours',"class",this.params._id),
      //Meteor.subscribe('behavioursLog',"class",this.params._id),
      //Meteor.subscribe('questions',this.params._id),
      //Meteor.subscribe('quizzes',this.params._id),
      Meteor.subscribe('randomEvents',"class",this.params._id),
      Meteor.subscribe('convictions',"class",this.params._id),
      Meteor.subscribe('quotes',"class",this.params._id),
      Meteor.subscribe('challenges',"class",this.params._id),
      Meteor.subscribe('chalMissions',"class",this.params._id),
      //Meteor.subscribe('chalPoints',"class",this.params._id),
      Meteor.subscribe('challengesXP',"class",this.params._id),
      Meteor.subscribe('diary',"class",this.params._id),
      Meteor.subscribe('notebook',"class",this.params._id),
      Meteor.subscribe('notebookWork',"class",this.params._id),
      Meteor.subscribe('chatClass',"class",this.params._id),
      Meteor.subscribe('chatStudentTeacher',"class",this.params._id),
      Meteor.subscribe('chatTeachers'),
      Meteor.subscribe('notifications',"class",this.params._id),
      Meteor.subscribe('villains',this.params._id)
      ];
  }
});

Router.route('/view/:_id', {name: 'view',
  waitOn: function() {
    return [
      Meteor.subscribe('classView',this.params._id),
      Meteor.subscribe('students',"class",this.params._id),
      Meteor.subscribe('imagesView',this.params._id),
      Meteor.subscribe('badges',"class",this.params._id),
      Meteor.subscribe('store',"class",this.params._id),
      Meteor.subscribe('cards',"class",this.params._id),
      Meteor.subscribe('chromes',"class",this.params._id),
      Meteor.subscribe('behaviours',"class",this.params._id),
      Meteor.subscribe('randomEvents',"class",this.params._id),
      Meteor.subscribe('convictions',"class",this.params._id),
      Meteor.subscribe('quotes',"class",this.params._id),
      Meteor.subscribe('levels',"class",this.params._id),
      Meteor.subscribe('villains',this.params._id)
    ];
  }
});

Router.route('/visibleClasses', {name: 'visibleClasses',
  waitOn: function() {
    return [
      Meteor.subscribe('visibleClasses'),
      Meteor.subscribe('imagesVisibleClasses')
      ];
  },
  loadingTemplate: 'loading'
});

Router.route('/statistics/:_id', {name: 'statisticsPage',
  waitOn: function() {
    return [
      //Meteor.subscribe('allUsers'),
      //Meteor.subscribe('classes',this.params._id),
      Meteor.subscribe('students',"class",this.params._id),
      Meteor.subscribe('images',this.params._id),
      Meteor.subscribe('behaviours',"class",this.params._id),
      Meteor.subscribe('behavioursLog',"class",this.params._id)
    ];
  }
});

Router.route('/questions/:_id', {name: 'questions',
  waitOn: function() {
    return [
      //Meteor.subscribe('allUsers'),
      //Meteor.subscribe('classes',this.params._id),
      Meteor.subscribe('images',this.params._id),
      Meteor.subscribe('questions',this.params._id),
      Meteor.subscribe('quizzes',this.params._id)
    ];
  }
});

Router.route('/chat/:_id', {name: 'chat',
  waitOn: function() {
    return [
      Meteor.subscribe('allUsers'),
      Meteor.subscribe('classes',this.params._id),
      Meteor.subscribe('students',"class",this.params._id),
      Meteor.subscribe('images',this.params._id),
      Meteor.subscribe('chatClass',"class",this.params._id),
      Meteor.subscribe('chatTeachers')
    ];
  }
});

Router.route('/myAdventure/:_id', {name: 'myAdventure',
  waitOn: function() {
    return [
      //Meteor.subscribe('allUsers'),
      Meteor.subscribe('images',this.params._id),
      Meteor.subscribe('classes',this.params._id),
      Meteor.subscribe('students',"class",this.params._id)
    ];
  }
});

Router.route('/tools/:_id', {name: 'tools',
  waitOn: function() {
    return [
      //Meteor.subscribe('allUsers'),
      Meteor.subscribe('classes',this.params._id),
      Meteor.subscribe('students',"class",this.params._id),
      Meteor.subscribe('images',this.params._id),
      Meteor.subscribe('groups',"class",this.params._id),
      Meteor.subscribe('cards',"class",this.params._id),
      Meteor.subscribe('chromes',"class",this.params._id),
      Meteor.subscribe('randomEvents',"class",this.params._id),
      Meteor.subscribe('convictions',"class",this.params._id)
    ];
  }
});

Router.route('/settings/:_id', {name: 'settingsPage',
  waitOn: function() {
    return [
      Meteor.subscribe('allUsers'),
      Meteor.subscribe('classes',this.params._id),
      Meteor.subscribe('mcgParameters'),
      Meteor.subscribe('students',"class",this.params._id),
      Meteor.subscribe('images',this.params._id)
    ];
  }
});

Router.route('/notifications/:_id', {name: 'notifications',
  waitOn: function() {
    return [
      //Meteor.subscribe('allUsers'),
      Meteor.subscribe('students',"class",this.params._id),
      Meteor.subscribe('images',this.params._id),
      Meteor.subscribe('cards',"class",this.params._id),
      Meteor.subscribe('store',"class",this.params._id),
      Meteor.subscribe('notifications',"class",this.params._id)
    ];
  }
});

Router.route('/gamification/:_id', {name: 'gamification',
  waitOn: function() {
    return [
      Meteor.subscribe('allUsers'),
      Meteor.subscribe('classes',this.params._id),
      Meteor.subscribe('students',"class",this.params._id),
      Meteor.subscribe('images',this.params._id),
      Meteor.subscribe('challenges',"class",this.params._id),
      Meteor.subscribe('chalMissions',"class",this.params._id),
      Meteor.subscribe('chalPoints',"class",this.params._id),
      Meteor.subscribe('challengesXP',"class",this.params._id),
      Meteor.subscribe('levels',"class",this.params._id),
      Meteor.subscribe('badges',"class",this.params._id),
      Meteor.subscribe('groups',"class",this.params._id),
      Meteor.subscribe('store',"class",this.params._id),
      Meteor.subscribe('cards',"class",this.params._id),
      Meteor.subscribe('chromes',"class",this.params._id),
      Meteor.subscribe('behaviours',"class",this.params._id),
      Meteor.subscribe('randomEvents',"class",this.params._id),
      Meteor.subscribe('convictions',"class",this.params._id),
      Meteor.subscribe('quotes',"class",this.params._id),
      Meteor.subscribe('villains',this.params._id)
    ];
  }
});

Router.route('/battle/:_id', {name: 'battle',
  waitOn: function() {
    return [
      //Meteor.subscribe('allUsers'),
      Meteor.subscribe('classes',this.params._id),
      Meteor.subscribe('students',"class",this.params._id),
      Meteor.subscribe('images',this.params._id),
      Meteor.subscribe('questions',this.params._id),
      Meteor.subscribe('quizzes',this.params._id),
      Meteor.subscribe('villains',this.params._id)
    ];
  }
});

Router.route('/student/:_id', {name: 'studentPage',
  waitOn: function() {
    return [
      Meteor.subscribe('allUsers'),
      Meteor.subscribe('classes'),
      Meteor.subscribe('mcgParameters'),
      Meteor.subscribe('students',"student",this.params._id),
      Meteor.subscribe('badges',"student",this.params._id),
      Meteor.subscribe('groups',"student",this.params._id),
      Meteor.subscribe('behaviours',"student",this.params._id),
      Meteor.subscribe('behavioursLog',"student",this.params._id),
      Meteor.subscribe('store',"student",this.params._id),
      Meteor.subscribe('levels',"student",this.params._id),
      Meteor.subscribe('challenges',"student",this.params._id),
      Meteor.subscribe('chalMissions',"student",this.params._id),
      //Meteor.subscribe('chalPoints',"student",this.params._id),
      Meteor.subscribe('challengesXP',"student",this.params._id),
      Meteor.subscribe('diary',"student",this.params._id),
      Meteor.subscribe('notebook',"student",this.params._id),
      Meteor.subscribe('notebookWork',"student",this.params._id),
      Meteor.subscribe('images'),
      Meteor.subscribe('cards',"student",this.params._id),
      Meteor.subscribe('chromes',"student",this.params._id),
      Meteor.subscribe('chatStudentTeacher',"class",this.params._id),
      Meteor.subscribe('notifications',"student",this.params._id)
      ];
  }
});

//Router.route('/submit', {name: 'alumneSubmit'});*/

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.route('/studentData/:id',{where: 'server'})

    // GET /message/:id - returns specific records

    .get(function(){
        var response;
        if (this.params.id !== undefined) {
            var data = students.findOne( { '_id' : { $regex : this.params.id } }, { XP:1, HP:1, coins: 1, level: 1 } );
            if (data) {
                response = data
            } else {
                response = {
                    "error" : true,
                    "message" : "User not found."
                }
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    })

Router.route('/mcgBadge/:id',{where: 'server'})

  // GET /message/:id - returns specific records

  .get(function(){
      var response;
      if (this.params.id !== undefined) {
          //var query = this.params.query;
          var data = badges.findOne( { '_id' : this.params.id } );
          var image_url = images.findOne ( { '_id' : data.badgeImage } ).image_url;
          data.image_url=image_url;
          var sId=this.params.query.sId;
          var regla="^"+sId;
          student=students.findOne({'_id':{$regex: regla}});
          var eId=this.params.id
          s=students.findOne({'_id':student._id, 'badges.badgeId': eId});
          if ( s ) {
            data.stock=true;
          } else {
            data.stock=false;
          }
          if (data) {
              response = data
          } else {
              response = {
                  "error" : true,
                  "message" : "Element not found."
              }
          }
      }
      this.response.setHeader('Content-Type','application/json');
      this.response.end(JSON.stringify(response));
  })
  

Router.route('/winBadge/',{where: 'server'})

  // GET /message/:id - returns specific records

  .post(function(){
    e=this.request.body.elementType;
    eId=this.request.body.elementId;
    sId=this.request.body.studentId;
    //console.log(e + "/" + eId + "/" +sId);
    regla="^"+sId;
    student=students.findOne({'_id':{$regex: regla}});
    if (e=="badge") {
      badge=badges.findOne({'_id':eId});
      if (badge.classId == student.classId) {
        s=students.findOne({'_id':student._id, 'badges.badgeId': eId});
        if ( ! s || s.badges.find( badge => badge.badgeId == eId).stock == 0) {
          Meteor.call('studentBadge', student._id, eId);
          var behaviour = {
            classId: student.classId,
            student: student._id,
            behavior: badge._id,
            behaviourType: 'Badge',
            'XP': parseInt(badge.points),
            'HP': 0,
            Coins: 0,
            Energy:0,
            evaluation: 1,
            comment: 'Insignia Externa ('+parseInt(badge.points)+'XP)',
            createdOn: new Date()
          };
          Meteor.call('behaviourLogInsert', behaviour);
          Meteor.call('studentXP', student._id, parseInt(badge.points));
        }
      }
    }
    this.response.statusCode=200;
    this.response.setHeader('Content-Type','application/json');
    this.response.setHeader('Access-Control-Allow-Origin','*');
    this.response.setHeader("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type");
    this.response.end("Correcto");
  })

Router.route('/st',{where: 'server'})
    .get(function(){
        var response = students.find({ '_id' : { $regex : '2GkimY' } }).fetch();
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    })

Router.onBeforeAction('dataNotFound', {only: 'classesPage'});
Router.onBeforeAction(requireLogin, {only: 'classesPage'});
