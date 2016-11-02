//Bubble
function bubbleSort(arr){
	console.time('冒泡排序耗时');
	var len = arr.length;
	for(var i = 0; i < len; i++){
		for(var j = 1; j < len -1; j++){
			if(arr[j-1] > arr[j]){
				var temp = arr[j]
				arr[j] = arr[j-1]
				arr[j-1] = temp;
			}
		}
	}
	console.timeEnd('冒泡排序耗时');
	return arr;
}

function bubbleSortFlag(arr){
	console.time('改进后冒泡排序耗时');
    var i = arr.length;  
    while ( i > 0) {
        var pos= 0; //每趟开始时,无记录交换
        for (var j= 1; j< i; j++)
            if (arr[j-1]> arr[j]) {
                pos= j-1; //记录交换的位置
                var tmp = arr[j]; arr[j]=arr[j-1];arr[j-1]=tmp;
            }
        i= pos; //为下一趟排序作准备
     }
     console.timeEnd('改进后冒泡排序耗时');
     return arr;
}

function bubbleSortDual(arr) {
    var low = 0;
    var high= arr.length-1; //设置变量的初始值
    var tmp,j;
    console.time('2.改进后冒泡排序耗时');
    while (low < high) {
        for (j= low; j< high; ++j) //正向冒泡,找到最大者
            if (arr[j]> arr[j+1]) {
                tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
            }
        --high;                 //修改high值, 前移一位
        for (j=high; j>low; --j) //反向冒泡,找到最小者
            if (arr[j]<arr[j-1]) {
                tmp = arr[j]; arr[j]=arr[j-1];arr[j-1]=tmp;
            }
        ++low;                  //修改low值,后移一位
    }
    console.timeEnd('2.改进后冒泡排序耗时');
    return arr3;
}

//Selection
function selectionSort(arr){
	var len = arr.length;
	var minIndex, temp;
	console.time('Selection sort takes: ');
	for(var i = 0; i < len - 1; i++){
		minIndex = i;
		for(var j = i + 1; j < len; j++){
			if(arr[j] < arr[minIndex]){
				minIndex = j;
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	console.timeEnd('Selection sort takes: ');
	return arr;
}

/*
for checking if input is a array
	Object.prototype.toString.call(array).slice(8, -1) === 'Array'
*/

// Insertion
function insertionSort(arr){
	var len = arr.length;
	console.time('Insertion sort takes: ');
	for(var i = 1; i < len; i++){
		var key = arr[i]
		var j = i - 1;
		while(j >=0 && arr[j] > key){
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = key;
	}
	console.timeEnd('Insertion sort takes: ');
	return arr
}

function binaryInsertionSort(arr){
	var len = arr.length;
	console.time('Binary Insertion sort takes: ');
	for (var i = 1; i < len; i++){
		var key = arr[i], left = 0, right = i-1;
		// Travers odered array
		while(left <= right){
			var middle = parseInt((left + right)/2);
			if(key < arr[middle]){
				right = middle - 1;
			}else{
				left = middle + 1;
			}
		}
		for(var j = i - 1; j>=left; j--){
			arr[j+1] = arr[j];
		}
		arr[left] = key;

	}
	console.timeEnd('Binary Insertion sort takes: ');
	return arr
}

// Shell sort
function shellSort(arr){
	var len = arr.length,
		temp,
		gap = 1;
	console.time('Shell sort takes: ');
	while(gap < len/5){
		gap = gap * 5 + 1;
	}
	for(gap; gap>0; gap = Math.floor(gap/5)){
		//console.log(gap);
		for (var i = gap; i < len; i ++){
			temp = arr[i];
			for (var j = i-gap; j>=0 && arr[j] > temp; j-=gap){
				arr[j+gap] = arr[j];
				console.log(gap, i, j);
			}

			arr[j+gap] = temp;
		}
	}
	console.timeEnd('Shell sort takes: ');
	return arr
}

function shellSort_donald(arr){
	var len = arr.length,
		temp,
		gap = 1;
	console.time('Shell sort takes: ');
	gap = Math.floor(len / 2);
	for(gap; gap>0; gap = Math.floor(gap / 2)){
		//console.log(gap);
		for (var i = gap; i < len; i ++){
			temp = arr[i];
			for (var j = i-gap; j>=0 && arr[j] > temp; j-=gap){
				arr[j+gap] = arr[j];
				console.log(gap, i, j);
			}

			arr[j+gap] = temp;
		}
	}
	console.timeEnd('Shell sort takes: ');
	return arr
}

// Merge Sort
function mergeSort(arr){
	var len = arr.length;
	if(len < 2){
		return arr;
	}
	var middle = Math.floor(len / 2),
		left = arr.slice(0, middle),
		right = arr.slice(middle);
	console.log(len, left, middle, right);
	return merge(mergeSort(left), mergeSort(right));
}
function merge(c_left, c_right){
	var result = [];
	console.time('Merge sort takes: ');
	while(c_left.length && c_right.length){
		console.log("both while.")
		if(c_left[0] <= c_right[0]){
			result.push(c_left.shift());
		} else {
			result.push(c_right.shift());
		}
	}
	while(c_left.length){
		result.push(c_left.shift());
		console.log("left while.")
	}
		
	while(c_right.length){
		result.push(c_right.shift());
		console.log("right while.")
	}
	console.timeEnd('Merge sort takes: ');
	return result;
}

//Quick sort
function quickSort(arr, left, right) {
    console.time('1.Quick sort takes: ');
    if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof left === 'number' && typeof right === 'number') {
        if (left < right) {
            var x = arr[right], i = left - 1, temp;
            for (var j = left; j <= right; j++) {
                if (arr[j] <= x) {
                    i++;
                    console.log(i, j, arr)
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
            quickSort(arr, left, i - 1);
            quickSort(arr, i + 1, right);
        }
        console.timeEnd('1.Quick sort takes: ');
        return arr;
    } else {
        return 'array is not an Array or left or right is not a number!';
    }
}

function quickSort2(arr) {
    console.time('2.Quick sort takes: ');
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
console.timeEnd('2.Quick sort takes: ');
　　return quickSort2(left).concat([pivot], quickSort2(right));
};


// Heap sort
/*
@param  array */
function heapSort(array) {
    console.time('Heap sort takes: ');
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        //建堆
        var heapSize = array.length, temp;
        for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
            heapify(array, i, heapSize);
        }
        //堆排序
        for (var j = heapSize - 1; j >= 1; j--) {
            temp = array[0];
            array[0] = array[j];
            array[j] = temp;
            heapify(array, 0, --heapSize);
        }
        console.timeEnd('Heap sort takes: ');
        return array;
    } else {
        return 'array is not an Array!';
    }
}
/*
@param  arr 
@param  x  
@param  len */
function heapify(arr, x, len) {
    if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
        var l = 2 * x + 1, r = 2 * x + 2, largest = x, temp;
        if (l < len && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r < len && arr[r] > arr[largest]) {
            largest = r;
        }
        if (largest != x) {
            temp = arr[x];
            arr[x] = arr[largest];
            arr[largest] = temp;
            heapify(arr, largest, len);
        }
    } else {
        return 'arr is not an Array or x is not a number!';
    }
}


// Counting sort
function countingSort(arr){
	var len = arr.length, B = [], C = [], min = max = arr[0];
	console.time('Counting sort takes: ');
	for(var i = 0; i < len; i++){
		min = min <= arr[i] ? min : arr[i];
		max = max >= arr[i] ? max : arr[i];
		C[arr[i]] = C[arr[i]] ? C[arr[i]] + 1 : 1;
	}
	for(var j = min; j < max; j++){
		C[j+1] = (C[j+1]||0) + (C[j]||0);
	}
	for(var k = len - 1; k>=0; k--){
		B[C[arr[k]] - 1] = arr[k];
		C[arr[k]]--;
	}
	console.timeEnd('Counting sort takes: ');
	return B;

}
var arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
console.log(countingSort(arr)); //[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]


// Bucket Sort
function bucketSort(arr, num){
	if(arr.length <= 1){
		return arr;
	}
	var len = arr.length, buckets = [], result = [], min = max = arr[0], regex = '/^[1-9]+[0-9]*$/', space, n = 0;
	num = num || ((num > 1 && regex.test(num)) ? num : 10);
	console.log('Bucket sort takes: ');
	for(var i = 1; i < len; i++){
		min = min <= arr[i] ? min : arr[i];
		max = max >= arr[i] ? max : arr[i];
	}
	space = (max - min + 1) / num;
	for(var j = 0; j < len; j++){
		var index = Math.floor((arr[j] - min) / space);
		if(buckets[index]){ // Check if target bucket empty
			var k = buckets[index].length - 1;
			while(k>=0 && buckets[index][k] > arr[j]){
				buckets[index][k+1] = buckets[index][k];
				k--;
			}
			buckets[index][k+1] = arr[j];
		}else{ //empty bucket, init
			buckets[index] = [];
			buckets[index].push(arr[j]);
		}
	}
	while(n<num){
		result = result.concat(buckets[n]);
		n++;
	}
	console.timeEnd('Bucket sort takes: ');
	return result;
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];



var arr=[91,60,96,13,35,65,46,65,10,30,20,31,77,81,22];

console.log(heapSort(arr));//[10, 13, 20, 22, 30, 31, 35, 46, 60, 65, 65, 77, 81, 91, 96]

console.log(bubbleSort(arr))