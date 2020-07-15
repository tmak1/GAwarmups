# https://gist.github.com/epoch/e6e4f013cd88cd88f65c88d1dec3be08

require 'pry' 


# Arrays
# Starting with the following array...

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"];

# Access the second value in planeteers.

# puts planeteers[1]

# Add "Heart" to the end of planeteers.

planeteers.push('Heart')
# p planeteers

# Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.

rangers = ["Red", "Blue", "Pink", "Yellow", "Black"];
#heroes = planeteers + rangers
#heroes = planeteers.concat(rangers)
heroes = planeteers | rangers
#p heroes;


# Alphabetize the contents of heroes using a method. The Ruby documentation might help.

#heroes.sort!
#p heroes

# Your answer here
# Randomize the contents of heroes using a method. The Ruby documentation might help.

# heroes.shuffle!
# p heroes

# Your answer here
# Bonus
# Select a random element from heroes using a method. The Ruby documentation might help.

randomHero = heroes.sample(1)
#puts randomHero


# Select all elements in heroes that begin with "B" using a method. The Ruby documentation might help.

def B_chooser(array)
    new_array = array.select do |hero| 
        hero.strip.start_with?('B')
    end
    return new_array
end

def B_chooser(array)
    new_array = [];
    i = 0
    array.each do |hero| 
        if hero.strip[0] == "B"
            new_array[i] = hero
        end
        i += 1
    end
    return new_array
end
#p B_chooser heroes


# Hashes
# Initialize a hash called ninja_turtle with the properties name, weapon and radical. It should have values of "Michelangelo", "Nunchuks" and true respectively.

ninja_turtle = {
    name: "Michaelangelo",
    weapon: "Nunchuks",
    radical: true
}
#p ninja_turtle

# Add a key age to ninja_turtle. Set it to whatever numerical value you'd like.

ninja_turtle[:age] = 16
#p ninja_turtle

# Remove the radical key-value pair from ninja_turtle.

ninja_turtle.delete(:radical)
#p ninja_turtle


# Add a key pizza_toppings to ninja_turtle. Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).

ninja_turtle[:pizza_toppings] = ['cheese', 'pepperoni', 'peppers']
#p ninja_turtle


# Access the first element of pizza_toppings.

# p ninja_turtle[:pizza_toppings].first

# Produce an array containing all of ninja_turtle's keys using a method. The Ruby documentation might help.

allKeys = ninja_turtle.keys
#p allKeys

# Bonus
# Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method. The Ruby documentation might help.

ninja_turtle.each do |key, value|
    puts "#{key} is queal to #{value} "
end

