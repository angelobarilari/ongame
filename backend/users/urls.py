from django.urls import path

from . import views

urlpatterns = [
    path("register/", views.CreateUserView.as_view()),
    path("users/", views.ListUsersView.as_view()),
    path("login/", views.TokenCreateView.as_view()),
    path('users/<str:pk>/', views.UserDetailView.as_view()),
]
