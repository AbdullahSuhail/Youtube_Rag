from django.urls import path
from .views import process_video, ask_question

urlpatterns = [
    path('process-video/', process_video),
    path('ask/', ask_question),
]