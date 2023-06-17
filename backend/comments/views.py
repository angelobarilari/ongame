from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
# from rest_framework_simplejwt.authentication import JWTAuthentication

from .serializers import CommentSerializer
from .models import Comment
from .authentication.custom_auth import CustomJWTAuthentication, IsOwnerOrReadOnly

# Create your views here.
        
class ListCommentsView(generics.ListAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()


class CreateCommentView(generics.CreateAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    def perform_create(self, serializer):
        serializer.save(author_id=self.kwargs.get('pk'))
        
class DetailCommentView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [IsOwnerOrReadOnly]

