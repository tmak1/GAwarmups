# The Board
# Write a program that creates a string that represents an 8×4 grid, using new- line characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. Passing this string to console.log should show something like this:

# # # # # # # # #
#  # # # # # # # #
 # # # # # # # #
#  # # # # # # # #

# Extension
# When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. Then, define a variable symbol that generates the board using the specified character instead.


def makeChessBoard(rows, cols, symbol)
    str = ""

    rows.times do |row|
        if (row.even?) 
            cols.times do |n|
                str += symbol
            end
            str += " \n"
        else
            str += " "
            cols.times do |n|
                str += symbol
            end
            str += "\n"
        end  
    end 

    return str
end

print makeChessBoard(4, 8, "$")




