# DanChat
# Daniel is a lackadaisical teenager. In conversation, his responses are very limited.

# He answers 'Sure.' if you ask him a question. He answers 'Whatever.' if you tell him something. He answers 'Woah, chill out!' if you yell at him (ALL CAPS). He says 'Fine. Be that way!' if you address him without actually saying anything.

# Write code in ruby so that you can have an interactive conversation with Daniel. Make sure you include some testing in order to verify your code.

# Hints
# gets, get string is the opposite of puts put string.

# Notice that when you type "Something" and then hit enter, you get the string "Something\n"

loop do
    say = gets.chomp.strip;
    if (say == "")
        puts "Fine, be that way!"
    elsif (say.match(/^[^a-z]*$/))
        puts "Woah, chill out!"
    elsif (say.match(/\?+/))
        puts "Sure"
    else
        puts "whatever"
    end

    puts "\n\n\Press 'n' to stop or any key to continue"
    cont = gets.chomp.strip
    if (cont.downcase == "n")
        break;
    end
end