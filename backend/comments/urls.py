from django.urls import path

from . import views

urlpatterns = [
    path("comments/", views.ListCreateCommentsView.as_view()),
    path("comments/detail/<int:pk>/", views.DetailCommentView.as_view()),
    path("comments/user/<int:pk>/", views.ListUserCommentsView.as_view()),
]
