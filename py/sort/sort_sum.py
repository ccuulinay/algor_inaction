__author__ = 'ccuulinay'

import re

# Bubble sort
def bubble_sort(list):
    length =  len(list)
    # First layer travers.
    for i in range(length):
        # Second layer travers.
        for j in range(1, length - i):
            if list[j - 1] > list[j]:
                # Exchange position
                list[j - 1], list[j] = list[j], list[j - 1]
    return list


def bubble_sort_flag(list):
    length = len(list)
    # First layter travers.
    for i in range(length):
        flag = True
        # Second layer travers.
        for j in range(1, length - i):
            if list[j-1] > list[j]:
                list[j-1], list[j] = list[j], list[j-1]
                flag = False
        if flag:
            # If no exchange happens, return list directly
            return list
    return list

def bubble_sort_dual(list):
    low = 0
    high = len(list) - 1
    while(low < high):
        for i in range(low, high):
            if list[i-1] > list[i]:
               list[i], list[i-1] = list[i-1], list[i]
        high-=1
        for i in range(high, low, -1):
            # i-=1
            if list[i+1] < list[i]:
                list[i], list[i+1] = list[i+1], list[i]
        low+=1
    return list


# Selection Sort
def selection_sort(list):
    length = len(list)
    for i in range(0, length):
        min = i
        for j in range(i+1, length):
            if list[j]<list[min]:
                min = j
                list[min], list[i] = list[i], list[min]
    return list


# Insertion Sort
def insert_sort(list):
    length = len(list)
    for i in range(1, length):
        # later element compare to former element and pick the small
        key = list[i]
        index = i - 1
        while(index >=0 and list[index] > key):
            list[index +1] = list[index]
            index-=1
        list[index + 1] = key
    return list


def insert_sort_binary(list):
    length = len(list)
    print(list)
    for i in range(1, length):
        # print (i)
        key = list[i]
        left = 0
        right = i-1
        while (left <= right):
            middle = int(round((left + right)/2))
            if key < list[middle]:
                right = middle - 1
            else:
                left = middle + 1
        print left
        j = i -1
        # Cannot use for j in range(i-1, left, -1)
        while j >= left:
            list[j + 1] = list[j]
            j-=1

        list[left] = key
        print (list)
    return list


# Shell Sort
def shell_sort(list):
    length = len(list)
    gap = int(round(length / 2))
    while gap > 0:
        for i in range(gap, length):
            key = list[i]
            j = i - gap
            while list[j] > key and j >= 0:
                list[j+gap] = list[j]
                j -= gap
            list[j+gap] = key
        gap = int(round(gap / 2))
    return list


# Merge Sort
def merge_sort(list):
    length = len(list)
    if length <=1:
        return list
    middle = length // 2
    left = list[:middle]
    right = list[middle:]
    return merge(merge_sort(left), merge_sort(right))


def merge(left, right):
    result = []
    l, r =0, 0
    while l<len(left) and r<len(right):
        if left[l] <= right[r]:
            result.append(left[l])
            l+=1
        else:
            result.append(right[r])
            r+=1
    result += left[l:]
    result += right[r:]
    return result


# Quick sort
def quick_sort(list):
    length = len(list)
    if length <= 1:
        return list
    else:
        less = []
        pivotList = []
        more = []
        pivot = list[0]
        for i in list:
            if i < pivot:
                less.append(i)
            elif i > pivot:
                more.append(i)
            else:
                pivotList.append(i)
        less = quick_sort(less)
        more = quick_sort(more)
        return less + pivotList + more

def qsort(list):
    if len(list) <= 1:
        return list
    else:
        pivot = list[0]
        return qsort([x for x in list[1:] if x < pivot]) + [pivot] + qsort([x for x in list[1:] if x >= pivot])

"""
One line version:
qs = lambda xs : ( (len(xs) <= 1 and [xs]) or [ qs( [x for x in xs[1:] if x < xs[0]] ) + [xs[0]] + qs( [x for x in xs[1:] if x >= xs[0]] ) ] )[0]
"""

# Heap sort
def heap_sort(list):
    length = len(list)
    if length <=1:
        return list
    # Build biggest heap
    for i in range((len(list) - 2) // 2, -1, -1):
        heapify(list, i, length)

    for j in range(length - 1, 0, -1):
        list[0], list[j] = list[j], list[0]
        length -= 1
        heapify(list, 0, length)
    return list


def heapify(list, x, length):
    l = 2 * x + 1
    r = 2 * x + 2
    largest = x
    if l < length and list[l] > list[largest]:
        largest = l
    if r < length and list[r] > list[largest]:
        largest = r
    if largest != x:
        temp = list[x]
        list[x] = list[largest]
        list[largest] = temp
        heapify(list, largest, length)


# counting sort
def count_sort(list):
    length = len(list)
    min = list[0]
    max = list[0]
    for x in list:
        if x >= max:
            max = x
        if x <= min:
            min = x
    count = [0] * (max - min + 1)
    for index in list:
        count[index - min] += 1
    index = 0
    for a in range(max - min +1):
        for c in range(count[a]):
            list[index] = a + min
            index += 1
    return list


# Bucket sort
def bucket_sort(list, num):
    if len(list) < 2 or min(list) == max(list):
        return list
    max_v, min_v = max(list), min(list)
    space = (max_v - min_v + 1)/num
    # print(space)
    result = []
    buckets = [[] for _ in range(num + 1)]
    for i in list:
        # print((i - min_v)//space)
        b = buckets[(i - min_v)//space]
        b.append(i)
        len_b = len(b)
        # print(len_b)
        # print (b)
        for j in range(len_b-1, 0, -1):
            index = j-1
            print(index)
            if b[index] > b[index + 1]:
                b[index], b[index+1] = b[index+1], b[index]
        print(b)
    for b in buckets:
        for x in b:
            result.append(x)
    return result


    # print (buckets)
    # return max(buckets[i][0] - buckets[i-1][1] for i in range(1, len(buckets)))



a = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
b = [91,60,96,13,35,65,46,65,10,30,20,31,77,81,22]
c = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
print (bucket_sort(a, 4))
# print (qsort(a))






