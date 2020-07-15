<<<<<<< HEAD
require 'pry' 

# https://gist.github.com/epoch/225c8ad85f2a871486933b3a6e3b6834

# Exercise: Temperature Converter
# Goal: create a program that can convert a temperature in fahrenheit, Celsius or Kelvin to the other two units.

# Try the bonus goals if you have extra time!
# Setup
# Write your code in temp_converter.rb.
# Test your code by running the following the terminal...
# $ ruby temp_converter.rb
# Instructions
# Ask the user for two inputs and store them in their own variables...

# A starting temperature value
# A temperature unit (e.g., f, C, K). Store each of those in a variable.
# Define a convert_temp method that takes those two user inputs as arguments.

# Inside the method, create a conditional statement that contains a block for each unit of temperature. It will look something like this...

# if temp_unit == "f"
#   ...
# elsif temp_unit == "C"
#   ...
# else
#   ...
# end
# Each conditional block should convert the starting temperature to its equivalent value in the other two units (e.g., f should be converted to C and K).

# Conversion formulae: http://www.csgnetwork.com/temp2conv.html
# Sample temperatures: 32f = 0C = 273.15K
# Display (use puts) the starting and converted values in the console/terminal.

# NOTE: You should only be displaying the starting and converted values for the temperature the user selected at the beginning.
# # User selected "f" at the start of the program. So the output is...
# fahrenheit: ...
# to Celsius: ...
# to Kelvin: ...
# for this exercise it is ok to use puts to display the result within the method

# Feel free to turn to your tablemates for help!

# Bonus 1
# Keep the program running until the user decides to quit.

# HINT: Requires a while loop.
# When the program starts, the user should be prompted to enter a temperature OR quit the program.
# After the program displays the starting/converted temperatures, it should return to the initial user prompt.

def convert_temp()
    result = {
        fahrenheit: 0,
        celsius: 0,
        kelvin: 0
    }
    loop do
        puts "Type in temperature OR type 'quit' to quit"
        input = gets.chomp.strip
        metric = input.chars.last
        inputTemp = input.chomp(metric)
        inputTemp = inputTemp

        if inputTemp !~ /\D/ 
            if ( (metric.downcase == 'f') || (metric.downcase == 'c') || (metric.downcase == 'k') ) 
                if (input == "quit")
                    break;
                else    
                    if (input.end_with?("f")  || input.end_with?("F"))
                        result[:fahrenheit] = inputTemp.to_i;
                        result[:celsius] = (result[:fahrenheit] - 32) / 1.8
                        result[:kelvin] = (result[:fahrenheit] + 459.67) / 1.8
                    elsif (input.end_with?("c") || input.end_with?("C"))
                        input == "c"
                        result[:celsius] = inputTemp.to_i;
                        result[:fahrenheit] = (result[:celsius] * 1.8) + 32
                        result[:kelvin] = result[:celsius] + 273.15
                    elsif (input.end_with?("k") || input.end_with?("K"))
                        inputTemp == "k"
                        result[:kelvin] = inputTemp.to_i;
                        result[:fahrenheit] = (result[:kelvin] * 1.8) - 459.67  
                        result[:celsius] = result[:kelvin] - 273.15
                    end

                    p result

                    puts "User selected \"#{metric}\" at the start of the program. So the output is..."
                    puts "fahrenheit: #{result[:fahrenheit]} f"
                    puts "Celsius: #{result[:celsius]} C"
                    puts "Kelvin: #{result[:kelvin]} K"
                end
            else
                puts "you didnt type a valid metric"
            end
        else
            puts "you didn't type a valid temperature"
        end
    end
end

convert_temp

#binding.pry
=======
require 'pry' 

# https://gist.github.com/epoch/225c8ad85f2a871486933b3a6e3b6834

# Exercise: Temperature Converter
# Goal: create a program that can convert a temperature in fahrenheit, Celsius or Kelvin to the other two units.

# Try the bonus goals if you have extra time!
# Setup
# Write your code in temp_converter.rb.
# Test your code by running the following the terminal...
# $ ruby temp_converter.rb
# Instructions
# Ask the user for two inputs and store them in their own variables...

# A starting temperature value
# A temperature unit (e.g., f, C, K). Store each of those in a variable.
# Define a convert_temp method that takes those two user inputs as arguments.

# Inside the method, create a conditional statement that contains a block for each unit of temperature. It will look something like this...

# if temp_unit == "f"
#   ...
# elsif temp_unit == "C"
#   ...
# else
#   ...
# end
# Each conditional block should convert the starting temperature to its equivalent value in the other two units (e.g., f should be converted to C and K).

# Conversion formulae: http://www.csgnetwork.com/temp2conv.html
# Sample temperatures: 32f = 0C = 273.15K
# Display (use puts) the starting and converted values in the console/terminal.

# NOTE: You should only be displaying the starting and converted values for the temperature the user selected at the beginning.
# # User selected "f" at the start of the program. So the output is...
# fahrenheit: ...
# to Celsius: ...
# to Kelvin: ...
# for this exercise it is ok to use puts to display the result within the method

# Feel free to turn to your tablemates for help!

# Bonus 1
# Keep the program running until the user decides to quit.

# HINT: Requires a while loop.
# When the program starts, the user should be prompted to enter a temperature OR quit the program.
# After the program displays the starting/converted temperatures, it should return to the initial user prompt.

def convert_temp()
    result = {
        fahrenheit: 0,
        celsius: 0,
        kelvin: 0
    }
    loop do
        puts "Type in temperature OR type 'quit' to quit"
        input = gets.chomp.strip
        metric = input.chars.last
        inputTemp = input.chomp(metric)
        inputTemp = inputTemp

        if inputTemp !~ /\D/ 
            if ( (metric.downcase == 'f') || (metric.downcase == 'c') || (metric.downcase == 'k') ) 
                if (input == "quit")
                    break;
                else    
                    if (input.end_with?("f")  || input.end_with?("F"))
                        result[:fahrenheit] = inputTemp.to_i;
                        result[:celsius] = (result[:fahrenheit] - 32) / 1.8
                        result[:kelvin] = (result[:fahrenheit] + 459.67) / 1.8
                    elsif (input.end_with?("c") || input.end_with?("C"))
                        input == "c"
                        result[:celsius] = inputTemp.to_i;
                        result[:fahrenheit] = (result[:celsius] * 1.8) + 32
                        result[:kelvin] = result[:celsius] + 273.15
                    elsif (input.end_with?("k") || input.end_with?("K"))
                        inputTemp == "k"
                        result[:kelvin] = inputTemp.to_i;
                        result[:fahrenheit] = (result[:kelvin] * 1.8) - 459.67  
                        result[:celsius] = result[:kelvin] - 273.15
                    end

                    p result

                    puts "User selected \"#{metric}\" at the start of the program. So the output is..."
                    puts "fahrenheit: #{result[:fahrenheit]} f"
                    puts "Celsius: #{result[:celsius]} C"
                    puts "Kelvin: #{result[:kelvin]} K"
                end
            else
                puts "you didnt type a valid metric"
            end
        else
            puts "you didn't type a valid temperature"
        end
    end
end

convert_temp

#binding.pry
>>>>>>> 4d096a5e013d181b560cb46e8a57a40fa1756b62
