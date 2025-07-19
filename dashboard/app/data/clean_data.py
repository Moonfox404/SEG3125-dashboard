def clean_data(oldFile, newFile):
  with open(oldFile, 'r') as old:
    with open(newFile, 'w') as new:
      while (line := old.readline()) != "":
        print(line[:line.find('ans') + 4] + line[line.find('ans') + 5:], file=new, end="")
