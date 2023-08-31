# -*- coding: utf-8 -*-
"""
Created on Sun Aug 27 05:02:32 2023

@author: Osama
"""


def fib(n):
    if n==0 :
        return 0
    elif n==1 :
        return 1
    return fib(n-1)+fib(n-2)

# Check whether the input is positive
def positive(n):
    while n < 1:
        print("Invalid input,try again input must be positive")
        n = int(input("Enter:"))
        

n = int(input("Enter:"))
positive(n)

    
print("[",end=" ")

for i in range(n):
    print(fib(i),end=" ")
print("]")

    