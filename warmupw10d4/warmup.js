s1 = "xyaabbbccccdefww"
s2 = "xxxxyyyyabklmopq"

const longest = (s1, s2) => {
    str = (s1 + s2).split("")
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((a, b) =>  a.localeCompare(b))
          .join("")
        
    return str    
  
}

console.log(longest(s1, s2))