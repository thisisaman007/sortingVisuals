async function insertionsort(aa) {
    var n = aa.length;
    for (var i = 1; i < n; i++) {
      for (var j = i; j > 0 && aa[j]< aa[j-1]; j--) {
        var temp= aa[j];
        aa[j]= aa[j-1];
        aa[j-1]=temp;
        await draw(aa,j,j-1);
        await sleep(delay); 
      }
    }
    await draw(aa,-1,-1);
  }
async function insertionsortRev(aa) {
    var n = aa.length;
    for (var i = 1; i < n; i++) {
      for (var j = i; j > 0 && aa[j]> aa[j-1]; j--) {
        var temp= aa[j];
        aa[j]= aa[j-1];
        aa[j-1]=temp;
        await draw(aa,j,j-1);
        await sleep(delay); 
      }
    }
    await draw(aa,-1,-1);
  }
