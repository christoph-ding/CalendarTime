var timeTable = ["9:00AM", "9:30AM", "10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "12:30PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM", "3:00PM", "3:30PM", "4:00PM", "4:30PM", "5:00PM", "5:30PM", "6:00PM", "6:30PM", "7:00PM", "7:30PM", "8:00PM", "8:30PM"];

var schedule = {
  "9:00AM": [],
  "9:30AM": [],
  "10:00AM": [],
  "10:30AM": [],
  "11:00AM": [],
  "11:30AM": [],
  "12:00PM": [],
  "12:30PM": [],
  "1:00PM": [],
  "1:30PM": [],
  "2:00PM": [],
  "2:30PM": [],
  "3:00PM": [],
  "3:30PM": [],
  "4:00PM": [],
  "4:30PM": [],
  "5:00PM": [],
  "5:30PM": [],
  "6:00PM": [],
  "6:30PM": [],
  "7:00PM": [],
  "7:30PM": [],
  "8:00PM": [],
  "8:30PM": [],
};

var calculateSchedule = function(items) {
  for (var i = 0; i < items.length; i++) {
    putInSchedule(items[i]);
  }
  return schedule;
}

var putInSchedule = function(event) {
  var halfHourChunks = getHalfHourChunks(event);
  for (var i = 0; i < halfHourChunks.length; i++) {
    schedule[halfHourChunks[i]].push(event);
  }
  return;
};

var getHalfHourChunks = function(event) {
  return timeTable.slice(timeTable.indexOf(event.start_time), timeTable.indexOf(event.end_time));
}

var getMaxShared = function(event) {
  var halfHourChunks = getHalfHourChunks(event);
  var maxShared = 0;
  for (var i = 0; i < halfHourChunks.length; i++) {
    var currentChunk = schedule[halfHourChunks[i]];
    if (currentChunk.length > maxShared) {
      maxShared = currentChunk.length;
    }
  }
  return maxShared;
}

var calculateWidth = function(event) {
  return 90 / getMaxShared(event);
}

var calculateHeight = function(event) {
  return 48 * getHalfHourChunks(event);
} 

