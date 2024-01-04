<div class='cmain'>
  <nav class='cnav'>
    <a class='cfile' onClick='showCode(this)' target='py-a'>py-a</a>
    <a class='cfile' onClick='showCode(this)'  target='py-b'>py-b</a>
  </nav>
 <br>
 <div class='code' id='py-a' main=' '>
   
  ```python
import sys

def input(): return sys.stdin.readline().rstrip()

s = set()

for _ in range(int(input())):
    x, y = map(int, input().split())
    i, j = '+' if x > 0 else '-', '+' if y > 0 else '-'

    if x == 0: i = ''
    if y == 0: j == ''

    re = i + j + '0.0'

    if x != 0: re = i + j + str(y / x)
    s.add(re)

print(len(s))
```


 </div>
 <div class='code' id='py-b'>

  ```python
import sys

def input(): return sys.stdin.readline().rstrip()

s = set()

for _ in range(int(input())):
    x, y = map(int, input().split())
    i, j = '+' if x > 0 else '-', '+' if y > 0 else '-'

    if x == 0: i = ''
    if y == 0: j == ''

    re = i + j + '0.0'

    if x != 0: re = i + j + str(y / x)
    s.add(re)

print(len(s))
print('a')
```
   
 </div>
</div>
