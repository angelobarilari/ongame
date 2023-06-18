from django.urls import path

from . import views

urlpatterns = [
    path("categories/", views.ListCategoryView.as_view()),
    path("categories/create/", views.CreateCategoryView.as_view()),
    path("categories/<int:pk>", views.DetailCategoryView.as_view()),
]
