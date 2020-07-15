# https://gist.github.com/kasun-maldeni/b4a843feb71202f9ddf4d26d33f683b4

# Dice
# Write a program using classes to generate a standard dice roll.

# Dice.roll
# # => 6
# Note: the code above is calling a class method of Dice called "roll". It is not an instance method e.g. Dice.new.roll. Google "ruby class methods" before proceeding with the problem

# It should give you a different result each time.

# Dice.roll
# # => 5
# Dice.roll
# # => 2
# When you pass in a number, it rolls the dice that many times, and returns you the array of rolled dice

# Dice.roll(3)
# # => [2,5,1]

class Dice

    @@rolls = [] # a class variable

    # def initialize
    # end

    def self.roll(num = 1) # a class method
        @@rolls.clear()
        num.times do @@rolls.push(rand(1..6)) end
        num == 1 ? @@rolls.join() : @@rolls
    end


    # def self.rollC
    #     "Hi in C"
    # end

    # def rollM    # an instance method
    #     "Hi in M"
    # end

end

# p "Dice.roll(4) => #{Dice.roll(4)}"
p "Dice.roll() => #{Dice.roll()}"
p "Dice.roll(2) => #{Dice.roll(2)}"
p "Dice.roll(6) => #{Dice.roll(6)}"
p "Dice.roll() => #{Dice.roll()}"
p "Dice.roll() => #{Dice.roll()}"



# NB:
# h1 = Dice.new()
# puts h1.rollC() # instance cannot call class method
# puts h1.rollM() # this is fine
# puts Dice.rollC() # this is fine
# puts Dice.rollM() # class cannot call instance methods


