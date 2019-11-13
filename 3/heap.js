
  async function heapsort(aa, left, right) {
    if (typeof(left) === 'undefined') left = 0;
    if (typeof(right) === 'undefined') right = aa.length - 1;
    var n = right - left + 1;

    async function sift_down(start, end) {
      var root = start;
      while (true) {
        var left_child = 2 * (root - left) + 1 + left;
        var right_child = 2 * (root - left) + 2 + left;
        if (left_child > end) break;

        var swap = root;
        if (aa[swap]< aa[left_child]) {
          swap = left_child;
        }
        if (right_child <= end && aa[swap]<aa[right_child]) {
          swap = right_child;
        }
        if (swap === root) {
          return;
        }
          var temp = aa[root];
          aa[root]=aa[swap];
          aa[swap]=temp;
//          draw(aa,swap,root);
//         sleep(delay);
          root = swap;
      }
    }

    // First build a heap
    var start = Math.floor(n / 2) - 1 + left;
    while (start >= left) {
      sift_down(start, right);
      start--;
    }

    // Now pop elements one by one, rebuilding the heap after each
    var end = right;
    while (end > left) {
      var temp = aa[end];
          aa[end]=aa[left];
          aa[left]=temp;
          await draw(aa,end,left);
          await sleep(delay*2);
      end--;
      sift_down(left, end);
    }
      await draw(aa,-1,-1);
  } 
