# https://gist.github.com/kasun-maldeni/ded3feeb0208e307f7f9eb19a31ab783
# Quiz Letter blocks
# Language: Javascript or Ruby
# You are given a collection of ABC blocks. 
# Just like the ones you had when you were a kid. 
# There are 19 blocks with two letters on each block. 
# You are guaranteed to have a complete alphabet amongst all 
# sides of the blocks. The sample blocks are:

# If you test these words, these results will happen:

# can_make_word("A")
# # => true
# can_make_word("BARK")
# # => true
# can_make_word("BOOK")
# # => false
# can_make_word("TREAT")
# # => true
# can_make_word("COMMON")
# # => false
# can_make_word("SQUAD")
# # => true
# can_make_word("CONFUSE")
# # => true
# can_make_word("BOUGHT")
# => false
# Write the can_make_word function to output the results above.



def get_blocks
    blocks = [
        ['B','O'],
        ['X','K'],
        ['D','Q'],
        ['C','P'],
        ['N','A'],
        ['G','T'],
        ['R','E'],
        ['T','G'],
        ['Q','D'],
        ['F','S'],
        ['J','W'],
        ['H','U'],
        ['V','I'],
        ['A','N'],
        ['E','R'],
        ['F','S'],
        ['L','Y'],
        ['P','C'],
        ['Z','M']
    ] 
    return blocks
end

def clean_word(word)
  if (word.length > 0 && word.scan(/[^a-zA-Z]/).empty?)
    return word
  end
end

def can_make_word(word)   
  if clean_word(word)
    blocks = get_blocks
    str = "" 
    word = word.upcase
    word.split("").each do |char|  
      blocks.each_with_index do |block, index|
        if block.include? char
          str += char
          blocks.delete_at(index) 
        break
        end
      end
    end
    return str == word ? true : false
  else
    return "Not a valid word"
  end    
end

puts can_make_word("A")
puts can_make_word("BARK")
puts can_make_word("BOOK")
puts can_make_word("TREAT")
puts can_make_word("COMMON")
puts can_make_word("SQUAD")
puts can_make_word("CONFUSE")
puts can_make_word("BOUGHT")

puts "testing----"

puts can_make_word("")
puts can_make_word("  ")
puts can_make_word(" B O  OK  ")
puts can_make_word("TR$EA%T")
puts can_make_word(" C OM  M!!O$N")
puts can_make_word("SQ U123AD")

# can_make_word("A")
# # => true
# can_make_word("BARK")
# # => true
# can_make_word("BOOK")
# # => false
# can_make_word("TREAT")
# # => true
# can_make_word("COMMON")
# # => false
# can_make_word("SQUAD")
# # => true
# can_make_word("CONFUSE")
# # => true
# can_make_word("BOUGHT")
# => false

