def clean_data(oldFile, newFile):
  with open(oldFile, 'r') as old:
    with open(newFile, 'w') as new:
      while (line := old.readline()) != "":
        print(line[:line.find('64 ans') + 7] + line[line.find('64 ans') + 8:], file=new, end="")
