from dotenv import load_dotenv
import os
from groq import Groq

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))
print(os.getenv("GROQ_API_KEY"))
# Initialize client
# client = Groq(api_key="YOUR_GROQ_API_KEY")

def generate_answer(context, question):
    prompt = f"""Context:{context}Question:{question}"""

    response = client.chat.completions.create(
       model="openai/gpt-oss-20b",   # or mixtral-8x7b-32768, llama3-70b-8192
        messages=[
            {"role": "user", "content": prompt}
        ],
        temperature=0.3
    )

    return response.choices[0].message.content
