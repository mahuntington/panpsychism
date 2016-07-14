# Morning Exercise

##Let's Look at the Differences

## Rewrite the following Javascript functions in Ruby

### Get Name
# ```javascript
# var getName = function () {
#   var name = prompt("what is your name?");
#   return name;
# };
# ```

# ###Reverse It
# ```javascript
# var reverseIt = function () {
#   var string = "a man, a plan, a canal, frenemies!";

#   var reverse = "";

#   for (var i=0; i < string.length; i++) {
#     reverse += string[string.length - (i+1)];
#   };

#   alert(reverse);
# };
# ```
# ###Swap Em
# ```javascript
# var swapEm = function () {
#   var a = 10;
#   var b = 30;
#   var temp;

#   temp = b;
#   b = a;
#   a = temp;

#   alert("a is now " + a + ", and b is now " + b);
# };
# ```
# ###Multiply Array
# ```javascript
# var multiplyArray = function (ary) {
#   if (ary.length == 0) { return 1; };

#   var total = 1;
#   // var total = ary[0];

#   for (var i=0; i < ary.length; i++) {
#     total = total * ary[i];
#   };

#   return total;
# };
# ```
# ### Fizz Buzzer
# ```javascript
# var fizzbuzzer = function(x){
#   if( x%(3*5) == 0 ) {
#     return 'fizzbuzz'
#   } else if( x%3 == 0 ) {
#     return 'fizz'
#   } else if ( x%5 == 0 ) {
#     return 'buzz'
#   } else {
#     return 'archer'
#   }
# }
# ```
# ###Nth Fibonacci
# ```javascript
# var nthFibonacciNumber = function () {
#   var fibs = [1, 1];
#   var num = prompt("which fibonacci number do you want?");

#   while (fibs.length < parseInt(num)) {
#     var length = fibs.length;
#     var nextFib = fibs[length - 2] + fibs[length - 1];
#     fibs.push(nextFib);
#   }

#   alert(fibs[fibs.length - 1] + " is the fibonacci number at position " + num);
# };
# ```

# ### Search Array
# ``` javascript
# var searchArray = function(array,value) {
#   for(var i = 0; i < array.length-1; i++) {
#     if(array[i] == value) {
#       return true;
#       break;
#     }
#   }
#   return -1;
# };
# ```

# ### Palindrome
# Write a method that checks whether or not a string is a palindrome. 
# Here is the javascript:
# ``` javascript
# var isPalindrome = function(str) {
#   for(var i = 0; i < str.length/2; i++){
#     if(str[i] != str[str.length-i-1]){
#       return false;
#       break;
#     }
#     return true;
#   }
# };
# ```

# ### hasDupes
# Write a method that checks whether or not an array has any duplicates. 
# Here is the javascript:
# ``` javascript
# var hasDupes = function(arr){
#   var obj = {};
#   for (i = 0; i < arr.length; i++) {
#     if(obj[arr[i]]) {
#       return true;
#     }
#     else {
#       obj[arr[i]] = true;
#     }
#   }
#   return false;
# };
```
////////////////////////////
# SOLUTIONS

### Get Name
```javascript
var getName = function () {
  var name = prompt("what is your name?");
  return name;
};
```

```Ruby
print "what is your name?"
name = gets.chomp
```

###Reverse It
```javascript
var reverseIt = function () {
  var string = "a man, a plan, a canal, frenemies!";

  var reverse = "";

  for (var i=0; i < string.length; i++) {
    reverse += string[string.length - (i+1)];
  };

  alert(reverse);
};
```

```Ruby
string = "a man, a plan, a canal, frenemies!"
string.reverse!

```
###Swap Em
```javascript
var swapEm = function () {
  var a = 10;
  var b = 30;
  var temp;

  temp = b;
  b = a;
  a = temp;

  alert("a is now " + a + ", and b is now " + b);
};
```

```Ruby
a = 10
b = 30
c = a
a = b
b = c
puts ("a is now " + b + ", and b is now " + a)
```
###Multiply Array
```javascript
var multiplyArray = function (ary) {
  if (ary.length == 0) { return 1; };

  var total = 1;
  // var total = ary[0];

  for (var i=0; i < ary.length; i++) {
    total = total * ary[i];
  };

  return total;
};
```

```Ruby
def multiply_array(ary)
  if ary.length === 0
    0
  else
    iterator = ary.length
    total = 1
    unless iterator === 0
      total *= ary.iterator
      iterator -= 1
  end
  total
end
```
### Fizz Buzzer
```javascript
var fizzbuzzer = function(x){
  if( x%(3*5) == 0 ) {
    return 'fizzbuzz'
  } else if( x%3 == 0 ) {
    return 'fizz'
  } else if ( x%5 == 0 ) {
    return 'buzz'
  } else {
    return 'archer'
  }
}
```
```Ruby
def fizzbuzzer(num)
  if (x % (3*5)) === 0
    'fizzbuzz'
  elsif (x % 3) === 0
    'fizz'
  elsif (x % 5) === 0
    'buzz'
  else
    'funke'
  end
end
```

###Nth Fibonacci
```javascript
var nthFibonacciNumber = function () {
  var fibs = [1, 1];
  var num = prompt("which fibonacci number do you want?");

  while (fibs.length < parseInt(num)) {
    var length = fibs.length;
    var nextFib = fibs[length - 2] + fibs[length - 1];
    fibs.push(nextFib);
  }

  alert(fibs[fibs.length - 1] + " is the fibonacci number at position " + num);
};
```
```Ruby
def nth_fibonacci_number
  puts 'which fibonacci number do you want?'
  user_input = gets.chomp.to_i
  fibs = [1, 1]
   until (fibs.length >= user_input) #code block if NOT conditional
    fibs << (fibs[fibs.length - 2] + fibs[fibs.length - 1])
   end
   fibs[user_input - 1]
 end


 def nth_fibonacci_number
   puts 'which fibonacci number do you want?'
   user_input = gets.chomp.to_i
   fibs = [1, 1]
    loop do
     fibs << (fibs[fibs.length-2] + fibs[fibs.length-1])
     break if (fibs.length >= user_input)
    end
    fibs[user_input - 1]
  end
```


### Search Array
``` javascript
var searchArray = function(array,value) {
  for(var i = 0; i < array.length-1; i++) {
    if(array[i] == value) {
      return true;
      break;
    }
  }
  return -1;
};
```
```Ruby
def search_array(array, value)
  if array.include?(value)
    true
  else
    -1
  end
end

def search_array(array, value)
  -1 unless array.include?(value)
    true
  end
end
```


### Palindrome
Write a method that checks whether or not a string is a palindrome.
Here is the javascript:
``` javascript
var isPalindrome = function(str) {
  for(var i = 0; i < str.length/2; i++){
    if(str[i] != str[str.length-i-1]){
      return false;
      break;
    }
    return true;
  }
};
```

```Ruby
def is_palindrome(str)
  false unless isPalindrome === isPalindrome.reverse
    true
  end
end
```

### hasDupes
Write a method that checks whether or not an array has any duplicates.
Here is the javascript:
``` javascript
var hasDupes = function(arr){
  var obj = {};
  for (i = 0; i < arr.length; i++) {
    if(obj[arr[i]]) {
      return true;
    }
    else {
      obj[arr[i]] = true;
    }
  }
  return false;
};
```

```Ruby
def has_dupes(arr)
  false unless arr.uniq.length === arr.length
    true
  end
end
```
