from django.urls import path

from . import views

urlpatterns = [
    path("topics/", views.ListCreateTopicView.as_view()),
]
