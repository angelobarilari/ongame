from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from users.authentication.custom_jwt_auth import CustomJWTAuthentication
from users.authentication.custom_owner_or_admin_auth import (
    IsOwnerOrAdminOrReadOnly,
    IsAdminOrReadOnly,
)

from .serializers import CategorySerializer
from .models import Category


class ListCategoryView(generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class CreateCategoryView(generics.CreateAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    permission_classes = [IsAdminUser]


class DetailCategoryView(generics.RetrieveUpdateAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [IsOwnerOrAdminOrReadOnly]
