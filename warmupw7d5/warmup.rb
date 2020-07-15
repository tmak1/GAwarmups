
def integer_counter(numbers)
    numbers.uniq.map do |n|
        {n => numbers.count(n)}
    end
end


def integer_find(integers)
    val = integers.select do |n|
        n.values[0].odd?
    end
    val[0].keys
end

puts "Integer appears odd times is: " 
puts integer_find(integer_counter([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))


# Alterntive method

def whole(numbers)
    numbers.uniq.select { |n| numbers.count(n).odd? }
end

puts "Integer appears odd times is: " 
puts whole([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])
