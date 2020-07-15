require 'pry'

# def makeMap(a, b)
#     outerArray = []
#     i = 0
#     while i < a
#         j = 0
#         innerArray = []
#         while j < b
#             innerArray[j] = 'A'
#             j += 1
#         end
#         outerArray[i] = innerArray
#         i += 1
#     end 

#     outerArray[rand(a)][rand(b)] = 'X'

#     outerArray.each do |arr|
#         p arr
#         puts ' '   
#     end

# end

# makeMap 8.0, 5.0


def makeMap2(rows, cols)
    outerArray = []
    rows.times do |n|
        innerArray = []
        cols.times do |n|   
            innerArray[n] = 'A'
        end
        outerArray[n] = innerArray
    end
    outerArray[rand(rows)][rand(cols)] = 'X'

    outerArray.each do |arr|
        p arr
        puts ' '   
    end
end

makeMap2 5, 5