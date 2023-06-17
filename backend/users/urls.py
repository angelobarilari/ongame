from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

from . import views

urlpatterns = [
    path("users/register/", views.CreateUserView.as_view()),
    path("users/", views.ListUsersView.as_view()),
    path("users/<str:pk>/", views.DetailUserlView.as_view()),
    # path("login/", views.CreateTokenView.as_view()),
    path("login/", views.CustomObtainAuthToken.as_view()),
]
