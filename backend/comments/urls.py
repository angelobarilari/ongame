from django.urls import path

from . import views

urlpatterns = [
    path("comments/", views.ListCommentsView.as_view()),
    path("comments/<int:pk>/", views.CreateCommentView.as_view()),
    path("comments/detail/<int:pk>/", views.DetailCommentView.as_view())
]
