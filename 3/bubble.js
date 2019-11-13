async function bubblesort(aa) {
    var n = aa.length;
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n - i - 1; j++) {
        if (aa[j+1]< aa[j]) {
        var temp= aa[j];
        aa[j]= aa[j+1];
        aa[j+1]=temp;
        await draw(aa,j,j+1);
        await sleep(delay); 
    }
  }
 }await draw(aa,-1,-1);
}
async function bubblesortRev(aa) {
    var n = aa.length;
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n - i - 1; j++) {
        if (aa[j+1]> aa[j]) {
        var temp= aa[j];
        aa[j]= aa[j+1];
        aa[j+1]=temp;
        await draw(aa,j,j+1);
        await sleep(delay); 
    }
  }
 }await draw(aa,-1,-1);
}

