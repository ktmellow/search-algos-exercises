Array.prototype.linearSearch = function(val){
  for(var i=0; i < this.length ; i++){
    if(this[i] === val) return i;
  }
  return -1;
};
/**
determine if asc or desc 
check if closer to front or back; pick that half
keep comparing to middle value
0 1 2 3 4 5 evens - until 2 left 
            odds - until 1 left
better to go evens or odds?
*/
Array.prototype.binarySearch = function(val){
  if(this[this.length - 1] === val) return this.length - 1;
  var dir = (this[0] > this[this.length - 1]) ? "desc": "asc";
  var upper = this.length %2 === 0 ? this.length-2 : this.length-1;
  var lower = 0;
  while(upper-lower) {
    var curMid = (upper + lower )/2
    if(val === this[curMid]) {
      return curMid;
    } else if(dir === "asc" && val > this[curMid]) {
      lower = curMid;
    } else if(dir === "desc" && val < this[curMid]){
      lower = curMid;
    } else {
      upper = curMid;
    }
  }
  return -1;
};

module.exports = { Array };


