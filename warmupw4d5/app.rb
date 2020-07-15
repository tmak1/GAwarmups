require 'pry'
def convert(n)
    ignore = [" ", ",", "." ]
    if n == /[^A-Z]/  
       num =  n
    else 
        num = (n.codepoints[0] - 3).chr
    end
    if (num == /[^A-Z]/) && (num.codepoints[0] <= 64)    
        num = (num.codepoints[0] + 26).chr
    end

    return num
end
puts convert(" ")


def decoder(str)
    str = str.chomp.strip.upcase
    return (str.split("").map do |n|
        n = convert n
    end).join("")
  
end

code1 = "NQRZOHGJH LV OLPLWHG, LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG"
code2 = "ERQXV ILIWHHQ PLQXWHV EUHDN"

puts "original: " + code1 + "\ndecoded: " + decoder(code1)


require 'pry'
def convert(n)
    ignore = [" ", ",", "." ]
    if n == /[^A-Z]/  
       num =  n
    else 
        num = (n.codepoints[0] - 3).chr
    end
    if (num == /[^A-Z]/) && (num.codepoints[0] <= 64)    
        num = (num.codepoints[0] + 26).chr
    end

    return num
end
puts convert(" ")


def decoder(str)
    str = str.chomp.strip.upcase
    return (str.split("").map do |n|
        n = convert n
    end).join("")
  
end

code1 = "NQRZOHGJH LV OLPLWHG, LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG"
code2 = "ERQXV ILIWHHQ PLQXWHV EUHDN"

puts "original: " + code1 + "\ndecoded: " + decoder(code1)

# NB. the +,. etc symbols did not retain their form. This can be seen with code2 as input