from django.urls import path

from . import views

urlpatterns = [
    path("users/register/user/", views.CreateUserView.as_view()),
    path("users/register/admin/", views.CreateAdminView.as_view()),
    path("users/", views.ListUsersView.as_view()),
    path("users/<int:pk>/", views.DetailUserlView.as_view()),
    path("login/", views.CustomObtainAuthToken.as_view()),
]
