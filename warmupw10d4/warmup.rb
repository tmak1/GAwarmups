# https:#gist.github.com/kasun-maldeni/4e9087c0701913cc821ac451290c7a8c

# Concat Unique Strings
# Much easier if you use Ruby!
# Take 2 strings s1 and s2 each only containing letters from a to z. 
# Return one new sorted string, the longest possible, containing distinct letters - each taken only once - from s1 and s2.

# Example:
# s1 = "xyaabbbccccdefww"
# s2 = "xxxxyyyyabklmopq"
# longest(s1, s2) => "abcdefklmopqwxy"
# Extension - solve in JavaScript!
# Removing duplicate letters is difficult in JavaScript, you might want to use underscore.js: http://underscorejs.org/

s1 = "xyaabbbccccdefww"
s2 = "xxxxyyyyabklmopq"
# longest(s1, s2) => "abcdefklmopqwxy"

def longest(s1, s2)
    (s1 + s2).split('').uniq.sort.join
end



puts longest(s1, s2)

