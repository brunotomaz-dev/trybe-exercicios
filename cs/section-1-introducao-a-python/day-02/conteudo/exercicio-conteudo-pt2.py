try:
    aprovados = ""
    with open("estudantes.txt", mode="r") as file:
        for line in file:
            line = line.split()
            if int(line[1]) >= 6:
                aprovados += f"{line[0]}\n"

    with open("aprovados.txt", mode="w") as new_file:
        new_file.write(aprovados)
    print(f'Lista de aprovados:\n{aprovados}')
except OSError:
    print("erro ao ler arquivo e salvar aprovados")
finally:
    print(
        "Tentativa de ler arquivo e criar aprovados."
        )
