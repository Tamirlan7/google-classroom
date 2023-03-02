from django.urls import path
from .views import *


urlpatterns = [
    path('<str:code>/', RoomApi.as_view()),
    path('', RoomApi.as_view()),
]

