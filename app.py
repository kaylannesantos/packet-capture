from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')
    print(f'Usuário: {username}, Senha: {password}')
    return f'<h3>Login recebido! Usuário: {username} | Senha: {password}</h3>'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
