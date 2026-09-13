 # YouTube RAG Chatbot

This full-stack application allows users to interact with YouTube videos through an AI-powered conversational interface. The application extracts transcripts from YouTube videos, processes and splits the content into meaningful chunks, and converts them into vector embeddings for efficient semantic retrieval. Using a Retrieval-Augmented Generation (RAG) pipeline, relevant sections of the video are retrieved based on the user's query and provided as context to a Large Language Model (LLM), which generates accurate, context-aware responses. The system is built with a Django backend and React frontend, with a vector database used to store and retrieve video knowledge efficiently. Users can ask questions, request explanations, and summarize specific video content without manually watching or searching through the entire video.

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
