# Switch up
# Write a function switchUp that takes a string as an argument and returns the string with the case for each letter switched e.g. lowercase letter must become uppercase and vice versa.

# switchUp("Switch caSe FoR eVery letter") --> // "sWITCH CAsE fOr EvERY LETTER"
# Extension
# If words are separated by spaces or underscores, change them to dashes. For example:

# switchUp2("js_Was_created_bY BRENdan Eich") --> // "JS-wAS-CREATED-By-brenDAN-eICH"


require 'pry'

def switch_up(str)
    arr = []
    new_arr = str.split('').map do |char|
        case char 
        when /[A-Z]/
            char.downcase!
        when /[a-z]/
           char.upcase!
        when /[\s,_]/   
            "-"
        end
    end
    switched = new_arr.join()
    return switched
    
end

puts switch_up("js_Was_created_bY BRENdan Eich")