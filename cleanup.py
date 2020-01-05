import pyperclip

lines = open("poem.txt", "r", encoding="UTF-8").readlines()

final_string = '"' + lines[0].strip().replace('"', "'") + '", "'
for line in lines[1:]:
    final_string += line.strip().replace('"', "'") + "\\" + "n"
final_string += '"'
pyperclip.copy(final_string)
