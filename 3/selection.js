async function selectionsort(aa) {
    var n = aa.length;
    for (var i = 0; i < n - 1; i++) {
      var min_j = i;
      for (var j = i; j < n; j++) {
        if (aa[j] < aa[min_j])
        min_j = j;
      }
        var temp= aa[i];
        aa[i]= aa[min_j];
        aa[min_j]=temp;
        await draw(aa,i,min_j);
        await sleep(delay); 
    }
    await draw(aa,-1,-1);
  }

async function selectionsortRev(aa) {
    var n = aa.length;
    for (var i = n-1; i > 0; i--) {
      var min_j = i;
      for (var j = 0; j<i; j++) {
        if (aa[j] < aa[min_j])
        min_j = j;
      }
        var temp= aa[i];
        aa[i]= aa[min_j];
        aa[min_j]=temp;
        await draw(aa,i,min_j);
        await sleep(delay); 
    }await draw(aa,-1,-1);
  }
