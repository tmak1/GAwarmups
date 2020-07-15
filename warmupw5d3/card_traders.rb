# https://gist.github.com/kasun-maldeni/580aaa1f12e80881050e473099e70a39

# Card Traders
# Alfred and Peter are best friends and Pokemon card traders. Each week they get together and decide to buy a new pack of Pokemon trading cards. Each pack has a total of 10 cards. Each card has the Pokemon's name and attack power.

# Alfred and Peter have not opened the pack yet, but it contains the following cards:

# Name	Attack
# Pikachu	40
# Rattata	20
# Pidgeot	60
# Alakazam	80
# Butterfree	30
# Gengar	70
# Moltres	100
# Vulpix	40
# Blastoise	80
# Hitmonchan	50
# Put the above cards into an appropriate data structure (so that you can easily remove or change the order of cards if you needed to)

# They are about to open the pack of cards, and they have a ritual for deciding who gets to keep each card in the pack.

# Do each of the following with your data structure:

# 2a) Firstly, keeping the cards faced down (so they cannot see), they reverse the order of the cards.

# 2b) They then split the cards into groups of 3, so they end up with 4 piles of cards (the first three with 3, and the last pile with just 1)

# 2c) Alfred takes the first and third piles of cards, and Peter takes the second and fourth piles. Create a new data structure for Alfred and Peter and pass them the cards.



######### I/O operations #################

def get_cards(pokemon_file)
    stack = eval(File.read(pokemon_file).chomp.strip)
    if (stack != "" && stack != nil) 
        # stack.each do |card|
        #     card.each do |name, ap|
        #         print "#{name} : #{ap}  "
        #     end
        # end
        #p stack
        return stack
    else
        puts "No orders to display"
        return nil
    end
end

def save_cards(stack, pokemon_file)
    File.open(pokemon_file, 'w') do |file| 
        file.write("stack = #{stack}") 
    end
    print_cards("pokemons.txt")
end


def make_cards()
    stack = []
    loop do
        puts "Card name?"
        card_name = gets.chomp.strip

        puts "Attack power?"
        card_ap = gets.chomp.strip

        if (card_name != "" && card_name != nil)
            if (card_ap != "" && card_ap != nil)
                card_name = card_name.to_sym
                card_ap = card_ap.to_i
                card = {}
                card[card_name] = card_ap
                stack.push(card)
            end
        end
        p stack
        puts "Go more (y/n)"
        break if gets.chomp.strip != "y"
    end
    return stack
end


# stack = make_cards

# save_cards(stack, "pokemons.txt")

# get_cards "pokemons.txt"


#############################################






##################### Logic operations ########################

stack = get_cards "pokemons.txt"
stack_reversed = stack.reverse()

# p stack_reversed

cards_split = stack_reversed.each_slice(3).to_a

dist = {}

alfred_piles = []
alfred_piles.push(cards_split[0])
alfred_piles.push(cards_split[2])
alfred_piles.flatten!

peter_piles = []
peter_piles.push(cards_split[1])
peter_piles.push(cards_split[3])
peter_piles.flatten!

dist[:alfred] = alfred_piles
dist[:peter] = peter_piles

def print_result(dist)
    puts "dist = { "
    dist.each do |key, value|
        puts "         #{key} => #{value},"
    end
    puts "       }"
end


print_result dist


