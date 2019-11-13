
async function choose_pivot(aa, pivot_type, left, right) {
    if (typeof(left) === 'undefined') left = 0;
    if (typeof(right) === 'undefined') right = aa.length() - 1;
    var pivot = null;
    if (pivot_type === 'random') {
      pivot = Math.floor(Math.random()*(right-left))+left;
    }else {
      throw 'Invalid pivot_type ' + pivot_type;
    }
    return pivot;
  }


 async function partition(aa, pivot_type, left, right) {
    var pivot = choose_pivot(aa, pivot_type, left, right);
    var temp= aa[pivot];
        aa[pivot]= aa[right];
        aa[right]=temp;
         draw(aa,pivot,right);
         sleep(delay);

    // Partition the array around the pivot.
    pivot = left;
    for (var i = left; i < right; i++) {
      if (aa.lessThan(i, right)) {
        if (i != pivot) {
          var temp= aa[pivot];
        aa[pivot]= aa[i];
        aa[i]=temp;
         draw(aa,pivot,i);
         sleep(delay);
        }
        pivot += 1;
      }
    }
    var temp= aa[pivot];
        aa[pivot]= aa[right];
        aa[right]=temp;
        await draw(aa,pivot,right);
        await sleep(delay);

    return pivot;
  }


  async function quicksort(aa, pivot_type, left, right) {
    var n = aa.length;
    if (typeof(left) === 'undefined') left = 0;
    if (typeof(right) === 'undefined') right = n - 1;

    if (left >= right) return;

    var pivot = partition(aa, pivot_type, left, right);
    quicksort(aa, pivot_type, left, pivot - 1);
    quicksort(aa, pivot_type, pivot + 1, right);
  }