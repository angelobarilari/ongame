from .serializers import CommentSerializer
from .models import Comment

from rest_framework import generics
from rest_framework.permissions import AllowAny

from users.authentication.custom_jwt_auth import CustomJWTAuthentication
from users.authentication.custom_owner_or_admin_auth import (
    IsOwnerOrAdminOrReadOnly,
)

from topics.models import Topic


class ListCommentsViews(generics.ListAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()


class CreateCommentsView(generics.CreateAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [AllowAny]

    def get_authenticators(self):
        if self.request.method == "POST":
            return [CustomJWTAuthentication()]

        return super().get_authenticators()

    def perform_create(self, serializer):
        topic = Topic.objects.get(topic_id=self.kwargs.get("pk"))
        serializer.save(author=self.request.user, topic=topic)


class ListUserCommentsView(generics.ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        return Comment.objects.filter(author_id=self.kwargs["pk"])


class DetailCommentView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    authentication_classes = [CustomJWTAuthentication]
    permission_classes = [IsOwnerOrAdminOrReadOnly]
