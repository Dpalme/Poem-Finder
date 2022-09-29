import pyperclip

lines = open("input.txt", "r", encoding="UTF-8").readlines()
final = ""
for line in lines:
    final += 'new Color("%s");\n' % line.strip()
pyperclip.copy(final)
    
