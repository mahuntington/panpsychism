# EULER1

result = (1...10).select do |num|
	num % 3 == 0 || num % 5 == 0
end.reduce(:+)


# PALINDROME

def palindrome(word)
	word == word.downcase.reverse
end


# BUBBLE SORT

def bubblesort(arr)
	swap = true
	while swap do
		swap = false
		(arr.length - 1).times do |i|
			if arr[i] > arr[i + 1]
				arr[i], arr[i + 1] = arr[i + 1], arr[i]
				swap = true
			end
		end
	end
	arr
end


# PRIMES

require 'prime'

def sum_primes(num)
	sum = 0
	Prime.each(num) do |n|
		sum += n
	end
	sum
end

