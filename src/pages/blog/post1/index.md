---
title: 'Types in GO'
date: '2020-09-24'
---

![photo](post1photo1.jpg)

Types are the most important thing in Go. Types allow us to



#**Basic Types**

## Numbers
Go has several different types to represent numbers. Generally we split numbers into two different kinds: integers and floating-point numbers.

Integers are numbers without a decimal component.

Go's Integer types are: uint8, uint16, uint32, uint64, int8, int16,int32, int64. The numbers are to tell us how many bits each of the types use and the u in front of uint means unsigned integer. Unsigned integers only contain positive numbers (or zero).

Generally if working with integers you should just use the int type.

## Floating Point Numbers
Floating point numbers cointain a decimal component(real numbers). Their actual representation on a computer is fairly complicated and not really necessary in order to know how to use them. For now we only need to know the following things.

Floating point numbers are inexact. Occasionally it isn't possible to represent a number and you can only get a really close estimate.

Like integers floating point numbers have a certain size, either 32bit or 64. Using a larger sized floating point increases how many digits it can represent.

Go has two floating point types, float32 and float64. As well as two additional types for representing complex numbers, complex64 and complex128. Stick with float64 for the most part when working with floating point numbers as it makes the most sense in a lot of situations.

## Strings
A string is a sequence of characters with a definite length that represents text. Go strings are made up of bytes, usually one for each character. The reason I say usually is because characters from other languages like Chinese for example, are represented by more than one byte.

String literals can be created using double quotes "Awesome" or back ticks `Awesome`. The difference is that double quoted strings cannot contain newlines and they allow for escape sequences. An example would be /n getting replace with a newline.

Common operations on strings include finding the length: len(string), accessing characters of string: "Awesome"[1], and concatenating two strings together: "Awesome" + "Sauce".

Things to keep in mind:

* A space is considered a character in a string

* Strings are indexed at 0 not 1

* Concatenation uses the same symbol as addition.

## Booleans
A boolean is a 1 bit integer type used to represent true or false(on or off). We use three logical operators when working with boolean values:

&&
||
!

These are the simplest types included with Go and form the foundation for which all other types are built.


#**Composite types**

Go supports the following composite types:

Pointers - Holds the memory address of a value
structs - data type that aggregates other data types
functions - a group of statements that perform a specific task.
containers:
    array - fixed length container types.
    slice - dynamic length and dynamic capacity container
    map - maps are associative arrays (or dictionaries). The standard Go compiler implements maps as hashtables.
channels - Channels are used to synchronize data among goroutines
interface - a collection of method signatures that a type can implement

#**Custom type**
Go allows for you to create your own kinds of types when you have more complex scenarios that basic and composite types won't satisfy. For example lets say we had one integer that represents a number of minutes and another that represents hours, how would we tell these two apart? We would use a custom type!

Declare a custom type: type Minutes int

This declares a type of int and sets it to a basic type of int, we could do the same thing for hours: type Hours int

There is a whole lot more to Types in Go and when you start coding you will see how you actually have to implement type correctly to avoid errors. I hope that this at least gave you a basic understanding of types and how to use them in Go!
