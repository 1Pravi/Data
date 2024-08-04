from flask import Blueprint, jsonify

main = Blueprint('main', __name__)


@main.route('/api/data')
def get_data():
    data = {
        'labels': ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        'datasets': [{
            'label': 'Sales',
            'backgroundColor': 'rgba(75,192,192,0.4)',
            'borderColor': 'rgba(75,192,192,1)',
            'data': [65, 59, 80, 81, 56, 55, 40]
        }]
    }
    return jsonify(data)
