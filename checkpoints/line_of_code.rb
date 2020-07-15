<<<<<<< HEAD
# line of code
# write a program loc.rb (which stands for line of code) to count the number of lines of code in a file given as user input.

# eg. say you have a file data.txt with the following contents

# cat
# dog
# rabbit
# turtle
# when I run the program, it should prompt for a filename

# $ ruby loc.rb
# $ Enter filename: data.txt
# $ 4 line(s)
# hint
# lookup gets method and the readlines method

# extension
# do not include empty lines when counting

require "pry"


def count_lines(file_path)
    line_count = 0
    File.readlines(file_path).each do |line|
        if line.strip.length != 0
            line_count += 1
        end
    end
    return line_count
end

puts count_lines "test.txt"    
=======
# line of code
# write a program loc.rb (which stands for line of code) to count the number of lines of code in a file given as user input.

# eg. say you have a file data.txt with the following contents

# cat
# dog
# rabbit
# turtle
# when I run the program, it should prompt for a filename

# $ ruby loc.rb
# $ Enter filename: data.txt
# $ 4 line(s)
# hint
# lookup gets method and the readlines method

# extension
# do not include empty lines when counting

require "pry"


def count_lines()
    puts "What is the file name?"
    input = gets.chomp.strip
    line_count = 0
    if File.file?(input)
        File.readlines(input).each do |line|
            if line.strip.length != 0
                line_count += 1
            end
        end
        return line_count + "line(s)"
    else
        puts "That file does not exist"
    end
end

puts count_lines
>>>>>>> 4d096a5e013d181b560cb46e8a57a40fa1756b62
