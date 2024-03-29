import requests

# Requisição GET
response = requests.get("https://betrybe.com/")
print(response.status_code)  # Status
print(response.headers["Content-Type"])  # conteúdo no formato html

# Conteúdo da requisição
print(response.text)

# Bytes recebidos
print(response.content)

# Requisição POST
response = requests.post("http://httpbin.org/post", data="some content")
print(response.text)

# Requisição GET enviando cabeçalho
response = requests.get(
  "http://httpbin.org/get", headers={"Accept": "application/json"}
  )
print(response.text)

# Requisição a recurso binário
response = requests.get("http://httpbin.org/image/png")
print(response.content)

# Recurso JSON
response = requests.get("http://httpbin.org/get")
# Equivalente ao json.loads(response.content)
print(response.json())

# Podemos também pedir que a resposta lance uma exceção
# caso o status não seja OK
response = requests.get("http://httpbin.org/status/404")
response.raise_for_status()
