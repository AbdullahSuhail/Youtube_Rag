import re
from youtube_transcript_api import YouTubeTranscriptApi

def extract_video_id(url):
    pattern = r"(?:v=|youtu\.be/)([a-zA-Z0-9_-]{11})"
    match = re.search(pattern, url)
    
    if match:
        return match.group(1)
    else:
        raise ValueError("Invalid YouTube URL")

def get_transcript(video_url):
    video_id = extract_video_id(video_url)

    ytt_api = YouTubeTranscriptApi()
    transcript = ytt_api.fetch(video_id)

    return " ".join([t.text for t in transcript])
    

# test
print(get_transcript("https://www.youtube.com/watch?v=HaVmh9GXb3U"))