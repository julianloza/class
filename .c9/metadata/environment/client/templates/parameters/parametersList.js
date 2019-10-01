{"filter":false,"title":"parametersList.js","tooltip":"/client/templates/parameters/parametersList.js","undoManager":{"mark":67,"position":67,"stack":[[{"start":{"row":36,"column":3},"end":{"row":44,"column":3},"action":"insert","lines":[",","  sImage: function() {","    avatar=this.studentImg;","    if (avatar.substring(0, 4)==\"http\") {","      return avatar;","    } else {","      return images.findOne({_id: avatar}).image_url;","    }","  }"],"id":5}],[{"start":{"row":37,"column":2},"end":{"row":37,"column":3},"action":"remove","lines":["s"],"id":6}],[{"start":{"row":37,"column":2},"end":{"row":37,"column":3},"action":"insert","lines":["c"],"id":7}],[{"start":{"row":38,"column":22},"end":{"row":38,"column":23},"action":"remove","lines":["t"],"id":10},{"start":{"row":38,"column":21},"end":{"row":38,"column":22},"action":"remove","lines":["n"]},{"start":{"row":38,"column":20},"end":{"row":38,"column":21},"action":"remove","lines":["e"]},{"start":{"row":38,"column":19},"end":{"row":38,"column":20},"action":"remove","lines":["d"]},{"start":{"row":38,"column":18},"end":{"row":38,"column":19},"action":"remove","lines":["u"]},{"start":{"row":38,"column":17},"end":{"row":38,"column":18},"action":"remove","lines":["t"]},{"start":{"row":38,"column":16},"end":{"row":38,"column":17},"action":"remove","lines":["s"]}],[{"start":{"row":38,"column":16},"end":{"row":38,"column":17},"action":"insert","lines":["c"],"id":11},{"start":{"row":38,"column":17},"end":{"row":38,"column":18},"action":"insert","lines":["l"]},{"start":{"row":38,"column":18},"end":{"row":38,"column":19},"action":"insert","lines":["a"]},{"start":{"row":38,"column":19},"end":{"row":38,"column":20},"action":"insert","lines":["s"]},{"start":{"row":38,"column":20},"end":{"row":38,"column":21},"action":"insert","lines":["s"]}],[{"start":{"row":145,"column":3},"end":{"row":151,"column":3},"action":"insert","lines":[",","  'click .groupImage': function(event) {","    event.preventDefault();","    Session.set('imageType','group');","    Session.set('idElementImage',this._id);","    Modal.show('imagesTemplate');","  }"],"id":12}],[{"start":{"row":146,"column":14},"end":{"row":146,"column":15},"action":"remove","lines":["p"],"id":13},{"start":{"row":146,"column":13},"end":{"row":146,"column":14},"action":"remove","lines":["u"]},{"start":{"row":146,"column":12},"end":{"row":146,"column":13},"action":"remove","lines":["o"]},{"start":{"row":146,"column":11},"end":{"row":146,"column":12},"action":"remove","lines":["r"]},{"start":{"row":146,"column":10},"end":{"row":146,"column":11},"action":"remove","lines":["g"]}],[{"start":{"row":146,"column":10},"end":{"row":146,"column":11},"action":"insert","lines":["c"],"id":14},{"start":{"row":146,"column":11},"end":{"row":146,"column":12},"action":"insert","lines":["l"]},{"start":{"row":146,"column":12},"end":{"row":146,"column":13},"action":"insert","lines":["a"]},{"start":{"row":146,"column":13},"end":{"row":146,"column":14},"action":"insert","lines":["s"]},{"start":{"row":146,"column":14},"end":{"row":146,"column":15},"action":"insert","lines":["s"]}],[{"start":{"row":148,"column":29},"end":{"row":148,"column":34},"action":"remove","lines":["group"],"id":15},{"start":{"row":148,"column":29},"end":{"row":148,"column":30},"action":"insert","lines":["c"]},{"start":{"row":148,"column":30},"end":{"row":148,"column":31},"action":"insert","lines":["l"]},{"start":{"row":148,"column":31},"end":{"row":148,"column":32},"action":"insert","lines":["a"]},{"start":{"row":148,"column":32},"end":{"row":148,"column":33},"action":"insert","lines":["s"]},{"start":{"row":148,"column":33},"end":{"row":148,"column":34},"action":"insert","lines":["s"]}],[{"start":{"row":148,"column":29},"end":{"row":148,"column":34},"action":"remove","lines":["class"],"id":16},{"start":{"row":148,"column":29},"end":{"row":148,"column":36},"action":"insert","lines":["backImg"]}],[{"start":{"row":146,"column":10},"end":{"row":146,"column":15},"action":"remove","lines":["class"],"id":17},{"start":{"row":146,"column":10},"end":{"row":146,"column":17},"action":"insert","lines":["backImg"]}],[{"start":{"row":146,"column":17},"end":{"row":146,"column":18},"action":"remove","lines":["I"],"id":18},{"start":{"row":146,"column":17},"end":{"row":146,"column":18},"action":"remove","lines":["m"]},{"start":{"row":146,"column":17},"end":{"row":146,"column":18},"action":"remove","lines":["a"]},{"start":{"row":146,"column":17},"end":{"row":146,"column":18},"action":"remove","lines":["g"]}],[{"start":{"row":146,"column":16},"end":{"row":146,"column":17},"action":"insert","lines":["a"],"id":19}],[{"start":{"row":37,"column":2},"end":{"row":37,"column":3},"action":"remove","lines":["c"],"id":20}],[{"start":{"row":37,"column":2},"end":{"row":37,"column":3},"action":"insert","lines":["b"],"id":21}],[{"start":{"row":38,"column":16},"end":{"row":38,"column":24},"action":"remove","lines":["classImg"],"id":22},{"start":{"row":38,"column":16},"end":{"row":38,"column":23},"action":"insert","lines":["backImg"]}],[{"start":{"row":150,"column":33},"end":{"row":151,"column":0},"action":"insert","lines":["",""],"id":23},{"start":{"row":151,"column":0},"end":{"row":151,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":151,"column":4},"end":{"row":151,"column":150},"action":"insert","lines":["$(\".studentProfile\").css('background-image','url(\"'+images.findOne({_id: classes.findOne({_id: Session.get(\"classId\")}).backImg}).image_url+'\")');"],"id":25}],[{"start":{"row":150,"column":33},"end":{"row":151,"column":0},"action":"insert","lines":["",""],"id":26},{"start":{"row":151,"column":0},"end":{"row":151,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":151,"column":4},"end":{"row":151,"column":150},"action":"insert","lines":["$(\".studentProfile\").css('background-image','url(\"'+images.findOne({_id: classes.findOne({_id: Session.get(\"classId\")}).backImg}).image_url+'\")');"],"id":27}],[{"start":{"row":151,"column":7},"end":{"row":151,"column":22},"action":"remove","lines":[".studentProfile"],"id":28},{"start":{"row":151,"column":7},"end":{"row":151,"column":8},"action":"insert","lines":["#"]}],[{"start":{"row":151,"column":8},"end":{"row":151,"column":15},"action":"insert","lines":["mainTab"],"id":29}],[{"start":{"row":151,"column":4},"end":{"row":152,"column":150},"action":"remove","lines":["$(\"#mainTab\").css('background-image','url(\"'+images.findOne({_id: classes.findOne({_id: Session.get(\"classId\")}).backImg}).image_url+'\")');","    $(\".studentProfile\").css('background-image','url(\"'+images.findOne({_id: classes.findOne({_id: Session.get(\"classId\")}).backImg}).image_url+'\")');"],"id":30}],[{"start":{"row":151,"column":2},"end":{"row":151,"column":4},"action":"remove","lines":["  "],"id":31},{"start":{"row":151,"column":0},"end":{"row":151,"column":2},"action":"remove","lines":["  "]},{"start":{"row":150,"column":33},"end":{"row":151,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":151,"column":3},"end":{"row":156,"column":3},"action":"insert","lines":["'click .backImage': function(event) {","    event.preventDefault();","    Session.set('imageType','backImg');","    Session.set('idElementImage',this._id);","    Modal.show('imagesTemplate');","  }"],"id":32}],[{"start":{"row":151,"column":11},"end":{"row":151,"column":20},"action":"remove","lines":["backImage"],"id":33},{"start":{"row":151,"column":11},"end":{"row":151,"column":23},"action":"insert","lines":["delBackImage"]}],[{"start":{"row":153,"column":4},"end":{"row":155,"column":33},"action":"remove","lines":["Session.set('imageType','backImg');","    Session.set('idElementImage',this._id);","    Modal.show('imagesTemplate');"],"id":34}],[{"start":{"row":153,"column":4},"end":{"row":156,"column":6},"action":"insert","lines":["Meteor.call('backImgUpdate',Session.get('idElementImage'),$(\"input[name='imageId']:checked\").val());","        $(\"#mainTab\").css('background-image','url(\"'+images.findOne({_id: classes.findOne({_id: Session.get(\"classId\")}).backImg}).image_url+'\")');","        $(\".studentProfile\").css('background-image','url(\"'+images.findOne({_id: classes.findOne({_id: Session.get(\"classId\")}).backImg}).image_url+'\")');","      "],"id":35}],[{"start":{"row":154,"column":6},"end":{"row":154,"column":8},"action":"remove","lines":["  "],"id":36},{"start":{"row":154,"column":4},"end":{"row":154,"column":6},"action":"remove","lines":["  "]}],[{"start":{"row":155,"column":4},"end":{"row":155,"column":6},"action":"remove","lines":["  "],"id":37},{"start":{"row":155,"column":4},"end":{"row":155,"column":6},"action":"remove","lines":["  "]}],[{"start":{"row":155,"column":49},"end":{"row":155,"column":144},"action":"remove","lines":["url(\"'+images.findOne({_id: classes.findOne({_id: Session.get(\"classId\")}).backImg}).image_url+"],"id":38}],[{"start":{"row":155,"column":50},"end":{"row":155,"column":51},"action":"remove","lines":["\""],"id":39}],[{"start":{"row":155,"column":51},"end":{"row":155,"column":52},"action":"remove","lines":["'"],"id":40}],[{"start":{"row":155,"column":51},"end":{"row":155,"column":52},"action":"remove","lines":[")"],"id":41}],[{"start":{"row":154,"column":42},"end":{"row":154,"column":140},"action":"remove","lines":["url(\"'+images.findOne({_id: classes.findOne({_id: Session.get(\"classId\")}).backImg}).image_url+'\")"],"id":42}],[{"start":{"row":153,"column":62},"end":{"row":153,"column":102},"action":"remove","lines":["$(\"input[name='imageId']:checked\").val()"],"id":43},{"start":{"row":153,"column":62},"end":{"row":153,"column":63},"action":"insert","lines":["'"]},{"start":{"row":153,"column":63},"end":{"row":153,"column":64},"action":"insert","lines":["'"]}],[{"start":{"row":151,"column":3},"end":{"row":151,"column":4},"action":"insert","lines":[","],"id":44}],[{"start":{"row":151,"column":4},"end":{"row":152,"column":0},"action":"insert","lines":["",""],"id":45},{"start":{"row":152,"column":0},"end":{"row":152,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":157,"column":2},"end":{"row":157,"column":4},"action":"remove","lines":["  "],"id":46},{"start":{"row":157,"column":0},"end":{"row":157,"column":2},"action":"remove","lines":["  "]},{"start":{"row":156,"column":52},"end":{"row":157,"column":2},"action":"remove","lines":["","  "]}],[{"start":{"row":152,"column":9},"end":{"row":152,"column":10},"action":"remove","lines":["."],"id":47}],[{"start":{"row":152,"column":9},"end":{"row":152,"column":10},"action":"insert","lines":["#"],"id":48}],[{"start":{"row":156,"column":52},"end":{"row":157,"column":0},"action":"insert","lines":["",""],"id":49},{"start":{"row":157,"column":0},"end":{"row":157,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":157,"column":4},"end":{"row":157,"column":49},"action":"insert","lines":["background-color: rgba(0,0,0,0.4) !important;"],"id":50}],[{"start":{"row":157,"column":4},"end":{"row":157,"column":5},"action":"insert","lines":["$"],"id":51},{"start":{"row":157,"column":5},"end":{"row":157,"column":6},"action":"insert","lines":["("]}],[{"start":{"row":157,"column":6},"end":{"row":157,"column":7},"action":"insert","lines":["\""],"id":52},{"start":{"row":157,"column":7},"end":{"row":157,"column":8},"action":"insert","lines":["."]}],[{"start":{"row":157,"column":8},"end":{"row":157,"column":22},"action":"insert","lines":["opacityProfile"],"id":53}],[{"start":{"row":157,"column":22},"end":{"row":157,"column":23},"action":"insert","lines":["\""],"id":54},{"start":{"row":157,"column":23},"end":{"row":157,"column":24},"action":"insert","lines":[")"]},{"start":{"row":157,"column":24},"end":{"row":157,"column":25},"action":"insert","lines":["."]}],[{"start":{"row":157,"column":25},"end":{"row":157,"column":26},"action":"insert","lines":["c"],"id":55},{"start":{"row":157,"column":26},"end":{"row":157,"column":27},"action":"insert","lines":["s"]},{"start":{"row":157,"column":27},"end":{"row":157,"column":28},"action":"insert","lines":["s"]},{"start":{"row":157,"column":28},"end":{"row":157,"column":29},"action":"insert","lines":["("]}],[{"start":{"row":157,"column":29},"end":{"row":157,"column":30},"action":"insert","lines":["'"],"id":56}],[{"start":{"row":157,"column":46},"end":{"row":157,"column":47},"action":"insert","lines":["'"],"id":57}],[{"start":{"row":157,"column":49},"end":{"row":157,"column":50},"action":"insert","lines":["'"],"id":58}],[{"start":{"row":157,"column":76},"end":{"row":157,"column":77},"action":"insert","lines":["'"],"id":59}],[{"start":{"row":157,"column":50},"end":{"row":157,"column":76},"action":"remove","lines":["rgba(0,0,0,0.4) !important"],"id":61}],[{"start":{"row":157,"column":52},"end":{"row":158,"column":0},"action":"insert","lines":["",""],"id":62},{"start":{"row":158,"column":0},"end":{"row":158,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":158,"column":4},"end":{"row":158,"column":49},"action":"insert","lines":["background-color: rgba(0,0,0,0.4) !important;"],"id":63}],[{"start":{"row":158,"column":4},"end":{"row":158,"column":8},"action":"insert","lines":["$(\"."],"id":64}],[{"start":{"row":158,"column":8},"end":{"row":158,"column":22},"action":"insert","lines":["opacityProfile"],"id":65}],[{"start":{"row":158,"column":22},"end":{"row":158,"column":23},"action":"insert","lines":["\""],"id":66},{"start":{"row":158,"column":23},"end":{"row":158,"column":24},"action":"insert","lines":[")"]}],[{"start":{"row":158,"column":24},"end":{"row":158,"column":25},"action":"insert","lines":["."],"id":67},{"start":{"row":158,"column":25},"end":{"row":158,"column":26},"action":"insert","lines":["c"]},{"start":{"row":158,"column":26},"end":{"row":158,"column":27},"action":"insert","lines":["s"]},{"start":{"row":158,"column":27},"end":{"row":158,"column":28},"action":"insert","lines":["s"]},{"start":{"row":158,"column":28},"end":{"row":158,"column":29},"action":"insert","lines":["("]}],[{"start":{"row":158,"column":29},"end":{"row":158,"column":30},"action":"insert","lines":["'"],"id":68}],[{"start":{"row":158,"column":46},"end":{"row":158,"column":47},"action":"insert","lines":["'"],"id":69}],[{"start":{"row":158,"column":49},"end":{"row":158,"column":50},"action":"insert","lines":["'"],"id":74}],[{"start":{"row":158,"column":76},"end":{"row":158,"column":77},"action":"insert","lines":["'"],"id":75}],[{"start":{"row":158,"column":50},"end":{"row":158,"column":76},"action":"remove","lines":["rgba(0,0,0,0.4) !important"],"id":76}],[{"start":{"row":158,"column":0},"end":{"row":158,"column":52},"action":"remove","lines":["    $(\".opacityProfile\").css('background-color': '';"],"id":78},{"start":{"row":157,"column":52},"end":{"row":158,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":157,"column":51},"end":{"row":157,"column":52},"action":"insert","lines":[")"],"id":79}],[{"start":{"row":157,"column":50},"end":{"row":157,"column":51},"action":"insert","lines":["r"],"id":80},{"start":{"row":157,"column":51},"end":{"row":157,"column":52},"action":"insert","lines":["e"]},{"start":{"row":157,"column":52},"end":{"row":157,"column":53},"action":"insert","lines":["d"]}],[{"start":{"row":157,"column":4},"end":{"row":157,"column":56},"action":"remove","lines":["$(\".opacityProfile\").css('background-color': 'red');"],"id":81},{"start":{"row":157,"column":4},"end":{"row":157,"column":51},"action":"insert","lines":["$(\".opacityDiv\").toggleClass('opacityProfile');"]}]]},"ace":{"folds":[],"scrolltop":2698.375,"scrollleft":0,"selection":{"start":{"row":157,"column":4},"end":{"row":157,"column":51},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":137,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1569497985302,"hash":"07e0ca01ab5ab9ce1df2e0a9c55b15202c6ce5bc"}