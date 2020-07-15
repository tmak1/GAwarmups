# https://gist.github.com/kasun-maldeni/249d1377150b7ef43775cfa7950eefec
# Lunch Orders
# It's approaching lunch hour… let's collect orders. Create a new file called lunch_orders.rb to complete this exercise.

# Create a program that collects lunch orders. Prompt:
# Name for order: (enter name)
# {name} wants to order: (enter item)
# Store the name/order data. When storing data, do it in such a way that additional order items may be added for the person's name.
# Example: Greg can order a Burger, and then add Fries to his order later.
# After storing data, prompt the user with:
# Add another item to the order? (y/n)
# Repeat steps 1 & 2 if the answer is "y"
# After the user completes adding orders, print out:
# "All orders: {order data}"
# Keep going...
# Rather than printing out a blob of raw lunch order data, print each name's orders on a separate line, formatted as one of the following:

# "Greg ordered a sandwich"
# "Peter ordered a burger & fries"
# "Travis ordered a salad, apple & water"
# You may have to do some hunting in Ruby docs!

require "pry"

def print_orders(order_file)
    order_hash = eval(File.read(order_file).chomp.strip)
    if (order_hash != "" && order_hash != nil) 
        puts "\n\nLunch Orders:\n  " 
        order_hash.each do |name, orders|
            print "#{name} ordered a "
            orders.each do |order|
                if order == orders.first
                    print "'#{order}'"
                elsif order == orders.last
                    print " & '#{order}'" 
                else
                    print ", '#{order}'" 
                end 
            end
            puts "\n\n"
        end
    else
        puts "No orders to display"
    end
end


def save_order_data(order_data)
    File.open("order_data.txt", 'w') do |file| 
        file.write("order_data = #{order_data}") 
    end
    print_orders("order_data.txt")
end


def lunch_orders()
    order_data = eval(File.read("order_data.txt").chomp.strip)
    if (order_data == "" || order_data == nil)
        order_data = {}
    end
    puts "Enter name"
    input_name = gets.chomp.strip
    orders = []
    loop do
        puts "Enter order"
        input_order = gets.chomp.strip
        orders.push(input_order)
        puts "Add another item to the order? (y/n)"
        input_choice = gets.chomp.strip
        if input_choice == "n"
            break
        end
    end
  
    order_data[input_name.to_sym] = orders
    save_order_data order_data
end

lunch_orders

binding.pry



