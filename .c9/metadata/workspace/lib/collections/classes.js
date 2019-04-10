{"filter":false,"title":"classes.js","tooltip":"/lib/collections/classes.js","undoManager":{"mark":55,"position":55,"stack":[[{"start":{"row":62,"column":4},"end":{"row":63,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":63,"column":0},"end":{"row":63,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":63,"column":2},"end":{"row":65,"column":4},"action":"insert","lines":["avatarVisibleChange: function(classId,avatarChecked) {","    var Id = classes.update({ _id: classId }, { $set: {avatarVisible: avatarChecked} });","  },"],"id":3}],[{"start":{"row":63,"column":2},"end":{"row":63,"column":21},"action":"remove","lines":["avatarVisibleChange"],"id":4},{"start":{"row":63,"column":2},"end":{"row":63,"column":14},"action":"insert","lines":["CoinXPChange"]}],[{"start":{"row":63,"column":33},"end":{"row":63,"column":39},"action":"remove","lines":["avatar"],"id":5},{"start":{"row":63,"column":33},"end":{"row":63,"column":34},"action":"insert","lines":["c"]}],[{"start":{"row":63,"column":34},"end":{"row":63,"column":35},"action":"insert","lines":["o"],"id":6}],[{"start":{"row":63,"column":35},"end":{"row":63,"column":36},"action":"insert","lines":["i"],"id":7}],[{"start":{"row":63,"column":36},"end":{"row":63,"column":37},"action":"insert","lines":["n"],"id":8}],[{"start":{"row":63,"column":37},"end":{"row":63,"column":38},"action":"insert","lines":["C"],"id":9}],[{"start":{"row":63,"column":37},"end":{"row":63,"column":38},"action":"remove","lines":["C"],"id":10}],[{"start":{"row":63,"column":37},"end":{"row":63,"column":38},"action":"insert","lines":["X"],"id":11}],[{"start":{"row":63,"column":38},"end":{"row":63,"column":39},"action":"insert","lines":["P"],"id":12}],[{"start":{"row":64,"column":55},"end":{"row":64,"column":68},"action":"remove","lines":["avatarVisible"],"id":13},{"start":{"row":64,"column":55},"end":{"row":64,"column":56},"action":"insert","lines":["c"]}],[{"start":{"row":64,"column":56},"end":{"row":64,"column":57},"action":"insert","lines":["o"],"id":14}],[{"start":{"row":64,"column":57},"end":{"row":64,"column":58},"action":"insert","lines":["i"],"id":15}],[{"start":{"row":64,"column":58},"end":{"row":64,"column":59},"action":"insert","lines":["n"],"id":16}],[{"start":{"row":64,"column":58},"end":{"row":64,"column":59},"action":"remove","lines":["n"],"id":17}],[{"start":{"row":64,"column":57},"end":{"row":64,"column":58},"action":"remove","lines":["i"],"id":18}],[{"start":{"row":64,"column":56},"end":{"row":64,"column":57},"action":"remove","lines":["o"],"id":19}],[{"start":{"row":64,"column":55},"end":{"row":64,"column":56},"action":"remove","lines":["c"],"id":20}],[{"start":{"row":64,"column":55},"end":{"row":64,"column":56},"action":"insert","lines":["C"],"id":21}],[{"start":{"row":64,"column":56},"end":{"row":64,"column":57},"action":"insert","lines":["o"],"id":22}],[{"start":{"row":64,"column":57},"end":{"row":64,"column":58},"action":"insert","lines":["i"],"id":23}],[{"start":{"row":64,"column":58},"end":{"row":64,"column":59},"action":"insert","lines":["n"],"id":24}],[{"start":{"row":64,"column":59},"end":{"row":64,"column":60},"action":"insert","lines":["X"],"id":25}],[{"start":{"row":64,"column":60},"end":{"row":64,"column":61},"action":"insert","lines":["P"],"id":26}],[{"start":{"row":64,"column":63},"end":{"row":64,"column":76},"action":"remove","lines":["avatarChecked"],"id":27},{"start":{"row":64,"column":63},"end":{"row":64,"column":76},"action":"insert","lines":["coinXPChecked"]}],[{"start":{"row":153,"column":7},"end":{"row":154,"column":0},"action":"insert","lines":["",""],"id":28},{"start":{"row":154,"column":0},"end":{"row":154,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":154,"column":4},"end":{"row":158,"column":7},"action":"insert","lines":["cards.find({'classId': cId}).forEach(function(item){","      delete item._id;","      item.classId=cnId;","      Meteor.call('cardInsert',item);","    });"],"id":29}],[{"start":{"row":154,"column":7},"end":{"row":154,"column":8},"action":"remove","lines":["d"],"id":30}],[{"start":{"row":154,"column":6},"end":{"row":154,"column":7},"action":"remove","lines":["r"],"id":31}],[{"start":{"row":154,"column":5},"end":{"row":154,"column":6},"action":"remove","lines":["a"],"id":32}],[{"start":{"row":154,"column":5},"end":{"row":154,"column":6},"action":"insert","lines":["h"],"id":33}],[{"start":{"row":154,"column":6},"end":{"row":154,"column":7},"action":"insert","lines":["r"],"id":34}],[{"start":{"row":154,"column":7},"end":{"row":154,"column":8},"action":"insert","lines":["o"],"id":35}],[{"start":{"row":154,"column":8},"end":{"row":154,"column":9},"action":"insert","lines":["m"],"id":36}],[{"start":{"row":154,"column":9},"end":{"row":154,"column":10},"action":"insert","lines":["e"],"id":37}],[{"start":{"row":157,"column":19},"end":{"row":157,"column":23},"action":"remove","lines":["card"],"id":38},{"start":{"row":157,"column":19},"end":{"row":157,"column":20},"action":"insert","lines":["c"]}],[{"start":{"row":157,"column":20},"end":{"row":157,"column":21},"action":"insert","lines":["h"],"id":39}],[{"start":{"row":157,"column":21},"end":{"row":157,"column":22},"action":"insert","lines":["r"],"id":40}],[{"start":{"row":157,"column":22},"end":{"row":157,"column":23},"action":"insert","lines":["o"],"id":41}],[{"start":{"row":157,"column":23},"end":{"row":157,"column":24},"action":"insert","lines":["m"],"id":42}],[{"start":{"row":157,"column":24},"end":{"row":157,"column":25},"action":"insert","lines":["e"],"id":43}],[{"start":{"row":186,"column":101},"end":{"row":187,"column":0},"action":"insert","lines":["",""],"id":44},{"start":{"row":187,"column":0},"end":{"row":187,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":187,"column":6},"end":{"row":187,"column":101},"action":"insert","lines":["cards.update({'classId': cnId, 'cardImage': ida}, {$set: {'cardImage': idn}}, { multi: true} );"],"id":45}],[{"start":{"row":187,"column":10},"end":{"row":187,"column":11},"action":"remove","lines":["s"],"id":46}],[{"start":{"row":187,"column":9},"end":{"row":187,"column":10},"action":"remove","lines":["d"],"id":47}],[{"start":{"row":187,"column":8},"end":{"row":187,"column":9},"action":"remove","lines":["r"],"id":48}],[{"start":{"row":187,"column":7},"end":{"row":187,"column":8},"action":"remove","lines":["a"],"id":49}],[{"start":{"row":187,"column":7},"end":{"row":187,"column":8},"action":"insert","lines":["h"],"id":50}],[{"start":{"row":187,"column":8},"end":{"row":187,"column":9},"action":"insert","lines":["r"],"id":51}],[{"start":{"row":187,"column":9},"end":{"row":187,"column":10},"action":"insert","lines":["o"],"id":52}],[{"start":{"row":187,"column":10},"end":{"row":187,"column":11},"action":"insert","lines":["m"],"id":53}],[{"start":{"row":187,"column":11},"end":{"row":187,"column":12},"action":"insert","lines":["e"],"id":54}],[{"start":{"row":187,"column":12},"end":{"row":187,"column":13},"action":"insert","lines":["s"],"id":55}],[{"start":{"row":187,"column":40},"end":{"row":187,"column":44},"action":"remove","lines":["card"],"id":56},{"start":{"row":187,"column":40},"end":{"row":187,"column":46},"action":"insert","lines":["chrome"]}],[{"start":{"row":187,"column":69},"end":{"row":187,"column":73},"action":"remove","lines":["card"],"id":57},{"start":{"row":187,"column":69},"end":{"row":187,"column":75},"action":"insert","lines":["chrome"]}]]},"ace":{"folds":[],"scrolltop":2820,"scrollleft":0,"selection":{"start":{"row":187,"column":75},"end":{"row":187,"column":75},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":164,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1554848597426,"hash":"a41863984bea43c285b2dfd0fc2d25a0b18c1463"}