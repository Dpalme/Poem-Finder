import pyperclip

authors = {}
poems = []
poem_flags = []
master_string = ""


def clean_lines(lines):
    final_string = 'create_poem(\n'
    final_string += authors[lines[0].strip()][0]
    final_string += ',\n"' + lines[1].strip().replace('"', "'") + '",\n"'
    for line in lines[2:]:
        final_string += line.strip().replace('"', "'") + "\\" + "n"
    final_string += '"\n);'
    return final_string


lines = open("poems.txt", "r", encoding="UTF-8").readlines()

for line in lines[:lines.index('\n')]:
    name, lang = line.strip().split(',')
    authors[name] = [name.split()[0].lower(), lang]

authors_string = []
for author, lang in authors.items():
    authors_string.append('%s = new Author("%s", "%s");' % (lang[0], author, lang[1]))

for string in sorted(authors_string):
    master_string += string + "\n"

for n, line in enumerate(lines):
    if line.strip() in authors:
        poem_flags.append(n)

for n, flag in enumerate(poem_flags):
    if n < len(poem_flags) - 1:
        master_string += clean_lines(lines[flag:poem_flags[n + 1]])
    else:
        master_string += clean_lines(lines[flag:])
    master_string += "\n"

pyperclip.copy(master_string)
