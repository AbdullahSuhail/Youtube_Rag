 # YouTube RAG Chatbot

This full-stack application allows users to interact with YouTube videos through an AI-powered conversational interface. The application extracts transcripts from YouTube videos, processes and splits the content into meaningful chunks, and converts them into vector embeddings for efficient semantic retrieval. Using a Retrieval-Augmented Generation (RAG) pipeline, relevant sections of the video are retrieved based on the user's query and provided as context to a Large Language Model (LLM), which generates accurate, context-aware responses. The system is built with a Django backend and React frontend, with a vector database used to store and retrieve video knowledge efficiently. Users can ask questions, request explanations, and summarize specific video content without manually watching or searching through the entire video.

# SCREENSHOTS:

## 1.Getting the Video URL
<img width="1343" height="855" alt="00-GettingVIdeoURL" src="https://github.com/user-attachments/assets/8226fe24-ddda-4030-b485-867f96e01b0d" />

## 2. Front Screen 
<img width="1886" height="870" alt="01-FrontScreen" src="https://github.com/user-attachments/assets/fde6fcea-c146-425f-b195-dc47a9e5173f" />

## 3. Pasting the URL and click 
<img width="1882" height="858" alt="02-inputUrl" src="https://github.com/user-attachments/assets/974ba367-ace5-4038-b62f-6aa1f19bccaa" />

## 4.Chatbox UI
<img width="1896" height="861" alt="03-chatboxScreen" src="https://github.com/user-attachments/assets/6793b41a-8210-4991-ad99-b8b5c7620f76" />

## Output from LLMs
<img width="1283" height="735" alt="04_OutputFromLLM" src="https://github.com/user-attachments/assets/9617c3fe-81dc-41f8-9d90-7ea9df0e2a06" />

# Key Features

**YouTube Transcript Extraction:** Automatically retrieves transcripts from YouTube videos and processes the content for downstream analysis.

**Semantic Chunking & Embeddings:** Splits video transcripts into meaningful chunks and converts them into vector embeddings for efficient semantic search.

**Retrieval-Augmented Generation (RAG):** Retrieves the most relevant sections of a video's transcript based on the user's question and provides them as context to the LLM for accurate, context-aware responses.

**AI-Powered Video Q&A:** Uses an LLM to answer questions, explain concepts, and summarize information based specifically on the processed video content.

**Vector Database:** Stores transcript embeddings in a vector database, enabling fast similarity-based retrieval of relevant video content.

**Modern UI:** A responsive React and Tailwind CSS interface that provides a clean conversational experience for processing videos and interacting with their content.


# Tech Stack

### Frontend

**React.js:** Library for building the interactive user interface and conversational chat experience.

**Tailwind CSS:** Utility-first CSS framework used for responsive and modern UI styling.

### Backend

**Django:** Python web framework used to build the backend API and manage application logic.

**YouTube Transcript API:** Used to retrieve transcripts from YouTube videos for processing and analysis.

**Python NLP/Text Processing:** Used for transcript cleaning, preprocessing, and splitting content into meaningful chunks.

### AI & RAG

**Sentence Transformers:** Used to generate vector embeddings from transcript chunks and user queries for semantic similarity search.

**ChromaDB:** Vector database used to store and retrieve transcript embeddings efficiently.

**RAG Pipeline:** Retrieves relevant transcript chunks based on user questions and supplies them as context to the LLM.

**LLM Integration:** Used to generate context-aware answers based on the retrieved information from the YouTube video.


# How It Works

**Transcript Extraction:** The backend receives a YouTube video URL and retrieves the available transcript using the YouTube Transcript API.

**Text Processing:** The transcript is cleaned and divided into smaller, meaningful chunks to make the content suitable for embedding and retrieval.

**Embedding Generation:** Each transcript chunk is converted into a numerical vector representation using a sentence-transformer embedding model, capturing the semantic meaning of the content.

**Vector Storage:** The generated embeddings and their corresponding transcript chunks are stored in ChromaDB, enabling efficient similarity-based searches.

**Semantic Retrieval:** When a user asks a question, the question is converted into an embedding and compared against the stored vectors to retrieve the most relevant sections of the video transcript.

**AI Response Generation:** The retrieved transcript sections are provided as context to the LLM along with the user's question. The LLM then generates a context-aware response based on the information retrieved from the video.

