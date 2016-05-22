## MORE NESTED LOOPS


```
var months = ["January", "February", "March", "April", "May", "June",
           "July", "August", "September", "October", "November", "December"];
```


Timothy D. Bowlcut is an events planner, and he has a list of `months` in the year that he uses for planning. When January has gone, he wants a new list without January. When February has gone, he wants a new list without January or February. He wants this all the way up until December is the only one left.

Give Timothy all the lists in order that he wants.

You will eventually need nested *for loops* to solve this, but start with one *for loop* to get all the months.

Expected output:

```
=>

["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
["February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
["March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
["April", "May", "June", "July", "August", "September", "October", "November", "December"]
["May", "June", "July", "August", "September", "October", "November", "December"]
["June", "July", "August", "September", "October", "November", "December"]
["July", "August", "September", "October", "November", "December"]
["August", "September", "October", "November", "December"]
["September", "October", "November", "December"]
["October", "November", "December"]
["November", "December"]
["December"]
```

