with open("in.txt", "r") as input_file:
    data = input_file.readlines()

output_data = []
for line in data:
    split_str = line.split()
    output_dict = {
        "code": split_str[0],
        "lat": split_str[1],
        "long": split_str[2],
        "name": " ".join(split_str[3:])
    }
    output_data.append(output_dict)

with open("out.txt", "w") as output_file:
    for dictionary in output_data:
        output_file.write(str(dictionary) + ",\n")
