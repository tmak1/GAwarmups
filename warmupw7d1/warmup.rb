# Even Multiples
# Write a method called even_multiples that takes a list_of_numbers and returns only numbers that are even AND multiples of 5.

# For example the list_of_numbers could be [14, 5, 7, 2, 25, 10, -4, 3, 3, 25, 2, 6, 5].

def even_multiples(arr, operator)
    new_arr = arr.select do |n|
        ((n % operator == 0) && (n % 2 == 0))
    end
    return new_arr
end


newer_arr = even_multiples([14, 5, 7, 2, 25, 10, -4, 3, 3, 25, 2, 6, 5, 20, -20], 5)

p newer_arr

