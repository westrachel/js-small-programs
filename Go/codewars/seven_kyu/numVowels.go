package main

import (
	"fmt"
)

// Write a function that accepts a string and returns the numerical
// count of vowels in the string
// Reqs:
// vowels = a, e, i, o, u

func main() {
	// Test cases:
	fmt.Println(numVowels("missouri") == 4)
	fmt.Println(numVowels("lemonade") == 4)
	fmt.Println(numVowels("family") == 2)
}

func numVowels(str string) int {
	count := 0
	vowels := map[string]bool{
		"a": true,
		"e": true,
		"i": true,
		"o": true,
		"u": true,
	}
	for i, _ := range str {
		if vowels[string(str[i])] {
			count += 1
		}
	}

	return count
}
