from rest_framework import generics
from rest_framework.permissions import AllowAny

from .serializers import CommentSerializer
from .models import Comment
from users.authentication.custom_auth import (
    CustomJWTAuthentication,
    IsOwnerOrReadOnly,
)

# Create your views here.


class ListCreateCommentsView(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [AllowAny]

    def get_authenticators(self):
        if self.request.method == 'POST':
            return [CustomJWTAuthentication()]
        
        return super().get_authenticators()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class ListUserCommentsView(generics.ListAPIView):
    serializer_class = CommentSerializer
    
    def get_queryset(self):
        return Comment.objects.filter(author_id=self.kwargs["pk"])

class DetailCommentView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [IsOwnerOrReadOnly]
