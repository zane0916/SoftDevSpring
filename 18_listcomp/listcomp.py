'''
Team Zadical -- Addison Huang and Zane Wang
SoftDev2 pd 8
K18 
2019-04-16
'''

#all numbers in each pythagorean triplet is less than n
#the pythagorean triplets have sum of smaller two squared equals to largest squared
def pythTriple(n):
    return [[y,x,z] for x in range (1,n) for y in range(1,x) for z in range(1,n) if x**2 +y**2 == z**2]

print(pythTriple(20))

#first element is the pivot
#qsorts the elements of the array that are less than pivot
#then adds the pivot
#qsorts the elements of the array that are larger than pivot afterwards
def qsort(array):
    return qsort([x for x in array[1:] if x <= array[0]]) + [array[0]] + qsort([x for x in array[1:] if x > array[0]]) if len(array) > 1 else array

print(qsort([7,1,5,12,3]))
print(qsort([4,1,23,7,8,23,6,1,8,9,12]))
