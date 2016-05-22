## USING RUBY METHODS


## PART ONE

arr = [["Live", "Laugh", "Love"], {hello: 'hi back'}, false, 333.333, nil, nil, ["Joy", "Joke", "Jerk"]]

arr.each do |item|
	puts item.class
end

# select and class
new_array = arr.select do |item|
	item.class == Array
end

new_arr.flatten.permutation.to_a

new_array2 = arr.reject do |item|
	item.class == Hash
end

## PART TWO

numbers = [4, 7, 8, 7, 9, 0, 4]

#permuation.to_a
permutations = numbers.permutation.to_a

# select, first, and last
perms = permutations.select do |item|
	item.first == 7 && item.last == 7
end

result1 = numbers.reduce(:+)

result2 = numbers.reduce(:*)


## PART THREE

strings = ["Paloma", "Grits", "Ziti", "Carbohydrates", "Grits", "Corn", "Wizard_robe", "Ziti", "Corn", "Corn", "Maize"]

hash = {}

strings.uniq.each do |hashkey|
	if hashkey == "Maize" then hash[hashkey] = "Not Fun"
	else hash[hashkey] = "Fun" end
end


## PART FOUR

students =  [
							"Amber",
							"Nicole",
							"Christine",
							"Dan",
							"Ashleigh",
							"Jordan",
							"Alex",
							"Emily",
							"John",
							"Sharon",
							"Levi",
							"Pauline",
							"Masha",
							"Matt",
							"Andy",
							"Sammy",
							"Dominic",
							"Vincent",
							"Jesse",
							"Juan",
							"Josh",
							"Derek"
						];

shuffled_students = students.shuffle

p shuffled_students.each_slice(3) { |stuff| p stuff };

# Go to jail
p students.sample






