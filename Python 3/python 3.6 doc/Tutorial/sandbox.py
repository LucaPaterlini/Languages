#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# the_world_is_flat = True
# if the_world_is_flat:
#     print("Be careful not to fall off!")

# last printed expression assigned to _

# print(r'C:\\n')
# print('Ci''ao') # two string literals are automatically concatenated
# print(list(range(10)))

# the else statement in the for loop
# for n in range(2,10):
#     for x in range(2,n):
#         if n%x==0:
#             print(n, 'equals', x,'*',n//x)
#             break
#     else:
#         print(n,'is a prime number')

# for num in range(2, 10):
#     if num % 2 == 0:
#         print("Found an even number",num)
#         continue
#     print("Found a number",num)

# def fib(n):
#     result=[]
#     a, b = 0, 1
#     while a < n:
#         result.append(a)
#         a, b = b, a+b
#     return result
#
# fib(2000)
# f=fib
# print(f(99));print(f(0))

# def ask_ok(prompt, retries=4, reminder='Please try again!'):
#     while True:
#         ok = input(prompt)
#         if ok in ('y', 'ye', 'yes'):
#             return True
#         if ok in ('n', 'no', 'nop', 'nope'):
#             return False
#         retries = retries - 1
#         if retries < 0:
#             raise ValueError('invalid user response')
#         print(reminder)
#
# ask_ok('OK to overwrite the file?', 2, 'Come on, only yes or no!')

# trick
# i = 5
# def f(arg=i):print(arg)
# i = 6
# f()

# default shared betetn different calls
#
# def f(a, L=None):
#     if L is None:
#         L = []
#     L.append(a)
#     return L
#
# print(f(1))
# print(f(2))
# print(f(3))

# kword arguments using dict for paramters

# def parrot(voltage, state='a stiff', action='voom', type='Norwegian Blue'):
#     print("-- This parrot wouldn't", action, end=' ')
#     print("if you put", voltage, "volts through it.")
#     print("-- Lovely plumage, the", type)
#     print("-- It's", state, "!")

# parrot(1000)                                          # 1 positional argument
# parrot(voltage=1000)                                  # 1 keyword argument
# parrot(voltage=1000000, action='VOOOOOM')             # 2 keyword arguments
# parrot(action='VOOOOOM', voltage=1000000)             # 2 keyword arguments
# parrot('a million', 'bereft of life', 'jump')         # 3 positional arguments
# parrot('a thousand', state='pushing up the daisies')

# parrot()                     # required argument missing
# parrot(voltage=5.0, 'dead')  # non-keyword argument after a keyword argument
# parrot(110, voltage=220)     # duplicate value for the same argument
# parrot(actor='John Cleese')  # unknown keyword argument



# lambda

# def make_incrementor(n):return lambda x: x + n
# f = make_incrementor(42)
# print(f(0),f(1))

#sort

# pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
# pairs.sort(key=lambda pair: pair[1])
# print(pairs)

# def my_function():
#     """Do nothing, but document it.
#
#     No, really, it doesn't do anything.
#     """
#     pass
#
# print(my_function.__doc__)

# def f(ham: str, eggs: str = 'eggs') -> str:
#     print("Annotations:",f.__annotations__)
#     print("Arguments:", ham, eggs)
#     return ham + ' and ' + eggs
# f("spam")

#for i,v in enumerate(['tic','tac','toe']): print(i, v)

#print(*zip([1,1,None],['a','b','c']))

#string representation

# s='Hello World'
# print(repr(s))

#print('12'.zfill(4))
#print('We are the {} who say "{}!"'.format('knights', 'Ni'))
#print('This {food} is {adjective}.'.format(food='spam', adjective='absolutely horrible'))
# def foo():
#     a='banana'
#     print(vars().keys())
# foo()
#x={'a':1,'b':2}
#import json
#with open('json_serialize','a') as f: print(json.dumps(x))
# print(f.close)


# section 8: Errors Handling
