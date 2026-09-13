print("step 1")
from .vectordb import collection
print("step 1.5")

print("step 2")
def retrieve(query_embedding, k=3):
    results = collection.query(
        query_embeddings=[query_embedding.tolist()],
        n_results=k
    )
    return results['documents'][0]