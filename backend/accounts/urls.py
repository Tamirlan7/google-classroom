from django.urls import path
from . import views


urlpatterns = [
    path('authenticated/', views.CheckAuthenticated.as_view()),
    path('register/', views.RegisterUser.as_view()),
    path('login/', views.LoginUser.as_view()),
    path('logout/', views.LogoutUser.as_view()),
    path('csrf_cookie/', views.GetCSRFToken.as_view()),
    path('users/', views.GetUsersView.as_view()),
]