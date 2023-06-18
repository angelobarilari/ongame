from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from .serializers import CategorySerializer
from .models import Category

# Create your views here.


class ListCreateCategoryView(generics.ListCreateAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    permission_classes = [IsAdminUser]
