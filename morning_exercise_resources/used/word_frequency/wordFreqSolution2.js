// DEREK'S

var wordFreq = function(str) {

    var x = str.toLowerCase();
    words = x.split(" ");
    words.sort();

    var mostFrequent = function(arr) {
        var uniqs = {};

        for (var i=0; i < arr.length; i++) {
            uniqs[arr[i]] = (uniqs[arr[i]] || 0) + 1;
        }

        var max = { val: arr[0], count: 1 };
        
        for (var u in uniqs) {
            if (max.count < uniqs[u]) {
                max = { val: u, count: uniqs[u] };
            }
        }

        return max.val + ': ' + max.count;
    }

    console.log(mostFrequent(words));

}

