from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
import json
from django.http import JsonResponse
from .services.transcript import get_transcript
from .services.chunking import chunk_text
from .services.embedding import embed_chunks
from .services.vectordb import store_embeddings
from .services.retrieve import retrieve
from .services.llm import generate_answer
from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')


@csrf_exempt
def process_video(request):

    print("Enter process video")
    data = json.loads(request.body)


    video_id = data.get("video_id")

    print(video_id)

    # video_id="https://www.youtube.com/watch?v=81wYku0EZ4w"

    text = get_transcript(video_id)
    chunks = chunk_text(text)
    embeddings = embed_chunks(chunks)
    store_embeddings(chunks, embeddings)

    print("RAG Process done")

    return JsonResponse({"message": "Video processed"})


@csrf_exempt
def ask_question(request):
    print("1")

    data = json.loads(request.body)
    question = data.get("question")

    print("2", question)

    query_embedding = model.encode([question])[0]

    print("3")

    docs = retrieve(query_embedding)

    print("4", docs)

    context = " ".join(docs)

    print("5")

    answer = generate_answer(context, question)

    print("6", answer)

    return JsonResponse({"answer": answer})
    # data = json.loads(request.body)
    # question = data.get("question")

    # query_embedding = model.encode([question])[0]
    # docs = retrieve(query_embedding)
    # context = " ".join(docs)

    # answer = generate_answer(context, question)

    # return JsonResponse({"answer": answer})