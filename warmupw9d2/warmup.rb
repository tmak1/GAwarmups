# https://gist.github.com/kasun-maldeni/5ed738929d2145d3e153bd728d273e98
# Starbucks
# Write a program that holds on to coffee orders.

# c1 = Coffee.new('Darryl', 'latte', 'medium', 2)
# Write the .to_s method for this class so when you puts c1 you will have "Darryl's latte, medium, 2 sugars."

# Extension
# Starbucks always gets names wrong, however. Make the name a bad misspelling of the actual name when you create the order.

# puts c1
# # => "Barrel's latte, medium, 2 sugars."

class Coffee 
    def initialize(name, coffee, type, sugarCount)
        @name = name 
        @coffee = coffee 
        @type = type 
        @sugarCount = sugarCount 
    end

    def to_s
        return  "#{@name}'s #{@coffee}, #{@type}, #{@sugarCount} sugars"
    end
end

c1 = Coffee.new('Darryl', 'latte', 'medium', 2)
puts c1