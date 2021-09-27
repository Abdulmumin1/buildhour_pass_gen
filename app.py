from flask import Flask, render_template
from genp import generate_password
import random
app = Flask(__name__)

@app.route('/')
def index():
	list_p = [generate_password(random.randint(8,15)) for i in range(31)]
	return render_template('index.html', list_p=list_p)

if __name__ == '__main__':
	app.run()
