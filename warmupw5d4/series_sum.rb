# https://gist.github.com/kasun-maldeni/ce4fb1d81648057fd6ccdf0079d6d4a9

# Series Sum
# Your task is to write a function which returns the sum of following series upto nth term(parameter).

# Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
# Rules:
# You need to round the answer to 2 decimal places and return it as String.
# If the given value is 0 then it should return 0.00
# You will only be given Natural Numbers as arguments.
# Examples:
# seriesSum(1) => 1 = "1.00"
# seriesSum(2) => 1 + 1/4 = "1.25"
# seriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

require "pry"

def series_sum(num)
    sum = 0;
    if num > 0
        denominator = 1
        sum += 1 
      
        (num - 1).times do
            denominator += 3 
            sum += (1.0/denominator)
            
        end   
    end
    sum = "% .2f" % sum.round(2)
    sum_s = sum.to_s 
    sum_s = "\"" + sum_s + "\""
    return sum_s
end

def print_result(num)
    str = ""
    constant_part = "seriesSum(#{num}) =>"
    final_part = ""
    if num < 1
        final_part += "0"
    end
    if num >= 1
        final_part += "1"
    end
    n = 1
    (num - 1).times do 
        final_part += " + " + "1/" +(n+3).to_s
        n += 1
    end
    str = constant_part + " " + final_part + " = "
    return str 
end

puts "============="
puts print_result(0) + series_sum(0)
puts "============="
puts ""
puts "============="
puts print_result(1) + series_sum(1)
puts "============="
puts ""
puts "============="
puts print_result(2) + series_sum(2)
puts "============="
puts ""
puts "============="
puts print_result(5) + series_sum(5)
puts "============="
puts ""




