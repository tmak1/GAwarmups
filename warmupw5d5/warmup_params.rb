# https://gist.github.com/kasun-maldeni/42b7ff3015875d686813475e05b6f386

# Params
# Do NOT setup a web server for this problem. Just create a .rb file and write your answers there.

# You receive the data:

# params = {
#   username: 'chocolate',
#   password: 'pudding',
#   friends: ['vanilla', 'strawberry', 'caramel'],
#   image_url: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
# }
# Write the code to:

# print the username to the console.
# print the last friend from friends.
# check if the password meets the requirements of at least 8 characters.
# add a key-value pair to params where key is the data_sent_time and the value is the current time.
# Extension
# Write code to check that the image is from the unsplash website.

require 'pry'
require 'httparty'


params = {
  username: 'chocolate',
  password: 'pudding',
  friends: ['vanilla', 'strawberry', 'caramel'],
  image_url: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
}
puts ""
puts "username #{params[:username]}"
puts ""
puts "last friend #{params[:friends].last}"
puts ""
print "password at least 8 characters? " 
puts params[:password].length >= 8 ? "yes" : "no"; 
puts ""
time = Time.new
params[:data_sent_time] = "#{time.hour}:#{time.min}:#{time.sec}"
p params
puts ""
print "image is from unsplash? "
puts params[:image_url].include?("https://unsplash.com") ? "yes" : "no"; 


