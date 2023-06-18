from django.urls import path

from . import views

urlpatterns = [
    path("comments/", views.ListCommentsViews.as_view()),
    path("comments/<int:pk>", views.CreateCommentsView.as_view()),
    path("comments/detail/<int:pk>/", views.DetailCommentView.as_view()),
    path("comments/user/<int:pk>/", views.ListUserCommentsView.as_view()),
]
