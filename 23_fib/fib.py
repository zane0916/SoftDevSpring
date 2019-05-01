import random

'''
def make_HTML_heading(f):
    def inner():
        return '<h1>' + f() + '</h1>'
    return inner

# equiv to greet = make_HTML_heading(greet)
@make_HTML_heading
def greet():
    greetings = ['Hello','Welcome','AYO!','Hola','Bonjour','Word Up']
    return random.choice(greetings)

print(greet())
'''

def memoize(f):
    memo = {}
    def helper(x):
        nonlocal memo
        memo[x] : f(x)
        return f(x)
    return helper

@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print(fib(40))
print(fib(50))
