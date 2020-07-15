<<<<<<< HEAD

# https://gist.github.com/epoch/d5940ff7ace0d2f485cb

require 'pry'
# hashes.md
# Array and Hash access
# A. Given the following data structure:

a = ["Anil", "Erik", "Jonathan"]

# How would you return the string "Erik"?

puts a[1]

# How would you add your name to the array?

a.push("Tarik")
puts a

# B. Given the following data structure:
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# How would you return the string "One"?

puts h[1]

# How would you return the string "Two"?

puts h[:two]


# How would you return the number 2?

puts h["two"]


# How would you add {3 => "Three"} to the hash?

h[3] = "Three"
puts h

# How would you add {:four => 4} to the hash?

h[:four] = 4
puts h

# C. Given the following data structure:
is = {true => "It's true!", false => "It's false"}

# What is the return value of is[2 + 2 == 4]?
# "It's true!"

# # What is the return value of is["Erik" == "Jonathan"]?
# "It's false"

# # What is the return value of is[9 > 10]?
# "It's false"


# What is the return value of is[0]?
nil


# What is the return value of is["Erik"]?
nil

# D. Given the following data structure:
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]

# How would you add the number 7 to Erik's favorite numbers?
# users["Erik"][:favorite_numbers].push(7)

# How would you add yourself to the users hash?
# users["Tarik"] = {
#     :twitter => "@realDonaldTrump",
#     :favorite_numbers => [0,1,2,5],
# }
# p users

# How would you return the array of Erik's favorite numbers?
p users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?
p users["Erik"][:favorite_numbers].min


# How would you return an array of Anil's favorite numbers that are also even?
arr = users["Anil"][:favorite_numbers].select do |n|
    n.even?()
end
p arr

# How would you return an array of the favorite numbers common to all users?
new_arr = users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers]
p new_arr

# common_num = []
# users.each do |key, value|
#   # p value[:favorite_numbers]
#   common_num &= value[:favorite_numbers]
# end
# p common_num


# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
newer_arr = users["Jonathan"][:favorite_numbers] | users["Erik"][:favorite_numbers] | users["Anil"][:favorite_numbers]
newer_arr.sort!
p newer_arr

# newer_arr = []
# users.each do |key, value|
#   newer_arr |= value[:favorite_numbers]
# end
# newer_arr.sort!
# p newer_arr

# can also use uniq() to get rid of duplicates after u combine all of them and sort them with sort()

=======

# https://gist.github.com/epoch/d5940ff7ace0d2f485cb

require 'pry'
# hashes.md
# Array and Hash access
# A. Given the following data structure:

a = ["Anil", "Erik", "Jonathan"]

# How would you return the string "Erik"?

puts a[1]

# How would you add your name to the array?

a.push("Tarik")
puts a

# B. Given the following data structure:
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# How would you return the string "One"?

puts h[1]

# How would you return the string "Two"?

puts h[:two]


# How would you return the number 2?

puts h["two"]


# How would you add {3 => "Three"} to the hash?

h[3] = "Three"
puts h

# How would you add {:four => 4} to the hash?

h[:four] = 4
puts h

# C. Given the following data structure:
is = {true => "It's true!", false => "It's false"}

# What is the return value of is[2 + 2 == 4]?
# "It's true!"

# # What is the return value of is["Erik" == "Jonathan"]?
# "It's false"

# # What is the return value of is[9 > 10]?
# "It's false"


# What is the return value of is[0]?
nil


# What is the return value of is["Erik"]?
nil

# D. Given the following data structure:
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]

# How would you add the number 7 to Erik's favorite numbers?
# users["Erik"][:favorite_numbers].push(7)

# How would you add yourself to the users hash?
# users["Tarik"] = {
#     :twitter => "@realDonaldTrump",
#     :favorite_numbers => [0,1,2,5],
# }
# p users

# How would you return the array of Erik's favorite numbers?
p users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?
p users["Erik"][:favorite_numbers].min


# How would you return an array of Anil's favorite numbers that are also even?
arr = users["Anil"][:favorite_numbers].select do |n|
    n.even?()
end
p arr

# How would you return an array of the favorite numbers common to all users?
new_arr = users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers]
p new_arr

# common_num = []
# users.each do |key, value|
#   # p value[:favorite_numbers]
#   common_num &= value[:favorite_numbers]
# end
# p common_num


# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
newer_arr = users["Jonathan"][:favorite_numbers] | users["Erik"][:favorite_numbers] | users["Anil"][:favorite_numbers]
newer_arr.sort!
p newer_arr

# newer_arr = []
# users.each do |key, value|
#   newer_arr |= value[:favorite_numbers]
# end
# newer_arr.sort!
# p newer_arr

# can also use uniq() to get rid of duplicates after u combine all of them and sort them with sort()

>>>>>>> 4d096a5e013d181b560cb46e8a57a40fa1756b62
binding.pry