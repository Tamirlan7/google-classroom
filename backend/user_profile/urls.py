from django.urls import path
from . import views


urlpatterns = [
    path('', views.GetProfile.as_view())
]
