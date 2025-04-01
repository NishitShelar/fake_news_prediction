from flask import Flask, request, jsonify
import joblib
import numpy as np
import re  # Importing the re module for regular expressions

app = Flask(__name__)

# Load the saved model and vectorizer
model = joblib.load('naive_bayes_model.pkl')
vectorizer = joblib.load('vectorizer.pkl')

# API route to predict fake or real news
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()  # Get input data (JSON)
        title = data['title']
        text = data['text']

        # Combine title and text
        combined_text = title + " " + text

        # Preprocess the input text
        # Remove non-alphabetical characters using regular expressions
        combined_text = re.sub(r"[^a-z\s]", "", combined_text.lower())

        # Convert to TF-IDF features
        combined_text_tfidf = vectorizer.transform([combined_text])

        # Make prediction and get probabilities
        prediction = model.predict(combined_text_tfidf)
        prediction_prob = model.predict_proba(combined_text_tfidf)

        # Get fake and real probabilities
        fake_prob = prediction_prob[0][1]  # Probability of Fake
        real_prob = prediction_prob[0][0]  # Probability of Real

        result = 'Fake' if prediction[0] == 1 else 'Real'

        # Return prediction and probabilities as JSON
        return jsonify({
            'prediction': result,
            'fake_prob': fake_prob,
            'real_prob': real_prob
        })
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == "__main__":
    app.run(debug=True)
