from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')
# model="openai/gpt-oss-20b"
def embed_chunks(chunks):
    # return chunks
    return model.encode(chunks)