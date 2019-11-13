var canvas =document.querySelector('canvas');
canvas.width=window.innerWidth*.97;
canvas.height=window.innerHeight*.93;

var arr = [];  //create empty array
var arrayLength=localStorage.getItem("arrayLength");
var delay=localStorage.getItem("delay");
var algo=localStorage.getItem("algo");
console.log(algo);
var arrangement=localStorage.getItem("arrangement");

if(algo === "bubble"){
    document.getElementById("sort").onclick = function() {bubblesort(arr);};
    document.getElementById("ref").onclick = function() {ref();};
    document.getElementById("rev").onclick = function() {bubblesortRev(arr);};
    document.getElementById("head").innerHTML="bubble sort";
    document.getElementById("para").innerHTML="Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements bubble to the top of the list.<br>Bubble sort has a worst-case and average complexity of О(n2), where n is the number of items being sorted. Most practical sorting algorithms have substantially better worst-case or average complexity, often O(n log n). Even other О(n2) sorting algorithms, such as insertion sort, generally run faster than bubble sort, and are no more complex.<br>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.<br>Example:<br>First Pass:<br>( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.<br>( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4<br> ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2<br>( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.<br>Second Pass:<br>( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )<br>( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2<br>( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )<br>( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )<br>Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.<br>Third Pass:<br>( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )<br>( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )<br>( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )<br>( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )";
}
else if(algo === "heap"){
    document.getElementById("sort").onclick = function() {heapsort(arr);};
    document.getElementById("ref").onclick = function() {ref();};
    document.getElementById("rev").onclick = function() {bubblesortRev(arr);};
    document.getElementById("head").innerHTML="heap sort";
    document.getElementById("para").innerHTML="heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: like that algorithm, it divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element and moving that to the sorted region. The improvement consists of the use of a heap data structure rather than a linear-time search to find the maximum.<br>Although somewhat slower in practice on most machines than a well-implemented quicksort, it has the advantage of a more favorable worst-case O(n log n) runtime. Heapsort is an in-place algorithm, but it is not a stable sort.";
}
else if(algo === "insertion"){
document.getElementById("sort").onclick = function() {insertionsort(arr);};
document.getElementById("ref").onclick = function() {ref();};
document.getElementById("rev").onclick = function() {insertionsortRev(arr);};
    document.getElementById("head").innerHTML="Insertion sort";
    document.getElementById("para").innerHTML="Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.<br>Sorting is typically done in-place, by iterating up the array, growing the sorted list behind it. At each array-position, it checks the value there against the largest value in the sorted list (which happens to be next to it, in the previous array-position checked). If larger, it leaves the element in place and moves to the next. If smaller, it finds the correct position within the sorted list, shifts all the larger values up to make a space, and inserts into that correct position.<br>The resulting array after k iterations has the property where the first k + 1 entries are sorted (+1 because the first entry is skipped). In each iteration the first remaining entry of the input is removed, and inserted into the result at the correct position, thus extending the result:";
}
else if(algo === "merge"){
document.getElementById("sort").onclick = function() {mergesort(arr);};
document.getElementById("ref").onclick = function() {ref();};
document.getElementById("rev").onclick = function() {selectionsortRev(arr);};
    document.getElementById("head").innerHTML="merge sort";
    document.getElementById("para").innerHTML="Like QuickSort, Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.";
}
else if(algo === "quick"){
    var pivotpt="random";
    document.getElementById("sort").onclick = function() {quicksort(arr,pivotpt);};
    document.getElementById("ref").onclick = function() {ref();};
    document.getElementById("rev").onclick = function() {bubblesortRev(arr);};
    document.getElementById("head").innerHTML="quick sort";
    document.getElementById("para").innerHTML="Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.<br>Always pick first element as pivot.<br>Always pick last element as pivot (implemented below)<br>Pick a random element as pivot.<br>Pick median as pivot.<br>The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.";
}
else if(algo === "selection"){
    document.getElementById("sort").onclick = function() {selectionsort(arr);};
    document.getElementById("ref").onclick = function() {ref();};
    document.getElementById("rev").onclick = function() {selectionsortRev(arr);};
    document.getElementById("head").innerHTML="selection sort";
    document.getElementById("para").innerHTML=" selection sort is a sorting algorithm, specifically an in-place comparison sort. It has O(n2) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.<br>The algorithm divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right. Uniqueness of selection sort when compared to other sorting techniques:The time efficiency of selection sort is quadratic, so there exists a number of sorting techniques which have better time complexity than selection sort. Even then, considering the number of swaps made, the number of swaps will be n-1 both in worst as well as best case. That is, time efficiency of selection sort with respect to swaps is linear. This property distinguishes selection sort positively from many other sorting algorithms.";
}



for(var i = 0; i< arrayLength; i++){
    arr.push((Math.random())*canvas.height);
}

async function draw(n, current1, current2) 
{
 	if (canvas.getContext)
    {
        var ctx = canvas.getContext('2d');
        var width = canvas.width/arr.length;
        var currX = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(var i = 0; i < n.length; i++)
        {
            if(i == current1 || i== current2)
            {
                ctx.fillStyle = 'red';
            }else if(current1===-1 && current2===-1){
                ctx.fillStyle = 'rgba(0, 255, 0, 0.72)';
            }
            else {
                ctx.fillStyle = 'blue';
            }
        ctx.strokeStyle= 'black';
        ctx.strokeRect(currX, canvas.height - n[i], width, n[i]);
        ctx.fillRect(currX, canvas.height - n[i], width, n[i]);
        ctx.font=width/2+"px Arial";
        ctx.fillText(Math.floor(n[i]),currX, canvas.height - n[i]);
        currX += width;
	   }
    }
}
function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve ,ms));
}

function ref(){ //Refreshes the page
shuffle(arr);
draw(arr,0, 0);
}
    
function shuffle(array) {//shuffles the array
    var currentIndex = array.length, temporaryValue, randomIndex;
	  // While there remain elements to shuffle...
	  while (currentIndex !== 0) {		    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
return array;
}


if(arrangement === "inc"){
    arr.sort(function(a,b){return a-b});
    draw(arr, 0, 0);
}else if(arrangement === "dec"){
    arr.sort(function(a,b){return b-a });
    draw(arr,0,0);
}
else{
    draw(arr, 0, 0);
}