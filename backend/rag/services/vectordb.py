import chromadb

client = chromadb.Client()
collection = client.get_or_create_collection("youtube")

def store_embeddings(chunks, embeddings):
    for i, chunk in enumerate(chunks):
        collection.add(
            documents=[chunk],
            embeddings=[embeddings[i].tolist()],
            ids=[str(i)]
        )

    print(collection.peek())