import random
import string

def generate_password(length):
    punct_len = length//2
    char_len = length-punct_len
    if (punct_len+char_len) != length:
        char_len+= length-(punct_len+char_len)
    lowercase = string.ascii_lowercase
    uppercase = string.ascii_uppercase
    puncts = string.punctuation
    digits = string.digits

    password_list = []
    choices = ['a', 'b']
    for i in range(char_len):
        turn = random.choice(choices)
        if turn == 'a':
            l_case = random.choice(lowercase)
            password_list.append(l_case)
        else:
            u_case = random.choice(uppercase)
            
            password_list.append(u_case)
    
    dig = ['a', 'b']
    for j in range(punct_len):
        dt = random.choice(dig)
        if dt == 'a':
            digit = random.choice(digits)
            password_list.append(digit)
        else:
            punct = random.choice(puncts)
            password_list.append(punct)
        

    random.shuffle(password_list)
    return ''.join(password_list[:])