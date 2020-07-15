require 'pry'

class Say 
    def initialize(number)
        @number = number.to_i
    end

    def in_english
        if (@number < 0 || @number > 99)
            puts "Number must be between 0 and 99, inclusive. (ArgumentError)" 
        elsif @number < 20
            return digit_to_word(@number)
        else
            tens = (@number % 100) / 10
            tens = (tens.to_s + '0').to_i
            ones = @number % 10
            str = ones == 0 ? digit_to_word(tens) : digit_to_word(tens) + '-' + digit_to_word(ones)
            return str
        end
    end

    def digit_to_word(num)
        digit_to_name = {
        90 => "ninety",
        80 => "eighty",
        70 => "seventy",
        60 => "sixty",
        50 => "fifty",
        40 => "forty",
        30 => "thirty",
        20 => "twenty",
        19=>"nineteen",
        18=>"eighteen",
        17=>"seventeen", 
        16=>"sixteen",
        15=>"fifteen",
        14=>"fourteen",
        13=>"thirteen",              
        12=>"twelve",
        11 => "eleven",
        10 => "ten",
        9 => "nine",
        8 => "eight",
        7 => "seven",
        6 => "six",
        5 => "five",
        4 => "four",
        3 => "three",
        2 => "two",
        1 => "one",
        0 => "zero",
        }
        return digit_to_name[num]
    end


end



puts Say.new(0).in_english()
puts Say.new(10).in_english()
puts Say.new(14).in_english()
puts Say.new(20).in_english()
puts Say.new(50).in_english()
puts Say.new(98).in_english()
puts Say.new(-1).in_english()
puts Say.new(100).in_english()

# binding.pry