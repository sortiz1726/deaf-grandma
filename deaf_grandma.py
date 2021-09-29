def is_any_lowercase(word):
    return any([letter for letter in word if letter.islower()])

def deaf_grandma():
    print("HEY KID!");

    goodbye_count = 0;

    while goodbye_count != 2:
        
        RESPONSE = input();

        if RESPONSE == "":
            print("WHAT!")
        
        elif is_any_lowercase(RESPONSE):
            print("SPEAK UP, KID!")
        
        elif RESPONSE == "GOODBYE!":
            goodbye_count += 1
        
            if goodbye_count == 1:
                print("LEAVING SO SOON?")
            elif goodbye_count == 2:
                print("LATER, SKATER!")
        else:
            print("NO, NOT SINCE 1946!")


deaf_grandma()