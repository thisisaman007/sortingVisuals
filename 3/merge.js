async function mergesort(aa, left, right) {
    if (typeof(left) === 'undefined') left = 0;
    if (typeof(right) === 'undefined') right = aa.length - 1;

    if (left >= right) return;
    
    var mid = Math.floor((left + right) / 2);

    if (right - left > 1) {
      mergesort(aa, left, mid);
      mergesort(aa, mid + 1, right);
    }

    // Merge, building up a permutation. This could probably be prettier.
    var next_left = left;
    var next_right = mid + 1;
    var perm = [];
    for (var i = left; i <= right; i++) {
      var choice = null;
      if (next_left <= mid && next_right <= right) {
        if (aa[next_left] < aa[next_right]) {
          choice = 'L';
        } else {
          choice = 'R';
        }
      } else if (next_left > mid) {
        choice = 'R';
      } else if (next_right > right) {
        choice = 'L';
      }
      if (choice === 'L') {
        perm.push(next_left - left);
        next_left++;
      } else if (choice === 'R') {
        perm.push(next_right - left);
        next_right++;
      } else {
        throw 'Should not get here'
      }
    }

    var swaps = perm_to_swaps(perm);
    for (var i = 0; i < swaps.length; i++) {
        var j=swaps[i][0] + left;
        var k= swaps[i][1] + left
        var temp=aa[j];
        aa[j]=aa[k];
        aa[k]=temp;
        console.log(j,k);
       await  draw(aa,j,k);
        await sleep(delay); 
        
    }
  }
function perm_to_swaps(perm) {
    /*
     *  Convert a permutation to a sequence of transpositions.
     *  
     *  We represent a general permutation as a list of length N
     *  where each element is an integer from 0 to N - 1, with the
     *  interpretation that the element at index i will move to index
     *  perm[i].
     *
     *  In general any permutation can be written as a product of
     *  transpositions; we represent the transpostions as an array t of
     *  length-2 arrays, with the interpretation that we first swap
     *  t[0][0] with t[0][1], then swap t[1][0] with t[1][1], etc.
     *
     *  Input: perm, a permutation
     *  Returns: transpositions: a list of transpositions.
     */
    if (!check_perm(perm)) {
      console.log(perm);
      throw "Invalid permutation";
    }
    var n = perm.length;
    var used = [];
    for (var i = 0; i < n; i++) used.push(false);
    var transpositions = [];

    for (var i = 0; i < n; i++) {
      if (used[i]) continue;
      var cur = i;
      if (perm[i] == i) used[i] = true;
      while (!used[perm[cur]]) {
        transpositions.push([cur, perm[cur]]);
        used[cur] = true;
        cur = perm[cur];
      }
    }
    return transpositions;
  }
function check_perm(perm) {
    // Check to see if an array is a valid permutation.
    var n = perm.length;
    var used = {};
    for (var i = 0; i < n; i++) {
      if (used[perm[i]]) return false;
      used[perm[i]] = true;
    }
    for (var i = 0; i < n; i++) if (!used[i]) return false;
    return true;
  }
