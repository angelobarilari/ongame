from django.urls import path

from . import views

urlpatterns = [
    path("topics/", views.ListCreateTopicView.as_view()),
    path("topics/<int:pk>", views.DetailTopicView.as_view()),
]
