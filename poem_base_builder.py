with open("js/shows.js", "r+", encoding="UTF-8") as archivo:
    lines = open("input.txt", "r", encoding="UTF-8").readlines()
    for line in lines:
        archivo.write('new Show("%s");\n' % line.strip())
